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
                <img src="~@/assets/images/logo.png" alt="黑马程序员" rel="nofollow" />
              </a>
            </h1>
            <img src="~@/assets/images/slogan3.jpg" alt class="slogan" />
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

/* 头部快速通道样式 */

.topbar {
    width: 100%;
    height: 30px;
    background: #EBEBEB;
    border-bottom: 1px soli #DFDFDF;
}

.topbar .inner {
    width: 1200px;
    margin: 0 auto;
    color: #565656;
    font-family: "宋体";
}

.topbar .top_l {
    float: left;
}

.topbar p {
    line-height: 30px;
    font-size: 12px;
}

.topbar .top_r {
    float: right;
}


/* 头部导航样式 */

.header {
    position: relative;
    background: #fff;
    height: 126px;
}

.header_con {
    width: 1200px;
    margin: 0 48px;
    position: relative;
}

.head_up h1 {
    float: left;
    padding: 15px 0;
    margin-left: 14px;
}

.head_up h1 img {
    display: block;
}

.head_up .slogan {
    float: left;
    margin: 29px 0 0 22px;
}

.head_up .city {
    float: right;
    margin-top: 30px;
    line-height: 30px;
    z-index: 999999;
    padding-left: 35px;
    cursor: pointer;
    /* background: url(../images/city/city_m.jpg) no-repeat left center; */
}

.head_up .city h3 {
    float: left;
    font-size: 18px;
}

.head_up .city .city_in {
    float: left;
    position: relative;
    margin-top: 3px;
    z-index: 999999;
    margin-left: 10px;
}

.head_up .city .city_in .city_nav {
    line-height: 26px;
    /* background: url(../images/city/city_x.jpg) no-repeat left center; */
    font-size: 12px;
    font-family: "宋体";
    padding-left: 24px;
    display: block;
}

.head_up .city .city_con {
    float: left;
    position: absolute;
    right: 0;
    left: auto;
    top: 23px;
    padding-top: 15px;
    z-index: 999999;
}

.head_up .city .city_con strong {
    display: block;
    width: 10px;
    height: 17px;
    /* background: url(../images/city/arrow.jpg) no-repeat; */
    position: absolute;
    left: -9px;
    top: 26px;
    z-index: 2;
}

.head_up .city .city_con ul {
    padding: 0 0 20px 20px;
    width: 600px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #dfdfdf;
}

.head_up .city .city_con ul li {
    width: 100px;
    height: 90px;
    float: left;
    margin-right: 20px;
    position: relative;
}

.head_up .city .city_con ul li .imgbox {
    display: block;
    text-align: center;
    width: 100px;
    position: absolute;
    bottom: 29px;
}

.head_up .city .city_con ul li .imgbox img {
    display: inline-block;
}

.head_up .city .city_con ul li a:hover .s_name {
    background: #D72502;
    color: #fff;
}

.head_up .city .city_con ul li .s_name {
    display: block;
    background: #e9e9e9;
    width: 100px;
    line-height: 23px;
    color: #333;
    font-size: 16px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
}

.head_up .slo {
    float: right;
    margin-top: 10px;
}

.head_up .city .city_con ul li strong {
    display: block;
    /* background: url(../images/city/new.png); */
    width: 23px;
    height: 23px;
    position: absolute;
    left: 77px;
    top: 15px;
}

.head_up .slo {
    float: right;
    margin-top: 10px;
}

.head_up .city .city_con ul li .red {
    background: #d72502;
    color: #fff;
}


/*导航*/

.head_nav {
    background: #2A2A36;
}

.head_index {
    background: #fff;
}

.head_nav ul {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}

.head_nav ul li {
    float: left;
    font-size: 16px;
    line-height: 40px;
    margin-right: 50px;
}

.head_nav ul li .all {
    width: 232px;
    background: #D72502;
    color: #fff;
    text-align: center;
    margin-left: 0;
    margin-right: 10px;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
}

.head_nav ul li .all:hover {
    color: #fff;
}

.head_nav ul li a {
    display: block;
    color: #fff;
}

.head_nav ul li a:hover {
    color: #ccc;
}

.head_nav ul li a.cur {
    color: #D72502;
}

.head_index ul li {
    margin-right: 0;
}

.head_index ul li a {
    color: #333;
    margin-left: 60px;
}

.head_index ul li a:hover {
    color: #D72502;
}

.head_index ul li .all:hover {
    color: #fff;
}


</style>