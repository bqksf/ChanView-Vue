import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import router from './router'
// import './plugins/click-away'
import http from './plugins/http'
import httpU from './plugins/httpU'
import store from './store'
import './plugins/filters'

import 'nprogress/nprogress.css'
import './scss/app.scss';

Vue.use(Antd);

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$httpU = httpU

//添加layout
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);

//全局属性
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + "/upload";
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ""}`
      };
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')