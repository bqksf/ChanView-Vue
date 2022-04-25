<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
	<div>

		<!-- Sign Up Image And Headings -->
		<div class="sign-up-header" style="background-image: url('images/bg-signup.jpg')">
			<div class="content">
				<h1 class="mb-5">注册</h1>
				<p class="text-lg">请在下方输入您的信息进行注册</p>
			</div>
		</div>
		<!-- / Sign Up Image And Headings -->
		
		<!-- Sign Up Form -->
		<a-card :bordered="false" class="card-signup header-solid h-full" :bodyStyle="{paddingTop: 0}">
			<a-form
				id="components-form-demo-normal-login"
				:form="form"
				class="login-form mt-20"
				@submit="handleSubmit"
			>
				<a-form-item class="mb-10">
					<a-input
						v-decorator="[
						'username',
						{ rules: [{ required: true, message: '请输入您的用户名!' }] },
						]"
						placeholder="请输入用户名"
					>
					</a-input>
				</a-form-item>
				<a-form-item class="mb-5">
					<a-input
						v-decorator="[
						'password',
						{ rules: [{ required: true, message: '请输入您的密码!' }] },
						]"
						type="password"
						placeholder="请输入密码"
					>
					</a-input>
				</a-form-item>
				<a-form-item class="mb-10">
					<a-checkbox
						v-decorator="[
						'remember',
						{
							valuePropName: 'checked',
							initialValue: true,
						},
						]"
					>
						我同意 <a href="#" class="font-bold text-dark">隐私用户协议</a>
					</a-checkbox>
				</a-form-item>
				<a-form-item>
					<a-button type="primary" block html-type="submit" class="login-form-button">
						注册
					</a-button>
				</a-form-item>
			</a-form>
			<p class="font-semibold text-muted text-center">已经有账号？ <router-link to="/sign-in" class="font-bold text-dark">去登录</router-link></p>
		</a-card>
		<!-- / Sign Up Form -->

	</div>
</template>

<script>

	export default ({
		data() {
			return {
			}
		},
		beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		methods: {
			// Handles input validation after submission.
      handleSubmit(e) {
				e.preventDefault();
        this.form.validateFields(async (err, values) => {
          if (!err) {
            const res = await this.$http.post("/register", values);
            if ('username' in res.data) {
              console.log('注册成功');
              this.$message.success("注册成功");
              await this.$router.push("/sign-in");
            } else {
              this.$message.error("注册失败");
            }
          }
        });
			},
		},
	})

</script>

<style lang="scss">
</style>