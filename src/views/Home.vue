<template>
  <div class="home">
    <div class="body-wrapper overflow-hidden">
      <div class="section home-hero wf-section">
        <div class="container w-container">
          <div class="centered-div _w-600">
            <h1 class="margin-bottom">
              区块链
              <br/>
              交易数据平台
            </h1>
            <p>洞悉链上各种变化，把脉市场冷热动向，获得领先他人一步的优势。</p>
            <router-link to="/price">
              <a class="primary-button ghost-button-animation w-inline-block">
                <div style="padding: 0 40px">去订阅</div>
              </a>
            </router-link>
            <!--          <a href="#" class="text-link text-link-animation">或者 查看基础数据</a>免费试用 7 天-->
          </div>
          <div class="tablet-container">
            <div data-delay="3400" data-animation="slide" class="gif-image-slider w-slider" data-autoplay="true"
                 data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                 data-nav-spacing="3" data-duration="500" data-infinite="true">
              <div class="gif-mask w-slider-mask">
                <div class="slide-1 w-slide">
                  <div class="ratio-box _3-2 rounded-corners">
                    <img
                        src="../assets/home1.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 89vw, (max-width: 767px) 68vw, (max-width: 991px) 69vw, 67vw"

                        alt="" class="content-block"/>
                  </div>
                </div>
              </div>
              <!--            <div class="slider-arrow ghost-button-animation w-slider-arrow-left">-->
              <!--              <img src="../assets/BigArrow.svg" loading="lazy" alt="" class="big-arrow"/>-->
              <!--            </div>-->
              <!--            <div class="slider-arrow right ghost-button-animation w-slider-arrow-right">-->
              <!--              <img src="../assets/BigArrowRight.svg" loading="lazy" alt="" class="big-arrow"/>-->
              <!--            </div>-->
              <div class="gif-slider w-slider-nav"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section lighter-background wf-section">
        <div class="container w-container">
          <div class="_2-column-grid large-gap-grid advantage">
            <div>
              <div class="individual-advantage">
                <h3 class="small-margin-bottom" style="color: #edf2f6">发现新机会</h3>
                <p class="small-margin-bottom" style="color: #d3dbe2">跟踪聪明的钱, 查看资金正在向哪里流动, 识别出新的项目和代币，细致入微地跟踪资金转移。</p>
                <a class="primary-button no-margin-top ghost-button-animation w-inline-block" @click="goGas">
                  <div>查看 Gas 监控</div>
                </a>
              </div>
              <div class="individual-advantage">
                <h3 class="small-margin-bottom" style="color: #edf2f6">进行负责任的调查</h3>
                <p class="small-margin-bottom" style="color: #d3dbe2">在投资新的加密货币项目或代币之前做出明智的决定。</p>
                <a class="primary-button no-margin-top ghost-button-animation w-inline-block" @click="goP">
                  <div>查看 ETH 仪表盘</div>
                </a>
              </div>
              <div class="individual-advantage last">
                <h3 class="small-margin-bottom" style="color: #edf2f6">确定你的头寸</h3>
                <p style="color: #d3dbe2">创建实时的自定义警报，并在钱包转移其资金时获得时间、地址等详细的通知提醒</p>
              </div>
            </div>
            <div class="tablet-container advantage-portrait-frame">
              <div class="ratio-box _3-4 rounded-corners">
                <img
                    src="../assets/home2.png"
                    loading="lazy" sizes="(max-width: 991px) 100vw, 32vw"
                    alt="" class="content-block _1"/>
                <img
                    src="../assets/home2.png"
                    loading="lazy" sizes="(max-width: 991px) 100vw, 32vw"
                    alt="" class="content-block _2"/>
                <img
                    src="../assets/home2.png"
                    loading="lazy" sizes="(max-width: 991px) 100vw, 32vw"
                    alt="" class="content-block _3"/>
                <div data-delay="3000" data-animation="slide" class="advantage-slider w-slider" data-autoplay="true"
                     data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                     data-nav-spacing="3" data-duration="500" data-infinite="true">
                  <div class="w-slider-mask">
                    <div class="w-slide">
                      <img sizes="(max-width: 479px) 88vw, (max-width: 767px) 52vw, (max-width: 991px) 43vw, 100vw"
                           src="../assets/home2.png"
                           loading="lazy" alt="" class="content-block"/>
                    </div>
                    <div class="w-slide">
                      <img sizes="(max-width: 479px) 88vw, (max-width: 767px) 52vw, (max-width: 991px) 43vw, 100vw"
                           src="../assets/home2.png"
                           loading="lazy" alt="" class="content-block"/>
                    </div>
                    <div class="w-slide">
                      <img
                          src="../assets/home2.png"
                          loading="lazy"
                          sizes="(max-width: 479px) 88vw, (max-width: 767px) 52vw, (max-width: 991px) 43vw, 100vw"
                          alt="" class="content-block"/>
                    </div>
                  </div>
                  <div class="hidden-element w-slider-arrow-left">
                    <div class="w-icon-slider-left"></div>
                  </div>
                  <div class="hidden-element w-slider-arrow-right">
                    <div class="w-icon-slider-right"></div>
                  </div>
                  <div class="hidden-element w-slider-nav w-round"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section no-padding-bottom wf-section">
        <div class="container w-container">
          <div class="centered-container">
            <h2>我们支持的公链</h2>
          </div>
          <div class="chains-list-wrapper w-dyn-list">
            <div role="list" class="chains-list w-dyn-items">
              <div role="listitem" class="chain-item w-dyn-item">
                <div class="individual-div">
                  <img src="../assets/Ethereum.svg" loading="lazy" alt="Ethereum" class="chain-logo"/>
                  <div class="chain-name">Ethereum</div>
                </div>
              </div>
              <div role="listitem" class="chain-item w-dyn-item">
                <div class="individual-div">
                  <img src="../assets/Celo.svg" loading="lazy" alt="Celo" class="chain-logo"/>
                  <div class="chain-name">Celo</div>
                </div>
              </div>
              <div role="listitem" class="chain-item w-dyn-item">
                <div class="individual-div">
                  <img src="../assets/BSC.svg" loading="lazy" alt="BSC" class="chain-logo"/>
                  <div class="chain-name">BSC</div>
                </div>
              </div>
              <div role="listitem" class="chain-item w-dyn-item">
                <div class="individual-div">
                  <img src="../assets/Arbitrum.svg" loading="lazy" alt="Arbitrum" class="chain-logo"/>
                  <div class="chain-name">Arbitrum</div>
                </div>
              </div>
              <div role="listitem" class="chain-item w-dyn-item">
                <div class="individual-div">
                  <img src="../assets/Fantom.svg" loading="lazy" alt="Fantom" class="chain-logo"/>
                  <div class="chain-name">Fantom</div>
                </div>
              </div>
              <div role="listitem" class="chain-item w-dyn-item">
                <div class="individual-div">
                  <img src="../assets/Polygon.svg" loading="lazy" alt="Polygon" class="chain-logo"/>
                  <div class="chain-name">Polygon</div>
                </div>
              </div>
              <div role="listitem" class="chain-item w-dyn-item">
                <div class="individual-div">
                  <img src="../assets/ronin.svg" loading="lazy" alt="Ronin" class="chain-logo" height="55px"/>
                  <div class="chain-name">Ronin</div>
                </div>
              </div>
              <div role="listitem" class="chain-item w-dyn-item">
                <div class="individual-div">
                  <img src="../assets/avax.svg" loading="lazy" alt="Avax" class="chain-logo" height="55px"/>
                  <div class="chain-name">Avax</div>
                </div>
              </div>
              <div role="listitem" class="chain-item w-dyn-item">
                <div class="individual-div">
<!--                  <img src="../assets/optimism.svg" loading="lazy" alt="Optimism" class="chain-logo"/>-->
<!--                  <div class="chain-name">Optimism</div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section lighter-bg wf-section">
        <div class="container w-container">
          <h2 class="centered-text" style="color: #edf2f6">我们的用户评论</h2>
          <div class="testimonial-div">
            <div data-delay="4000" data-animation="slide" class="testimonial-slider w-slider" data-autoplay="false"
                 data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                 data-nav-spacing="3" data-duration="500" data-infinite="true">
              <div class="testimonial-mask w-slider-mask">
                <div class="testimonial-slide-default w-slide">
                  <div class="testimonial-list-wrapper w-dyn-list">
                    <div role="list" class="testimonial-list w-dyn-items">
                      <div role="listitem" class="testimonial-item w-dyn-item">
                        <p style="color: #d3dbe2">&quot;这平台太赞了，让我赚到了人生第一桶金！&quot;</p>
                        <div class="testimonial-divider"></div>
                        <div class="testimonial-bio-div">
                          <img
                              src="https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61e73db8e7483948e41c9d2a_Wangarian.png"
                              loading="lazy" alt="Wangarian" class="small-avatar"/>
                          <div class="testimonial-bio-text-div">
                            <div class="small-text bold-text padding-x" style="color: #d3dbe2">老王</div>
                            <div class="faded-text small-text" style="color: #d3dbe2">个人投资者</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<!--              <div class="testimonial-arrow-link ghost-button-animation w-slider-arrow-left">-->
<!--                <img-->
<!--                    src="https://assets-global.website-files.com/60118ca18674407b85935203/61bae97b2f86db3e523c6699_Small%20Arrow%20Left.svg"-->
<!--                    loading="lazy" alt="" class="small-arrow"/>-->
<!--              </div>-->
<!--              <div class="testimonial-arrow-link right ghost-button-animation w-slider-arrow-right">-->
<!--                <img-->
<!--                    src="https://assets-global.website-files.com/60118ca18674407b85935203/61bae97ab0df127a1a171301_Small%20Arrow%20Right.svg"-->
<!--                    loading="lazy" alt="" class="small-arrow"/>-->
<!--              </div>-->
              <div class="testimonial-slider-nav w-slider-nav w-round"></div>
            </div>
            <div class="testimonial-image-container">
              <img
                  src="https://assets-global.website-files.com/60118ca18674407b85935203/61c515031f895b8044ffbf01_Testimonial%20Img.svg"
                  loading="lazy" alt="" class="testimonial-illustration"/>
            </div>
          </div>
        </div>
      </div>
      <div class="section no-padding-bottom wf-section">
        <div class="container w-container">
          <div class="cta-div">
            <div class="smart-money-cta-div">
              <h2 class="black-text">跟踪聪明的钱</h2>
              <p class="cta-paragraph">从今天起在加密货币的投资中获取更多收益吧</p>
              <router-link to="/price">
              <a target="_blank"
                 class="primary-button black-button ghost-button-animation w-inline-block">
                <div>去订阅</div>
              </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goGas() {
      const vip = localStorage.getItem('vip') || ""
      if (vip === "") {
        alert('请先订阅噢~')
      } else {
        this.$router.push('/gas-tracker');
      }
    },
    goP() {
      const vip = localStorage.getItem('vip') || ""
      if (vip === "") {
        alert('请先订阅噢~')
      } else {
        this.$router.push('/eth-deposit-contract');

      }
    },
  }

}
</script>

<style src="../assets/n.css" scoped></style>

<style scoped>

</style>