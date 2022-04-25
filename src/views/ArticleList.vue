<template>
  <div>
    <a-row type="flex" :gutter="24">
      <a-col :span="24" :md="24" class="mb-24">
        <a-card :bordered="false" class="header-solid h-full" >
          <router-link to="/articles/create">
            <a-button type="primary"><a-icon type="plus-circle" class="mr-8"></a-icon>
              添加文章
            </a-button>
          </router-link>
          <a-table :data-source="items" :columns="columns">
              <template slot-scope="createdAt" slot="createdAt">
                {{ createdAt | date("YYYY-MM-DD HH:mm:ss") }}
              </template>
              <template slot-scope="updatedAt" slot="updatedAt">
                {{ updatedAt | date("YYYY-MM-DD HH:mm:ss") }}
              </template>
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
                    @click="$router.push(`/articles/edit/${row._id}`)"
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
  },
  {
    title: '文章标题',
    dataIndex: 'title',
    class: 'font-semibold text-muted',
    width: '200px',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    class: 'font-semibold text-muted',
    scopedSlots: {customRender: 'createdAt'},
  },
  {
    title: '最后更新时间',
    dataIndex: 'updatedAt',
    class: 'font-semibold text-muted',
    scopedSlots: {customRender: 'updatedAt'},
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
      const res = await this.$http.get("rest/articles");
      this.items = res.data;
    },
    remove(id) {
      this.$confirm({
        title: "提示", content: "是否确定要删除这篇文章?",
        onOk: async () => {
          await this.$http.delete(`rest/articles/${id}`);
          this.$message.success("删除成功");
          this.$router.go(0);
        },
        onCancel: () => {
          this.$message.info("取消删除");
        }
      });
    },
  },
  created() {
    this.fetch();
  },
};
</script>
