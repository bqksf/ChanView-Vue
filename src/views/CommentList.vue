<template>
  <div>
    <a-table :data="tableData" border>
      <a-table-column type="index" label="序号" width="50"></a-table-column>
      <a-table-column prop="_id" label="id"></a-table-column>
      <a-table-column prop="nickName" label="昵称"></a-table-column>
      <a-table-column prop="content" label="留言"></a-table-column>
      <a-table-column label="操作" width="90">
        <template slot-scope="scope">
          <a-button type="text" size="small">回复</a-button>
          <a-button type="text" size="small" @click="deleteHandle(scope.row)"
            >删除</a-button
          >
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      title: "",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let res = await this.$http.get("/rest/comments");
      this.tableData = res.data;
    },
    deleteHandle(data) {
      this.$confirm(`是否确定要删除留言: ${data.content} ?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await this.$http.delete(`/rest/comments/${data._id}`);
          this.getList();
          this.$message.success("删除成功");
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
  },
};
</script>
