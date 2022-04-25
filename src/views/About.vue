<template>
  <div class="about">
    <div class="body-wrapper">
      <div class="section about-hero wf-section">
        <div class="container w-container">
          <div class="_2-column-grid small-gap-hero-grid">
            <div id="w-node-_955b9f75-aa66-9569-81f2-0820592ebe12-00c01430"><h1 class="margin-bottom">关于链析</h1>
<!--              <p>链析 ChainView 是一个区块链分析平台, 拥有大量的链上数据和一个每天都在增长的数百万钱包标签超大数据库。</p></div>-->
              <p>链析 ChainView 是一个区块链交易数据分析平台, 拥有大量的链上数据和包含多生态角色（矿工、交易所、机构等）及多维度（地址、市场指标、网络）的数据指标。</p></div>

            <img
                src="https://assets-global.website-files.com/60118ca18674407b85935203/61e55ee1008bd065ecf19273_about_hero.png"
                loading="lazy" id="w-node-_7a8eec37-fb42-dba9-1f5f-907ca35c3411-00c01430"
                sizes="(max-width: 767px) 92vw, (max-width: 991px) 46vw, 43vw"
                srcset="https://assets-global.website-files.com/60118ca18674407b85935203/61e55ee1008bd065ecf19273_about_hero-p-500.png 500w, https://assets-global.website-files.com/60118ca18674407b85935203/61e55ee1008bd065ecf19273_about_hero-p-800.png 800w, https://assets-global.website-files.com/60118ca18674407b85935203/61e55ee1008bd065ecf19273_about_hero.png 1040w"
                alt="" class="hero-image"></div>
        </div>
      </div>
      <div class="section wf-section">
        <div class="container w-container">
          <div class="faq-div">
            <div class="faq-column"><h4 class="faq-heading top">为什么你们要做 链析 这样的平台？</h4>
              <div class="new-rich-text w-richtext"><p>我们研究发现，对于链上数据，很多用户都有一个需求：想知道链上钱包之间转账和交易的更多具体细节信息并进行整理统计。</p>
                <p>所以我们基于此需求创立了链析，如今在区块链的交易分析中提供了业内出色的数据和分析。</p></div>
              <h4 class="faq-heading">你们是如何获得交易数据的呢？</h4>
              <p>我们会尝试大量的方法，包括：</p>
              <div class="new-rich-text w-richtext">
                <ul role="list">
<!--                  <li>启发式算法模型</li>-->
                  <li>爬虫</li>
                  <li>智能合约的源码语法分析</li>
                  <li>来自我们团队的调查分析</li>
                  <li>人工提交</li>
                  <li>其他</li>
                </ul>
                <p>几乎 99% 的交易数据都是来源于我们的爬虫。</p>
                <p>我们一直致力于提供高质量的数据，所以我们宁愿不进行分析也不会错误分析数据。</p>
                <p>对于链上数据的获取，我们非常地依赖开源项目Ethereum ETL。在此感谢此开源项目的帮助。</p></div>
            </div>
            <div class="faq-column last"><h4 class="faq-heading top">关于用户隐私？</h4>
              <div class="new-rich-text w-richtext"><p>这是个比较常见的问题，在此声明 <em>我们不会关注私有的钱包地址以及对其监控</em>。</p>
                <p>链析的一个重要的数据来源就是靠区块链技术，而区块链本身是公开、不可篡改的。我们无法控制用户决定发到链上的内容。</p>
                <p>举一个相关例子，以太坊域名服务（ENS），它允许用户为自己的钱包地址购买一个更易记的域名（比如chainview.eth）。当一个钱包注册了这样的域名之后，
                  将会被永久记录在以太链上。由于任何拥有计算机并连上互联网的人都可以运行以太坊节点，也就是说这笔交易的数据对全世界都是公开的。</p>
                <p>链析包含所有ENS钱包拥有者的信息（包括以前和现在），有些时候可以看出一些个人钱包和它之间的联系。</p>
                <p>因此，虽然我们可以从链析平台上删除可能暴露个人身份信息的数据，但我们认为，这刚好可以达到提醒你警惕的目的，因为这些信息已经被公开在链上节点，意味着所有人都可以访问。</p>
                <p><em>我们将致力于让用户了解更多使用区块链所涉及的隐私风险。</em>‍</p>
                <p>有时候，项目的联合创始人、助理和其他公众人物在公共领域（例如在透明度报告或新闻文章中）分享了他们的钱包地址。这种情况我们可能会使用他们的名字来做钱包标记，因为这些信息已经在媒体上公开。</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section no-padding-y wf-section">
        <div class="container w-container">
          <div class="cta-div text-align-left">
            <div class="left-align-cta-div"><h2 class="black-text">快来尝试一下吧</h2><router-link to="/price"><a
                class="primary-button black-button ghost-button-animation w-inline-block">
              <div>去订阅</div>
            </a></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style src="../assets/n.css" scoped></style>
<style scoped>

</style>