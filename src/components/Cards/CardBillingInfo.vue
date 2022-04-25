<template>

	<!-- Billing Information Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: 0, paddingBottom: '16px' }">
		<template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h5 class="font-semibold m-0">监控任务</h5>
        </a-col>
        <a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
          <a-button @click="visible = true" v-if="items.status === '0'">添加任务</a-button>
          <collection-create-form
              ref="collectionForm"
              :visible="visible"
              @cancel="handleCancel"
              @create="handleCreate"
          />
        </a-col>
      </a-row>
		</template>
		<a-row :gutter="[24, 24]">
			<a-col :span="24" v-if="items.status === '1'">
			<a-card :bordered="false" class="card-billing-info">
				<div class="col-info">
					<a-descriptions title="ETH价格变化策略" :column="1">
						<a-descriptions-item label="条件">
							{{ items.large === 'big' ? '大于' : '小于' }}
						</a-descriptions-item>
						<a-descriptions-item label="数值">
							{{ items.value }}
						</a-descriptions-item>
						<a-descriptions-item label="邮箱提醒">
							{{ items.mail }}
						</a-descriptions-item>
					</a-descriptions>
				</div>
				<div class="col-action">
					<a-button type="link" size="small" @click="deletestat">
						<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path class="fill-danger" fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z" fill="#111827"/>
						</svg>
						<span class="text-danger"  >删除</span>
					</a-button>
				</div>
			</a-card>
			</a-col>
      <a-col :span="24" style="padding-left: 25px;padding-right: 25px">
      <!-- Orders History Timeline Card -->
      <a-timeline pending="监控中...">

        <a-timeline-item color="green" v-for="item in lists" :key="index">
          {{item.content}}
          <p>{{item.createdAt | date("YYYY-MM-DD HH:mm:ss")}}</p>
        </a-timeline-item>
        <template #pendingDot> </template>
      </a-timeline>
      <a-button type="primary" size="small" @click="" class="button-center">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H14C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3H3Z" fill="#111827"/>
          <path d="M3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H3Z" fill="#111827"/>
          <path d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H3Z" fill="#111827"/>
          <path d="M13 16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16L15 10.4142L16.2929 11.7071C16.6834 12.0976 17.3166 12.0976 17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929L14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289L10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071L13 10.4142L13 16Z" fill="#111827"/>
        </svg>
        回到顶部
      </a-button>
      </a-col>
      <!-- / Orders History Timeline Card -->
		</a-row>
	</a-card>
	<!-- / Billing Information Card -->

</template>

<script>
const CollectionCreateForm = {
  props: ['visible'],
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'form_in_modal' });
  },
  template: `
    <a-modal
      :visible="visible"
      title='添加新任务-ETH价格变化策略'
      okText='添加'
      cancelText="取消"
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('create') }"
    >
      <a-form layout='vertical' :form="form">
        <a-form-item label='邮箱'>
          <a-input
            v-decorator="[
              'mail',
              {
                rules: [{ required: true, message: '请输入你的邮箱!' }],
              }
            ]"
          />
        </a-form-item>
        <a-form-item class='collection-create-form_last-form-item'>
          <a-radio-group
              v-decorator="[
              'large',
              {
                initialValue: 'big',
              }
            ]"
          >
            <a-radio value='big'>大于</a-radio>
            <a-radio value='small'>小于</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label='数值'>
          <a-input
              v-decorator="[
              'value',
              {
                rules: [{ required: true, message: '请输入你的数值!' }],
              }
            ]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  `,
};

	export default ({
    components: { CollectionCreateForm },
		data() {
      return {
        visible: false,
        items: null,
        lists: null,
      }
		},
    methods: {
      showModal() {
        this.visible = true;
      },
      handleCancel() {
        this.visible = false;
      },
      handleCreate() {
        const form = this.$refs.collectionForm.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          console.log('Received values of form: ', values);
          this.$http.post("rest/admin_users/addMiss", values);
          form.resetFields();
          this.visible = false;
          this.fetch();
        });
      },
      async deletestat(){
        await this.$http.post("rest/admin_users/delete");
        await this.fetch();
      },
      async fetch(){
        const res = await this.$http.get("rest/admin_users/miss");
        this.items = res.data;
        const res2 = await this.$http.get("rest/reminds/getMissList");
        for(let i = 0; i < res2.data.length; i++){
          //去掉content里的<h1>字符串
          res2.data[i].content = res2.data[i].content.replace('<h1>','');
          res2.data[i].content = res2.data[i].content.replace('</h1>','');
        }
        this.lists = res2.data;
      }
    },
    created() {
      this.fetch();
    }
	})

</script>

<style scoped>
.button-center{
  display: block;
  margin: 0 auto;
}
</style>