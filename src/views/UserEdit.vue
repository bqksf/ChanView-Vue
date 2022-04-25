<template>
  <div>
    <a-row type="flex" :gutter="24">

      <a-col :span="24" :md="24" class="mb-24">
        <a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: 0, paddingBottom: '16px' }">
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit"
                :hideRequiredMark="true">
          <a-form-item label="用户名" style="display: none">
          <a-input
              v-decorator="[
						'username',]" disabled/>
          </a-form-item>
          <a-form-item label="旧密码">
            <a-input
                v-decorator="[
						'oldPassword',
            {
              rules: [
                {
                  required: true,
                  message: '请输入旧密码',
                },
              ],
            },
						]" type="password" placeholder="请输入旧密码"/>
          </a-form-item>
          <a-form-item label="新密码">
            <a-input
                v-decorator="[
						'password', {
              rules: [
                {
                  required: true,
                  message: '请输入新密码',
                },
              ],
            },]"  type="password" placeholder="请输入新密码"/>
          </a-form-item>
          <a-form-item label="确认密码">
            <a-input
                v-decorator="[
            'confirm', {
              rules: [
                {
                  required: true,
                  message: '请确认新密码',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            },]" type="password" placeholder="请确认新密码"/>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" block html-type="submit">
              提交修改
            </a-button>
          </a-form-item>
        </a-form>
        </a-card>
      </a-col>
    </a-row>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const username = localStorage.getItem("username") || "";
      this.form.setFieldsValue({
        username
      });
      await this.form.validateFields(async (err, values) => {
        if (!err) {
          await this.$http.post("rest/admin_users/password", values);
          this.$message.success("修改成功");
          localStorage.clear();
          await this.$router.push("/sign-in");
        }
      });
    },
    validateToNextPassword(rule, value, callback) {
      if (value && value !== this.form.getFieldValue('password')) {
        callback('两次输入的密码不一致!');
      } else {
        callback();
      }
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
};
</script>
