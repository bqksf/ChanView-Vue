<template>

  <!-- Main Sidebar -->
  <a-layout-sider
      collapsible
      class="sider-primary"
      breakpoint="lg"
      collapsed-width="0"
      width="250px"
      :collapsed="sidebarCollapsed"
      @collapse="$emit('toggleSidebar', ! sidebarCollapsed)"
      :trigger="null"
      :class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]"
      theme="light"
      :style="{ backgroundColor: 'transparent',}">
    <div class="brand"><img src="images/logo-ct-black.png" alt=""> <span>ChainView 仪表盘</span></div>
    <hr>

    <!-- Sidebar Navigation Menu -->
    <a-menu theme="light" mode="inline">
      <a-sub-menu>
        <span slot="title">
          <span class="icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
                    d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
                    fill="#111827"/>
								<path
                    d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
                    fill="#111827"/>
								<path
                    d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
                    fill="#111827"/>
							</svg>
          </span>
          <span class="label">发现</span>
        </span>
        <a-menu-item-group>
          <template slot="title"></template>
        <a-menu-item>
          <router-link to="/gas-tracker">
            <span class="label">Gas费跟踪</span>
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/eth-deposit-contract">
            <span class="label">ETH2.0</span>
          </router-link>
        </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title">
          <span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
                    d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
                    fill="#111827"/>
								<path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
                      fill="#111827"/>
							</svg>
            </span>
          <span class="label">项目</span>
        </span>
        <a-menu-item-group>
          <template slot="title"></template>
          <a-menu-item>
            <router-link to="/axie">
              <span class="label">Axie Infinity</span>
            </router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/lido">
              <span class="label">Lido</span>
            </router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/looks">
              <span class="label">LooksRare</span>
            </router-link>
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>

      <a-sub-menu>
        <span slot="title">
          <span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3 6C3 4.34315 4.34315 3 6 3H16C16.3788 3 16.725 3.214 16.8944 3.55279C17.0638 3.89157 17.0273 4.29698 16.8 4.6L14.25 8L16.8 11.4C17.0273 11.703 17.0638 12.1084 16.8944 12.4472C16.725 12.786 16.3788 13 16 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V6Z"
                      fill="#111827"/>
							</svg>
            </span>
          <span class="label">其他公链</span>
        </span>
        <a-menu-item-group>
          <template slot="title"></template>
          <a-menu-item>
            <router-link to="/arb">
              <span class="label">Arbitrum</span>
            </router-link>
          </a-menu-item>

        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu v-if="username === 'te1'">
        <span slot="title">
          <span class="icon">
							<svg viewBox="64 64 896 896" data-icon="read" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z"></path></svg>
            </span>
          <span class="label">博客管理</span>
        </span>
        <a-menu-item-group>
          <template slot="title"></template>
          <a-menu-item>
            <router-link to="/categories/list">
              <span class="label">分类管理</span>
            </router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/articles/list">
              <span class="label">文章管理</span>
            </router-link>
          </a-menu-item>
<!--          <a-menu-item>-->
<!--            <router-link to="/comments/list">-->
<!--              <span class="label">评论管理</span>-->
<!--            </router-link>-->
<!--          </a-menu-item>-->
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item class="menu-item-header">
        账号
      </a-menu-item>
      <a-menu-item>
        <router-link to="/profile">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
                      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
                      fill="#111827"/>
							</svg>
						</span>
          <span class="label">个人中心</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/alert">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
                      fill="#111827"/>
							</svg>
						</span>
          <span class="label">行情提醒</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/news">
						<span class="icon">
							<svg viewBox="64 64 896 896" data-icon="rocket" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"><path d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8L864 736zM512 352a48.01 48.01 0 0 1 0 96 48.01 48.01 0 0 1 0-96zm116.1 432.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5z"></path></svg>
						</span>
          <span class="label">新闻服务</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <!-- / Sidebar Navigation Menu -->

    <!-- Sidebar Footer -->
    <div class="aside-footer">
      <div class="footer-box">
					<span class="icon">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
                  d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
                  fill="#111827"/>
							<path
                  d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
                  fill="#111827"/>
							<path
                  d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
                  fill="#111827"/>
						</svg>
					</span>
        <h6>需要帮助?</h6>
        <p>可以看看我们的文章</p>
        <router-link to="/blog">
        <a-button type="primary" block
                  target="_blank">
          博客
        </a-button>
        </router-link>
      </div>
    </div>
    <!-- / Sidebar Footer -->
<!-- v-if="VIP == ''" -->
    <router-link to="/price">
    <a-button type="primary"  block
              target="_blank" >
      升级到Pro计划
    </a-button>
    </router-link>

  </a-layout-sider>
  <!-- / Main Sidebar -->

</template>

<script>

export default ({
  props: {
    // Sidebar collapsed status.
    sidebarCollapsed: {
      type: Boolean,
      default: false,
    },

    // Main sidebar color.
    sidebarColor: {
      type: String,
      default: "primary",
    },

    // Main sidebar theme : light, white, dark.
    sidebarTheme: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      // sidebarCollapsedModel: this.sidebarCollapsed,
      username:localStorage.getItem('username') || "",
      VIP:localStorage.getItem('vip') || "",
    }
  },
})

</script>

<style>
.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu.ant-menu-submenu-open .ant-menu-submenu-title {
  background-color: #fff;
  box-shadow: 0 20px 27px rgba(0, 0, 0, .05)
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-submenu-title {
  padding: 0 !important;
  height: auto;
  line-height: normal;
  padding: 10px 16px !important;
  color: #141414;
  border-radius: 8px;
  background-color: transparent;
  box-shadow: none;
  transition: all .3s ease-in-out
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-title {
  display:none
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-item a:hover, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu a:hover {
  color:#141414
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-item a:hover .icon, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu a:hover .icon {
  transition: box-shadow .1s ease-in;
  box-shadow:0 2px 4px rgba(0, 0, 0, .12)
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-item.menu-item-header, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu.menu-item-header {
  padding: 10px 16px !important;
  color: #8c8c8c;
  font-weight: 700;
  font-size: 13px;
  text-transform:uppercase
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-submenu-title {
  padding: 0 !important;
  height: auto;
  line-height: normal;
  padding: 10px 16px !important;
  color: #141414;
  border-radius: 8px;
  background-color: transparent;
  box-shadow: none;
  transition:all .3s ease-in-out
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-submenu-title .icon, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-submenu-title .label, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-submenu-title svg path {
  transition:all .3s ease-in-out
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu.ant-menu-submenu-open .ant-menu-submenu-title {
  background-color: #fff;
  box-shadow:0 20px 27px rgba(0, 0, 0, .05)
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu.ant-menu-submenu-open .ant-menu-submenu-title .icon {
  background-color:#1890ff
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu.ant-menu-submenu-open .ant-menu-submenu-title svg path {
  fill:#fff
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu.ant-menu-submenu-open .ant-menu-submenu-title .label {
  font-weight:600
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-title {
  display:none
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list {
  padding-left: 16px;
  margin-left:24px
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title {
  background-color: transparent;
  box-shadow: none;
  transition: all .3s ease-in-out;
  transition:none
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title .icon, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title .label, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title svg path {
  transition:all .3s ease-in-out
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list a {
  position: relative;
  margin-left:4px
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title:before, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list a:before {
  content: "";
  position: absolute;
  left: -14px;
  top: 53%;
  transform: translateY(-50%);
  height: 5px;
  width: 5px;
  border-radius: 1.5rem;
  background:rgba(58, 65, 111, .5)
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title.router-link-active, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title.router-link-exact-active, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list a.router-link-active, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list a.router-link-exact-active {
  background-color: transparent;
  box-shadow:none
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title.router-link-active .label, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title.router-link-exact-active .label, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list a.router-link-active .label, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list a.router-link-exact-active .label {
  font-weight:400
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title.router-link-exact-active .label, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list a.router-link-exact-active .label {
  font-weight:600
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-submenu-title.router-link-exact-active:before, .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list a.router-link-exact-active:before {
  height: 8px;
  width: 8px;
  background: #3a416f;
  left:-15.5px
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-item-group-list {
  padding-left: 0;
  margin-left:0
}

.layout-dashboard .ant-layout-sider.sider-primary .ant-menu-submenu .ant-menu-item-group-list .ant-menu-item-group-list a:before {
  display:none
}

.layout-dashboard .ant-layout-sider.sider-primary.ant-layout-sider-white .ant-menu-item .icon {
  background-color:#fafafa
}

.layout-dashboard .ant-layout-sider.sider-primary.ant-layout-sider-white .ant-menu-item.ant-menu-item-selected .router-link-active, .layout-dashboard .ant-layout-sider.sider-primary.ant-layout-sider-white .ant-menu-item .router-link-active {
  background-color: transparent;
  box-shadow:none
}

.layout-dashboard .ant-layout-sider.sider-primary.ant-layout-sider-white .ant-menu-item.ant-menu-item-selected .router-link-active .icon, .layout-dashboard .ant-layout-sider.sider-primary.ant-layout-sider-white .ant-menu-item .router-link-active .icon {
  background-color:#1890ff
}

.layout-dashboard .ant-layout-sider.sider-primary.ant-layout-sider-white .ant-menu-item.ant-menu-item-selected .router-link-active svg path, .layout-dashboard .ant-layout-sider.sider-primary.ant-layout-sider-white .ant-menu-item .router-link-active svg path {
  fill:#fff
}
</style>