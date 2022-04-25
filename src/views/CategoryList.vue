<template>
  <div>
    <!--    TODO 样式、删除键、删除逻辑-->
    <a-row type="flex" :gutter="24">
      <a-col :span="24" :md="24" class="mb-24">
        <a-card :bordered="false" class="header-solid h-full">
          <router-link to="/categories/create">
            <a-button type="primary">
              <a-icon type="plus-circle" class="mr-8"></a-icon>
              添加分类
            </a-button>
          </router-link>
          <a-table :columns="columns" :data-source="items" style="width: 100%">
            <template slot-scope="row" slot="editBtn">
              <a-button
                  type="link"
                  size="small"
                  icon="delete"
                  @click="remove(row._id)"
                  style="color: red"
              >删除
              </a-button
              >
              <a-button
                  type="link"
                  size="small"
                  icon="edit"
                  @click="$router.push(`/categories/edit/${row._id}`)"
              >编辑
              </a-button
              >
            </template>
          </a-table>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    width: 480
  },
  {
    title: '分类名称',
    dataIndex: 'name',
    class: 'font-semibold text-muted',
  },
  {
    title: '操作',
    scopedSlots: {customRender: 'editBtn'},
    width: 200
  },
];

export default {
  data() {
    return {
      items: [],
      columns
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/categories");
      this.items = res.data;
    },
    async remove(id) {
      this.$confirm({
        title: "提示", content: "是否确定要删除该分类?",
        onOk: async () => {
          await this.$http.delete(`rest/categories/${id}`);
          this.$message.success("删除成功");
          await this.fetch();
        },
        onCancel: () => {
          this.$message.info("已取消删除");
        }
      });
    },
  },
  created() {
    this.fetch();
  },
}
</script>
