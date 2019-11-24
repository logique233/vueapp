<template>
  <div id="app">
    <div class="zx">
      <ul>
        <li class="li_1">
          <a href="javascript:;" class="itcast_click" rel="nofollow">
            <i id="qimo_badge"></i>
            <span class="icon_s">&nbsp;</span>
            <p>在线咨询</p>
          </a>
        </li>
        <li class="li_7">
          <a href="javascript:;" class="itcast_click" rel="nofollow">
            <span class="icon_s">&nbsp;</span>
            <p>微信咨询</p>
          </a>
        </li>
        <li class="li_8">
          <a href="javascript:;" class="itcast_click" rel="nofollow">
            <span class="icon_s">&nbsp;</span>
            <p>申请优惠</p>
          </a>
        </li>
        <li class="li_4">
          <a href="flow/flow.html" target="_blank" rel="nofollow">
            <span class="icon_s">&nbsp;</span>
            <p>立即报名</p>
          </a>
        </li>
        <li class="li_6" id="back">
          <a href="javascript:void(0);" rel="nofollow">
            <span class="icon_s">&nbsp;</span>
            <p>返回顶部</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "affix",
  mounted: function() {
    //通用咨询
    $(".zx li").mouseenter(function() {
      $(this)
        .children("div")
        .show();
    });
    $(".zx li").mouseleave(function() {
      $(this)
        .children("div")
        .stop()
        .hide();
    });
    $(window).scroll(function() {
      var A = $(window).scrollTop();
      if (A > 400) {
        $("#back").css("visibility", "visible");
      } else {
        $("#back").css("visibility", "hidden");
      }
    });
    $("#back").click(function() {
      $("html,body").animate(
        {
          scrollTop: 0
        },
        500
      );
    });

    //开班计划tab栏切换
    $(".kb_dy .mytab .have").click(function() {
      $(this)
        .addClass("now")
        .siblings()
        .removeClass("now");
      $(".kb_dy .kb_box")
        .children(".kb")
        .eq($(this).index())
        .addClass("mycur")
        .siblings()
        .removeClass("mycur");
    });
    $(".kb_dy .mytab .no").click(function() {
      alert("本校区暂未开设该课程");
    });

    $(".kb_box .ulbox ul")
      .find("li:lt(4)")
      .css("float", "inherit");
    $(".kb_box .ulbox ul")
      .find("li:gt(3)")
      .css({
        float: "inherit",
        position: "relative",
        top: "-208px",
        left: "443px"
      });

    //专题拉幕
    setTimeout("lm();", 1500);
    $(".lm .close").click(function() {
      $(this)
        .parent()
        .slideUp();
    });
  }
};
</script>
<style scoped>
@import url("~@/assets/css/reset.css");

/* 右侧咨询 S */
.zx {
  width: 60px;
  position: fixed;
  right: 0;
  top: 53%;
  margin-top: -150px;
  z-index: 10000;
  border-radius: 5px;
}
.zx li {
  width: 58px;
  height: 58px;
  border: 1px solid #e0e0e0;
  margin-bottom: -1px;
  background: #fff;
  position: relative;
  z-index: 99999;
}
.zx li a {
  display: block;
  width: 58px;
  height: 58px;
  color: #333;
  overflow: hidden;
}
.zx li span.icon_s {
  display: block;
  width: 24px;
  height: 26px;
  background: url(~@/assets/images/zx/zxzx1.gif) no-repeat center top;
  margin: 7px auto 4px;
}
.zx li p {
  font-size: 12px;
  text-align: center;
  font-weight: bold;
}
.zx li:hover {
  background: #e60012;
  border-color: #e60012;
}
.zx li:hover span.icon_s {
  background-image: url(~@/assets/images/zx/zxzx1.gif);
}
.zx li:hover p {
  color: #fff;
}
.zx li.li_qq span.icon_s {
  background-image: url(~@/assets/images/zx/qq_icon.png);
}
.zx li.li_qq:hover {
  border-top-color: #e0e0e0;
}
.zx li.li_qq:hover span.icon_s {
  background-image: url(~@/assets/images/zx/qq_icon.png);
}
.zx li.li_1 {
  background: #e60012;
  border-color: #e60012;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.zx li.li_1 p {
  color: #fff;
}
.zx li.li_3 {
  border-top-color: #e0e0e0;
}
.zx li.li_2 span.icon_s {
  background-image: url(~@/assets/images/zx/nmzx.gif);
}
.zx li.li_2:hover span.icon_s {
  background-image: url(~@/assets/images/zx/nmzx1.gif);
}
.zx li.li_3 span.icon_s {
  background-image: url(~@/assets/images/zx/zxxy.png);
}
.zx li.li_3:hover span.icon_s {
  background-image: url(~@/assets/images/zx/zxxx_2.png);
}
.zx li.li_4 span.icon_s {
  background-image: url(~@/assets/images/zx/zxbm.gif);
}
.zx li.li_4:hover span.icon_s {
  background-image: url(~@/assets/images/zx/zxbm1.gif);
}
.zx li.li_5 span.icon_s {
  background-image: url(~@/assets/images/zx/dhzx.gif);
}
.zx li.li_5:hover {
  border-color: #e0e0e0;
}
.zx li.li_5:hover span.icon_s {
  background-image: url(~@/assets/images/zx/dhzx1.gif);
}
.zx li.li_6 {
  visibility: hidden;
  background: #e60012;
  border-color: #e60012;
  border-top-color: #e0e0e0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.zx li.li_6 span.icon_s {
  background-image: url(~@/assets/images/zx/zx_bg1.png);
}
.zx li.li_6:hover span.icon_s {
  background-image: url(~@/assets/images/zx/zx_bg1.png);
}
.zx li.li_6 a {
  color: #fff;
}
.zx li.li_7 span.icon_s {
  background-image: url(~@/assets/images/zx/sqst.png);
}
.zx li.li_7:hover span.icon_s {
  background-image: url(~@/assets/images/zx/sqst2.png);
}
.zx li.li_8 span.icon_s {
  background-image: url(~@/assets/images/zx/sqyh.png);
}
.zx li.li_8:hover span.icon_s {
  background-image: url(~@/assets/images/zx/sqyh2.png);
}

.zx li.li_gd p.p_tm {
  width: 58px;
  height: 22px;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 15px;
}
.zx li.li_gd p.p_tm iframe {
  width: 58px;
  height: 22px;
}
.zx li div {
  position: absolute;
  right: -1px;
  top: -1px;
  background: #e60012;
  display: none;
}
.zx li.li_gd div {
  background: #e60012;
}
.zx li.li_gd div p {
  width: 105px;
  padding-left: 30px;
  height: 59px;
  line-height: 59px;
  font-weight: bold;
  font-size: 13px;
  color: #fff;
  overflow: hidden;
  background: url(~@/assets/images/zx/dhzx1.gif) no-repeat 7px center;
  font-family: "微软雅黑";
}
/* 右侧咨询 E */
.zx .cxhdpic3 {
  position: absolute;
  right: -16px;
  top: -122px;
  z-index: 999999;
  width: 90px;
}
.zx .cxhdpic2 {
  position: absolute;
  right: -16px;
  top: -122px;
  z-index: 999999;
  width: 90px;
}
.zx .cxhdpic1 {
  position: absolute;
  right: 68px;
  top: -190px;
  z-index: 99999;
  display: none;
}
</style>