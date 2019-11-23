<template>
  <div id="head">
    <header>
      <!-- 快速通道 -->
      <div class="topbar">
        <div class="inner">
          <div class="top_l">
            <p>
              <a href="http://www.itcast.cn" target="_blank">XX教育品牌</a>
            </p>
          </div>
          <div class="top_r">
            <p class="slogan">全国咨询热线：400-618-9090</p>
          </div>
        </div>
      </div>
      <div class="header">
        <div class="header_con">
          <div class="head_up">
            <h1>
              <a href="index.html">
                <img src="images/logo.png" alt="黑马程序员" rel="nofollow" />
              </a>
            </h1>
            <img src="images/slogan3.jpg" alt class="slogan" />
          </div>
          <p class="clear_s"></p>
          <div class="head_index head_nav">
            <ul>
              <li>
                <a href="javascript:;" class="all a_js">全部课程</a>
              </li>
              <li>
                <a href="#" target="_blank" class="a_default a2_js">首页</a>
              </li>
              <li>
                <a href="#" target="_blank" class="a_default a2_js">挑老师</a>
              </li>
              <li>
                <a href="#" target="_blank" class="a_default a2_js">快速请家教</a>
              </li>
              <li>
                <a href="#" target="_blank" class="a_default a2_js">本地辅导班</a>
              </li>
              <li>
                <a href="#" target="_blank" class="a_default a2_js">最新学员</a>
              </li>
              <li>
                <a href="#" target="_blank" class="a_default a2_js">教员招聘</a>
              </li>
              <li>
                <a href="#" target="_blank" class="a_default a2_js">网站加盟</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 首页导航区域 E -->
    </header>
  </div>
</template>

<script>
export default {
  name: "head",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url("~@/assets/css/reset.css");
.topbar {
  width: 100%;
  height: 30px;
  background: #ebebeb;
  border-bottom: 1px soli #dfdfdf;
}
.header {
  position: relative;
  background: #fff;
  height: 126px;
}
.header_con {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.clear_s {
  width: 100%;
  height: 0;
  line-height: 0;
  font-size: 0;
  clear: both;
}
.head_index {
  background: #fff;
}
.head_nav ul li .all {
  width: 232px;
  background: #d72502;
  color: #fff;
  text-align: center;
  margin-left: 0;
  margin-right: 10px;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
}
.head_index ul li a {
  color: #333;
  margin-left: 60px;
}
.head_nav ul li a {
  display: block;
  color: #fff;
}
:link,
:visited,
ins {
  text-decoration: none;
}
.head_nav ul li {
  float: left;
  font-size: 16px;
  line-height: 40px;
  margin-right: 50px;
}

</style>