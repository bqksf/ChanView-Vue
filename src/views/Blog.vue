<template>
  <div class="blog">
    <div class="body-wrapper">
      <div class="section hero wf-section">
        <div class="container w-container">
          <div class="centered-div _w-600"><h1 class="margin-bottom">ChainView 博客<br></h1>
            <p>最新的新闻，功能更新都会呈现在这里。</p></div>
        </div>
      </div>
      <div class="section no-padding-bottom wf-section">
        <div class="container flex-container w-container">
          <div class="two-third-big-container">
            <div class="_3-column-article-container last">
              <div class="resource-wrapper jetboost-list-wrapper-rk6b jetboost-list-wrapper-7352 w-dyn-list">
                <div role="list" class="_3-column-article-grid w-dyn-items">
                  <div role="listitem" class="_3-column-article-item w-dyn-item" v-for="(article, i) in articles"
                       :key="i">
                    <router-link
                        tag="div"
                        :to="`/blog-content/${article._id}`"
                    >
                      <div class="w-embed"><input type="hidden" class="jetboost-list-item"
                                                  value="nansen-nft-indexes-a-new-way-to-invest-in-nfts"></div>
                      <a href="/post/nansen-nft-indexes-a-new-way-to-invest-in-nfts"
                         class="thumbnail-link small-thumbnail-link w-inline-block">
                        <div class="thumbnail-container"><img
                            :src="article.icon"
                            loading="lazy" alt="Nansen NFT Indexes: A New Way To Invest In NFTs"
                            sizes="(max-width: 479px) 95vw, (max-width: 767px) 150px, (max-width: 991px) 30vw, 21vw"
                            class="thumbnail-image"></div>
                        <div class="article-info-div"><h4 class="article-thumb-title">{{ article.title }}</h4>
                          <div class="thumb-small-text-div">
                            <div class="text-margin-right">{{ article.createdAt | date("YYYY-MM-DD") }}</div>
                            <div class="flex-div w-condition-invisible"><img
                                src="https://assets-global.website-files.com/60118ca18674407b85935203/61dba3d10e73e5152eadc685_clock.svg"
                                loading="lazy" width="11" alt="" class="clock">
                              <div class="small-text-margin-right w-dyn-bind-empty"></div>
                              <div>mins</div>
                            </div>
                          </div>
<!--                          <p>The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update-->
<!--                            raises the bar for quality financial infrastructure that supports the growing depth of the-->
<!--                            NFT-->
<!--                            industry.</p>-->
                        </div>
                        <!--                      TODO 文章详情一部分-->
                        <div class="tag">
                          <div>{{ article.categories[0].name }}</div>
                        </div>
                      </a>
                    </router-link>
                  </div>
                </div>
                <div role="navigation" aria-label="List" class="w-pagination-wrapper pagination-container"
                     v-if="articles.length > -1">
                  <a @click="goToPage(1)" :class="{ current: 1 == pagination.currentPage }"
                     class="w-pagination-next new-ghost-button pagination-button ghost-button-animation">
                    <div class="w-inline-block">首页</div>
                  </a>
                  <a aria-label="Previous Page" @click="prev()"
                     class="w-pagination-previous new-ghost-button pagination-button ghost-button-animation">
                    <img
                      src="https://assets-global.website-files.com/60118ca18674407b85935203/61d69e83d1ed3fae38c0c393_small%20arrow%20left%20page.svg"
                      loading="lazy" alt="" class="small-arrow-margin-right">
                    <div class="w-inline-block">上一页</div>
                  </a>
                  <a aria-label="Next Page" @click="next()"
                     class="w-pagination-next new-ghost-button pagination-button ghost-button-animation">
                    <div class="w-inline-block">下一页</div>
                    <img
                        src="https://assets-global.website-files.com/60118ca18674407b85935203/61d69e85d1dba45d4ea3e7f0_Small%20arrow%20right%20page.svg"
                        loading="lazy" alt="" class="small-arrow-margin-left">
                  </a>
                  <a @click="goToPage(pagination.totalPage)"
                     :class="{ current: pagination.totalPage == pagination.currentPage }"
                     class="w-pagination-next new-ghost-button pagination-button ghost-button-animation">
                    <div class="w-inline-block">末页</div>
                  </a>
                </div>
                <!--                  <div 翻页中间数字-->
                <!--                      class="mx-4 hand fs-md"-->
                <!--                      :class="{ current: article == pagination.currentPage }"-->
                <!--                      v-for="article in pagination.totalPage"-->
                <!--                      :key="article"-->
                <!--                  >-->
                <!--                    <a @click="goToPage(article)" :data-hover="article" class="text-grey-1">{{ article }}</a>-->
                <!--                  </div>-->
                <div class="w-pagination-wrapper pagination-container">
                  <span class="text-grey-1">第{{ pagination.currentPage }}页 / 共{{ pagination.totalPage }}页</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section no-padding-bottom wf-section">
        <div class="container w-container">
          <div class="cta-div centre-bg">
            <div class="w60-div centered-div"><h2 class="black-text no-margin-y">关注我们的微博获得一些新资讯吧</h2><a
                href="#"
                class="primary-button black-button ghost-button-animation w-inline-block">
              <div>去关注</div>
            </a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      articles: [],
      pagination: {
        totalPage: 1,
        currentPage: 1
      }
    };
  },
  methods: {
    async fetchData() {
      const res = await this.$httpU.get(
          `/articles/${this.pagination.currentPage}`
      );
      this.articles = res.data.list;
      this.pagination.totalPage = res.data.totalPage;
      this.pagination.currentPage = res.data.currentPage;
    },
    async goToPage(pageNum) {
      this.pagination.currentPage = pageNum;
      await this.fetchData();
    },
    prev() {
      if (this.pagination.currentPage === 1) {
        return;
      }
      this.pagination.currentPage--;
      this.fetchData();
    },
    next() {
      if (this.pagination.currentPage === this.pagination.totalPage) {
        return;
      }
      this.pagination.currentPage++;
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>


<style src="../assets/n.css" scoped></style>
<style scoped>
.current {
  display: none;
}
</style>