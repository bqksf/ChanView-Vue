<template>
  <div>
      <a-button class="fr" slot="email" type="primary" @click="sendEmail"
        >推送邮件
      </a-button>
    <a-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange"
    >
      <a-table-column type="index" label="序号" width="50"></a-table-column>
      <a-table-column prop="_id" label="id"></a-table-column>
      <a-table-column prop="avatarImg" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatarImg" alt height="50" />
        </template>
      </a-table-column>
      <a-table-column prop="nickName" label="昵称"></a-table-column>
      <a-table-column prop="email" label="邮箱"></a-table-column>
      <a-table-column prop="url" label="博客/github网址"></a-table-column>
      <a-table-column label="操作" width="90">
        <template slot-scope="scope">
          <a-button
            type="text"
            size="small"
            @click="$router.push(`/users/editor/${scope.row._id}`)"
            >编辑</a-button
          >
          <a-button type="text" size="small" @click="deleteHandle(scope.row)"
            >删除</a-button
          >
        </template>
      </a-table-column>
      <a-table-column type="selection" width="55"></a-table-column>
    </a-table>
    <a-modal
      title="上传文件"
      :visible.sync="dialogVisible"
      width="320px"
      center
    >
      <a-form :model="form" :rules="formRules" ref="form">
        <a-form-item props="sendContent" label="发送内容">
          <a-input v-model="form.sendContent"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="sendhandle">提交</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      title: "",
      multipleSelection: [],
      emailArr: [],
      form: {
        sendContent: "",
      },
      formRules: {},
      dialogVisible: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let res = await this.$http.get("/rest/users");
      this.tableData = res.data;
    },
    deleteHandle(data) {

      this.$confirm({
        title: "提示", content: "是否确定要删除留言: " + data.content + " ?",
        onOk: async () => {
          let res = await this.$http.delete("/rest/users/" + data._id);
          if (res.data.success) {
            this.$message.success("删除成功");
            await this.getList();
          } else {
            this.$message.error("删除失败");
          }
        },
        onCancel: () => {
          this.$message.info("取消删除");
        }});

    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val.map((v) => {
        return { email: v.email, subject: v.nickName };
      });
      console.log(this.multipleSelection);
    },
    async sendEmail() {
      if (this.multipleSelection.length === 0) {
        return this.$message.warning("请选一个");
      }
      this.dialogVisible = true;
    },
    sendhandle() {
      let promiseArr = [];
      this.multipleSelection.forEach((e) => {
        let replyObj = {
          recipient: e.email,
          subject: e.subject,
          html: this.form.sendContent,
        };
        promiseArr.push(this.$http.post("/email", replyObj));
      });
      Promise.all(promiseArr).then((res) => {
        console.log(res);
        this.dialogVisible = false;
      });
      // .catch(err => {
      //   this.dialogVisible = false;
      // });
    },
  },
};
</script>

<style lang="scss" scoped></style>
