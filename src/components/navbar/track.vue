<template>
  <div id="app">
    <div class="fath_path" >
      <!-- banner底部快速通道  -->
      <ul>
        <li class="li1">
          <a href="http://bbs.itheima.com/thread-130723-1-1.html" target="_blank" >
            <img src="@/assets/images/ban_down/banup1.jpg" />
            <span >
              教育
              <br />理念
            </span>
          </a>
        </li>
        <li class="li2">
          <a href="http://bbs.itheima.com/thread-15847-1-1.html" target="_blank">
            <img src="@/assets/images/ban_down/banup2.jpg" />
            <span>
              教学视频
              <br />展示
            </span>
          </a>
        </li>
        <li class="li1">
          <a href="http://bbs.itheima.com/thread-130723-1-1.html" target="_blank">
            <img src="@/assets/images/ban_down/banup1.jpg" />
            <span>
              我要
              <br />报名
            </span>
          </a>
        </li>
        <li class="li2">
          <a href="http://bbs.itheima.com/thread-15847-1-1.html" target="_blank">
            <img src="@/assets/images/ban_down/banup2.jpg" />
            <span>
              资费
              <br />说明
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Track"
};
</script>

<style scoped>
@import url("~@/assets/css/reset.css");



.fath_path {
  font-size: 30px;
  width: 968px;
  padding-left: 121px;
  margin: 10px auto 0;
 
}

.fath_path ul li {
  float: left;
  width: 174px;
  height: 93px;
  border-radius: 7px;
  margin-left: 31px;
  background: #48bcb1;
  overflow: hidden;
  
}

.fath_path ul li a {
  display: block;
  width: 232px;
  height: 70px;
  position: relative;
  top: 0;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
}

.fath_path ul li img {
  float: left;
  margin: 2px 0 0 2px;
}

.fath_path ul li span {
  float: left;
  line-height: 20px;
  color: #fff;
  padding-left: 10px;
  margin-top: 15px;
  text-align: center;
}

.fath_path ul li:hover a {
  top: -3px;
}

.fath_path ul li.li1 img {
  margin-left: 32px;
}

.fath_path ul li.li2 {
  background: #948fb7;
}

.fath_path ul li.li3 {
  background: #b69a8f;
}

.fath_path ul li.li3 img {
  margin-left: 32px;
}

.fath_path ul li.li4 {
  background: #fff;
}

.fath_path ul li.li4 .li_l {
  float: left;
  width: 154px;
}

.fath_path ul li.li4 img {
  margin: 0;
  display: block;
}

.fath_path ul li.li4 .li_l a {
  display: block;
  width: 76px;
  height: 50px;
  margin: 0 1px 1px 0;
  float: left;
}

.fath_path ul li.li4 .li_l a:hover {
  opacity: 0.9;
}

.fath_path ul li.li4 .li_r {
  float: left;
  width: 76px;
}

.fath_path ul li.li4 .li_r a {
  float: left;
  width: 76px;
}

.fath_path ul li.li4 .li_r a:hover {
  opacity: 0.9;
}

.fath_path ul li.li4:hover a {
  top: 0;
}
</style>