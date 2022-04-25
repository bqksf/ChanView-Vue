<template>

  <!-- Billing Information Card -->
  <a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: 0, paddingBottom: '16px' }">
    <CardBarChart></CardBarChart>
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <div class="js-lives__date">
            <div class="calendar"><span class="month">4<img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAA4CAYAAADn2zjOAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG3SURBVHgBtZbtTcMwEIbPhgHKAJVALMAGdAPYAEajG7QbhA2YAJIJ6AK1OedHRJKzfR/O+yfqRenTe2Slr4MGucfE6H+IW72HJvGv1DRGODcB4Be9UXPvw4cDY0p6huH7wbzB9QoHao5bdelqBnjvSD0hhGO6mhTV9Iw/AAyp6TEDanpS1Io4esYfAcpw9JgA3t+80PNw/v9ZpQjt7FDPL3HrgnruZkBQBPXk3j2n5UwFcM4/U3M8VZ+NAPQGuNtqg1sQZr9/xC+Pu+U8xngehv6ynIs3cC5mTo8/kXMQA+jzj3o6MwCP5yFd1ndi12PACgjBk+8ePFXH3DMigFSPCKDRIwJo9IgAGj1sAOp5AlrPV0kPG4B63ql5jO5Ye5YFQD25d/+p9mwVkP4agdQDfU0PC1DqncBIFVDqncBI8S+T2xxKKW7AbQ5qAKdY1ZJV1EJPSnaDFnqKgBZ6UkhFrfSkkBu00pMFcHsnJytFkt7JyWoDSe9UASS9Uwng905OZt1U2js5mW0g7Z0KgK45sADaYsUGaIsVG7CFngmwlZ4JsJWeCbCVnhFg6Z0sgKV3sgCW3snJHxCh8YsP/9ZkAAAAAElFTkSuQmCC"
                alt="" style="width:12px;height:28px;margin:0 5px;vertical-align: auto">15</span></div>
            <div class="info"><span class="current">今天</span> <span class="week">星期五</span></div>
          </div>
        </a-col>
        <a-col :span="24" :md="12" style="display: flex; align-items: showItems; justify-content: flex-end">
          <a-radio-group v-model="currentShowCate" size="small" @change="onChange">
            <a-radio-button value="1">全部</a-radio-button>
            <a-radio-button value="11">精选</a-radio-button>
            <a-radio-button value="12">NFT</a-radio-button>
            <a-radio-button value="13">政策</a-radio-button>
            <a-radio-button value="14">数据</a-radio-button>
            <a-radio-button value="15">项目</a-radio-button>
          </a-radio-group>
        </a-col>
      </a-row>
    </template>
    <a-modal v-model="visible" title="新闻正文">
      <p>{{content}}</p>
      <template slot="footer">
        <a-button type="primary" @click="visible = false">确定</a-button>
      </template>
    </a-modal>
    <a-row :gutter="[24, 24]" class="mt-20">
      <a-col :span="24" style="padding-left: 25px;padding-right: 25px">
        <!-- Orders History Timeline Card -->
        <a-timeline pending="没有更多了...">
          <a-timeline-item :color="item.category===11 ?'red':'blue'" v-for="item in showItems" :key="item.id" @click="showModal(item.content)">
            {{item.content_prefix}}
            <p>{{item.time}}</p>
          </a-timeline-item>
          <template #pendingDot></template>
        </a-timeline>
        <a-button type="primary" size="small" @click="backTop" class="button-center">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H14C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3H3Z"
                fill="#111827"/>
            <path
                d="M3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H3Z"
                fill="#111827"/>
            <path
                d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H3Z"
                fill="#111827"/>
            <path
                d="M13 16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16L15 10.4142L16.2929 11.7071C16.6834 12.0976 17.3166 12.0976 17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929L14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289L10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071L13 10.4142L13 16Z"
                fill="#111827"/>
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
import CardBarChart from './CardBarChart.vue';

export default ({
  components: {
    CardBarChart
  },
  data() {
    return {
      // Active button for the "Authors" table's card header radio button group.
      items: null,
      currentShowCate: '1',
      showItems: null,
      visible: false,
      content: null
    }
  },
  methods:{
    showModal(content) {
      this.visible = true;
      this.content = content;
    },
    async fetch(){
      const res = await this.$http.get("rest/new");

      this.items = res.data;
      this.showItems = this.items;
    },
    onChange(e) {
      if (e.target.value === '1') {
        this.showItems = this.items;
      } else {
        this.showItems = this.items.filter(item => item.category == e.target.value);
      }
    },
    backTop() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    this.fetch()
  }
})

</script>

<style scoped>
.button-center {
  display: block;
  margin: 0 auto;
}
.js-lives__date {
  float: left;
  height: 30px;
}
.js-lives__date .calendar {
  float: left;
  height: 30px;
  display: flex;
  margin-right: 8px;
}
.js-lives__date span {
  display: inline-block;
  height: 20px;
  font-family: DINOT-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 30px;
  color: #000;
}
.js-lives__date .info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 30px;
  margin-top: 2px;
}
.js-lives__date .info .current {
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 5px;
  color: #1f1f22;
  height: 12px;
}
.js-lives__date .info .week {
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 11px;
  color: #767680;
}
</style>