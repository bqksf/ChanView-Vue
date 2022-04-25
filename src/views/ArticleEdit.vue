<template>
  <div>
    <a-row type="flex" :gutter="24">
      <a-col :span="24" :md="24" class="mb-24">
        <a-card :bordered="false" class="header-solid h-full">
          <a-form label-width="120px" @submit.native.prevent="save">
            <a-form-item label="所属分类">
              <a-select v-model="model.categories" multiple>
                <a-select-option
                    v-for="item in categories"
                    :key="item._id"
                    :value="item._id"
                >{{ item.name }}
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="标题">
              <a-input v-model="model.title"></a-input>
            </a-form-item>
            <a-form-item label="缩略图">
              <a-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :show-upload-list="false"
                  :headers="getAuthHeaders()"
                  @change="handleChange"
              >
                <img v-if="show" :src="model.icon" class="avatar" alt="avatar"/>
                <a-button v-else>
                  <a-icon type="upload"/>
                  上传图片
                </a-button>
              </a-upload>
            </a-form-item>
            <a-form-item label="详情">
              <div>
                <mavon-editor
                    code_style="monokai-sublime"
                    :ishljs="true"
                    ref="mavon"
                    v-model="model.body"
                    @imgAdd="$imgAdd"
                ></mavon-editor>
              </div>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" block html-type="submit">保存</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {mavonEditor} from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import NProgress from '../plugins/nprogress'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  name: "Create",
  components: {
    mavonEditor
  },
  props: {
    id: {}
  },
  data() {
    return {
      model: {
      },
      categories: [],
      body: "",
      show: false,
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status === 'uploading') {
        NProgress.start()
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.model.icon = imageUrl
          this.show = true
          NProgress.done()
        });
      }
    },
    async save() {
      if (this.id) {
        await this.$http.put(`rest/articles/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/articles", this.model);
      }
      await this.$router.push("/articles/list");
      this.$message.success("保存成功");
    },
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
      if (this.model.icon) {
        this.show = true
      }
    },
    async fetchCategories() {
      const res = await this.$http.get("rest/categories");
      this.categories = res.data;
    },
    // async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
    //   const formData = new FormData();
    //   formData.append("file", file);
    //   const res = await this.$http.post("upload", formData);
    //   Editor.insertEmbed(cursorLocation, "image", res.data.url);
    //   resetUploader();
    // }
    $imgAdd(pos, $file) {
      const formData = new FormData();
      formData.append("file", $file);
      this.$http.post("upload", formData).then(res => {
        console.log(res);
        this.$refs.mavon.$img2Url(pos, res.data.url);
      });
    }
  },
  created() {
    this.fetchCategories();
    this.id && this.fetch();
  }
};
</script>
