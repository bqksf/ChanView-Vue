<template>
  <div class="blog-content">
    <div class="body-wrapper overflow-hidden-mobile">
      <div class="section individual-article wf-section" v-if="model">
        <div class="container flex-container w-container">
          <div class="article-container"><h1 class="no-margin-top">{{ model.title }}</h1>
            <div class="article-info-bar">
              <div class="flex-div big-text-margin-right">
                <div class="small-text-margin-right article-small-faded-text">发布于</div>
                <div class="article-small-faded-text">{{ model.createdAt | date("YYYY-MM-DD HH:mm:ss") }} 字数 {{model.body.length}}</div>
              </div>
              <div class="flex-div big-text-margin-right">
                <div class="article-small-faded-text w-dyn-bind-empty"></div>
              </div>
            </div>
            <div>
              <div class="w-dyn-list">
                <div role="list" class="article-author-list w-dyn-items">
                  <div role="listitem" class="author-item w-dyn-item">
                    <div><router-link
                        tag="div"
                        :to="`/tags`"
                        class="small-text text-link-animation"
                    >
            <span>
              <i class="iconfont icon-tag1"></i>
            </span>
                      <span class>{{ model.categories[0].name }}</span>
                    </router-link>
                      <div class="author-info-div">
                        <div class="text-grey-2 fs-md mb-9 container">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rich-text-article w-richtext markdown-body">
              <div id="content" v-html="model.body"></div>
            </div>
          </div>
          <div class="side-container side-cta">
<!--            <h4 class="no-margin-y">免费试用7天</h4>-->
<!--            <div class="side-form-block w-form">-->
<!--              <form method="post" name="wf-form-Side-CTA-Email-Capture" data-name="Side CTA Email Capture"-->
<!--                    redirect="https://pro.nansen.ai/auth/signup?trial=true&amp;source=landing"-->
<!--                    data-redirect="https://pro.nansen.ai/auth/signup?trial=true&amp;source=landing"-->
<!--                    action="https://pro.nansen.ai/auth/signup?trial=true&amp;source=landing" id="email-form"-->
<!--                    aria-label="Side CTA Email Capture"><input type="submit" value="现在注册吧"-->
<!--                                                               data-wait="Please wait..."-->
<!--                                                               class="primary-button ghost-button-animation w-button">-->
<!--              </form>-->
<!--              <div class="form-success-message side-cta w-form-done" tabindex="-1" role="region"-->
<!--                   aria-label="Side CTA Email Capture success">-->
<!--                <div class="side-cta-text">You will hear from us soon!</div>-->
<!--              </div>-->
<!--              <div class="error-message side-error-message w-form-fail" tabindex="-1" role="region"-->
<!--                   aria-label="Side CTA Email Capture failure">-->
<!--                <div>Error!</div>-->
<!--              </div>-->
<!--            </div>-->

            <div class="d-none left">
              <div class="blogs-menu toc-sticky text-grey-1 pl-9">
                <div>
                  <h2>目录</h2>
                  <div
                      class="menu-title hand text-ellipsis"
                      :title="item.text"
                      v-for="item in articleToc"
                      :key="item.id"
                      :style="{ paddingLeft: `${item.indent}em` }"
                      @click="scrollTo(item.id)"
                  >{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="section no-padding-top wf-section">-->
<!--        <div class="container w-container"><h2>相关文章</h2>-->
<!--          <div class="related-articles-wrapper w-dyn-list">-->
<!--            <div role="list" class="related-article-list w-dyn-items">-->
<!--              <div role="listitem" class="related-article-item w-dyn-item"><a href="/post/month-in-review-december-2021"-->
<!--                                                                              class="related-article-link w-inline-block"><img-->
<!--                  src="https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61f16bd7fd5fed0bd0b13134_Article%20header%20image.png"-->
<!--                  loading="lazy" alt="Month in Review: December 2021"-->
<!--                  sizes="(max-width: 479px) 95vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 45vw"-->
<!--                  srcset="https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61f16bd7fd5fed0bd0b13134_Article%20header%20image-p-500.png 500w, https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61f16bd7fd5fed0bd0b13134_Article%20header%20image-p-800.png 800w, https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61f16bd7fd5fed0bd0b13134_Article%20header%20image-p-1080.png 1080w, https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61f16bd7fd5fed0bd0b13134_Article%20header%20image.png 1340w"-->
<!--                  class="related-article-image">-->
<!--                <div class="related-article-div"><h4>Month in Review: December 2021</h4>-->
<!--                  <div class="thumb-small-text-div">-->
<!--                    <div class="text-margin-right">Jan 12, 2022</div>-->
<!--                    <div class="flex-div"><img-->
<!--                        src="https://assets-global.website-files.com/60118ca18674407b85935203/61dba3d10e73e5152eadc685_clock.svg"-->
<!--                        loading="lazy" width="11" alt="" class="clock">-->
<!--                      <div class="small-text-margin-right w-dyn-bind-empty"></div>-->
<!--                      <div>mins</div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="tag">-->
<!--                  <div class="w-dyn-bind-empty"></div>-->
<!--                </div>-->
<!--              </a></div>-->
<!--              <div role="listitem" class="related-article-item w-dyn-item"><a href="/post/month-in-review-november-2021"-->
<!--                                                                              class="related-article-link w-inline-block"><img-->
<!--                  src="https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61b76b574ea5a532fe367035_month%20in%20review_11_2021.jpeg"-->
<!--                  loading="lazy" alt="Month in Review: November 2021"-->
<!--                  sizes="(max-width: 479px) 95vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 45vw"-->
<!--                  srcset="https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61b76b574ea5a532fe367035_month%20in%20review_11_2021-p-500.jpeg 500w, https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61b76b574ea5a532fe367035_month%20in%20review_11_2021.jpeg 1127w"-->
<!--                  class="related-article-image">-->
<!--                <div class="related-article-div"><h4>Month in Review: November 2021</h4>-->
<!--                  <div class="thumb-small-text-div">-->
<!--                    <div class="text-margin-right">Dec 13, 2021</div>-->
<!--                    <div class="flex-div"><img-->
<!--                        src="https://assets-global.website-files.com/60118ca18674407b85935203/61dba3d10e73e5152eadc685_clock.svg"-->
<!--                        loading="lazy" width="11" alt="" class="clock">-->
<!--                      <div class="small-text-margin-right">5</div>-->
<!--                      <div>mins</div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="tag">-->
<!--                  <div class="w-dyn-bind-empty"></div>-->
<!--                </div>-->
<!--              </a></div>-->
<!--              <div role="listitem" class="related-article-item w-dyn-item"><a href="/post/month-in-review-october-2021"-->
<!--                                                                              class="related-article-link w-inline-block"><img-->
<!--                  src="https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/6194a3e84d143a87d04c2cbc_Month_in_Review_October.jpg"-->
<!--                  loading="lazy" alt="Month in Review: October 2021"-->
<!--                  sizes="(max-width: 479px) 95vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 45vw"-->
<!--                  srcset="https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/6194a3e84d143a87d04c2cbc_Month_in_Review_October-p-1080.jpeg 1080w, https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/6194a3e84d143a87d04c2cbc_Month_in_Review_October.jpg 1127w"-->
<!--                  class="related-article-image">-->
<!--                <div class="related-article-div"><h4>Month in Review: October 2021</h4>-->
<!--                  <div class="thumb-small-text-div">-->
<!--                    <div class="text-margin-right">Nov 17, 2021</div>-->
<!--                    <div class="flex-div"><img-->
<!--                        src="../assets/clock.svg"-->
<!--                        loading="lazy" width="11" alt="" class="clock">-->
<!--                      <div class="small-text-margin-right">4</div>-->
<!--                      <div>mins</div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="tag">-->
<!--                  <div class="w-dyn-bind-empty"></div>-->
<!--                </div>-->
<!--              </a></div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    <div class="art-comment" v-if="model">-->
<!--      <h3 class="fs-xxxxl mt-9">评论</h3>-->
<!--      <comment-textarea-->
<!--          class="textarea-box bg-postcolor bdr"-->
<!--          model="comments"-->
<!--          @toResponse="getBlogsComments"-->
<!--          type="parent"-->
<!--          :blogsId="id"-->
<!--          placeholder="输入留言内容"-->
<!--      ></comment-textarea>-->
<!--      <comment-list-->
<!--          class="mt-7 mb-10"-->
<!--          model="comments"-->
<!--          @getCommentList="getBlogsComments"-->
<!--          :commentsList="parentComments"-->
<!--          v-if="parentComments"-->
<!--          :blogsId="id"-->
<!--      ></comment-list>-->
    </div>

      <div class="section no-padding-y wf-section">
        <div class="container w-container">
          <div class="cta-div centre-bg">
            <div class="w60-div centered-div"><h2 class="black-text no-margin-y">关注我们的微博获得一些新资讯吧</h2><a href="#"
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
import { marked } from 'marked';
import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-bright.css";
import Toc from "../plugins/Toc.js";

const renderer = new marked.Renderer();
marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  }
});


export default {
  name: "Blog-Content",
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null,
      Comments: [],
      articleToc: [],
      parentComments: []
    };
  },
  watch: {
    id: "fetch"
  },
  methods: {
    async fetch() {
      const res = await this.$httpU.get(`articles/list/${this.id}`);
      this.model = res.data;
      let tocData = Toc(marked(res.data.body));
      this.model.body = tocData.article;
      this.articleToc = tocData.toc;
    },
    scrollTo(id) {
      // 绑定 toc 点击事件
      let node = document.querySelector('[data-id="' + id + '"]');
      if (!node) {
        return;
      }
      node.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    },
  },
  mounted() {
    this.fetch();
  }
}
</script>

<style src="../assets/n.css" scoped></style>
<style scoped>

</style>