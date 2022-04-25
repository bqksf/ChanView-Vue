<template>
  <div>
    <a-row type="flex" :gutter="24">
      <a-col :span="24" :md="24" class="mb-24">
        <a-card :bordered="false" class="header-solid h-full">
    <a-form label-width="80px" @submit.native.prevent="save" :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-form-item label="名称">
        <a-input v-decorator="['name', { rules: [{ required: true, message: '请输入分类名称' }] }]" placeholder="请输入分类名称"></a-input>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" block html-type="submit">保存</a-button>
      </a-form-item>
    </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      form: this.$form.createForm(this, { name: 'category' }),
    };
  },
  methods: {
    async save() {
      this.form.validateFields((err, values) => {
        if (!err) {
          if (this.id) {
            this.$http.put(`rest/categories/${this.id}`, values);
          } else {
            this.$http.post("rest/categories", values);
          }
          this.$router.push("/categories/list");
          this.$message.success("保存成功");
        }
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.form.setFieldsValue(res.data);
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
