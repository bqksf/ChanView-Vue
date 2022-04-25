<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
    <a-form laba-width="120px" @submit.native.prevent="save">
      <a-form-item label="用户名">
        <a-input v-model="model.username"></a-input>
      </a-form-item>
      <a-form-item label="密码">
        <a-input type="text" v-model="model.password"></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" native-type="submit">保存</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/admin_users", this.model);
      }
      await this.$router.push("/admin_users/list");
      this.$message.success("保存成功");
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
