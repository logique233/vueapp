<template>
  <div class="about">
    <section class="banbox">
      <div class="ban">
        <!-- 学科导航  S -->
        <div class="sub_nav">
          <ul class="nav_txt">
            <!-- 左侧学科 -->
            <ul>
              <li v-for="data in datas" :key="data">
                <a href="#" target="_blank" class="a_gd">
                  {{data.type}}
                  <i class="iconfont">
                    <span
                      v-for="(item,index) in data.lesson"
                      :key="item"
                      :class="[index!=0?'spant':'']"
                    >{{item}}</span>
                    <i class="iconfont icon-jiantou"></i>
                  </i>
                </a>
              </li>
            </ul>
          </ul>
          <div class="course_kind">
            <ul class="icon_fu">
              <li class="icon_fuli" v-for="item in category" :key="item">
                <ui class="box1">
                  <li v-for="name in item.name" :key="name">
                    <a href="#">{{name}}&nbsp;&nbsp;&nbsp;|</a>
                  </li>
                </ui>
                <ui class="box2">
                  <li v-for="lesson in item.lesson" :key="lesson">
                    <a href="#">{{lesson}}</a>
                  </li>
                </ui>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "about",
  data() {
    return {
      datas: [
        { type: "小学", lesson: ["小学数学", "小学英语", "小学语文"] },
        { type: "初中", lesson: ["初一初二数学", "初一初二英语"] },
        { type: "高中", lesson: ["高一高二数学", "高一高二英语"] },
        { type: "语言", lesson: ["雅思托福", "英语口语", "对外汉语"] },
        { type: "艺术", lesson: ["钢琴", "小提琴", "芭蕾", "素描", "书法"] },
        { type: "计算机", lesson: ["C++", "Java", "Python", "PHP", "GO"] },
        { type: "其他", lesson: ["网球", "乒乓球", "羽毛球", "游泳"] }
      ],
      category: [
        {
          name: ["小学"],
          lesson: [
            "小学数学",
            "小学英语",
            "小学语文",
            "小学奥数",
            "小学陪读",
            "小学陪玩",
            "学前教育"
          ]
        },
        {
          name: ["初中"],
          lesson: [
            "初一数学",
            "初一英语",
            "初一语文",
            "初一物理",
            "初二数学",
            "初二英语",
            "初二语文",
            "初二物理",
            "初三数学",
            "初三英语",
            "初三语文",
            "初三物理",
            "初三化学",
            "初中地理",
            "初中历史",
            "初中奥数"
          ]
        },
        {
          name: ["高中"],
          lesson: [
            "高一数学",
            "高一英语",
            "高一语文",
            "高一物理",
            "高二数学",
            "高二英语",
            "高二语文",
            "高二物理",
            "高三数学",
            "高三英语",
            "高三语文",
            "高三物理",
            "高三化学",
            "高中地理",
            "高中历史",
            "高中奥数",
            "高中政治",
            "高中生物",
            "信息技术"
          ]
        },
        {
          name: ["考试", "英语", "小语种"],
          lesson: [
            "托福",
            "雅思",
            "SBS英语",
            "口语英语",
            "商务英语",
            "牛津英语",
            "上海话",
            "日语",
            "韩语",
            "德语",
            "法语",
            "意大利语",
            "西班牙语",
            "阿拉伯语",
            "对外汉语",
            "俄语",
            "葡萄牙语"
          ]
        },
        {
          name: ["美术", "舞蹈", "音乐"],
          lesson: [
            "素描",
            "油画",
            "水彩画",
            "芭蕾舞",
            "名族舞",
            "拉丁舞",
            "上海话",
            "钢琴",
            "声乐",
            "电子琴",
            "小提琴",
            "吉他",
            "单簧管",
            "萨克斯",
            "古筝",
            "手风琴",
            "琵琶",
            "长笛",
            "视唱练耳",
            "打击乐",
            "大提琴",
            "二胡",
            "古琴",
            "中提琴",
            "大号",
            "小号",
            "圆号",
            "竹笛"
          ]
        },
        {
          name: ["语言"],
          lesson: ["Java", "C", "C++", "Python", "PHP", "WEb"]
        },
        {
          name: ["其他"],
          lesson: [
            "网球",
            "乒乓球",
            "羽毛球",
            "围棋",
            "中国象棋",
            "国际象棋",
            "跆拳道",
            "空手道",
            "游泳",
            "口才",
            "心理辅导",
            "记忆力",
            "注意力"
          ]
        }
      ]
    };
  },
  mounted: function() {
    $(".nav_txt li").mouseenter(function() {
      $(this)
        .addClass("cur")
        .siblings()
        .removeClass("cur");
      $(".course_kind").show();
      $(".course_kind")
        .find(".icon_fuli")
        .eq($(this).index())
        .show()
        .siblings()
        .hide();
    });
    $(".sub_nav").mouseleave(function() {
      $(this)
        .find(".nav_li")
        .removeClass("cur");
      $(".course_kind")
        .stop()
        .hide("fast");
      // console.log(0);
    });
  }
};
</script>
<style scoped>
@import url("~@/assets/css/reset.css");
@import url("~@/assets/icon/iconfont.css");
.about {
  background: #333;
}
.ban {
  width: 100%;
  height: 1px;
  position: relative;
}
* {
  margin: 0;
  padding: 0;
}

.box1 {
  width: 80px;
  height: 488px;
  background: #fafafa;
  float: left;
  padding-left: 15px;
}

.box1 li a {
  border: 1px solid rgb(189, 34, 34, 0);
  display: block;
  width: 80px;
  height: 30px;
  text-decoration: none;
  margin: 0 0 -1px -1px;
  position: relative;
  z-index: 0;
  text-align: center;
  color: #000000;
  font-size: 15px;
  line-height: 30px;
}

.box1 li a:hover {
  border-bottom: 1px solid #333;
  z-index: 1;
}

.box1 li {
  float: left;
  list-style: none;
}

.box2 {
  width: 220px;
  height: 488px;
  background: #fafafa;
  float: left;
}

.box2 li {
  float: left;
  list-style: none;
  text-align: center;
}

.box2 li a {
  border: 1px solid rgb(189, 34, 34, 0);
  display: block;
  text-decoration: none;
  margin: 0 0 -1px -1px;
  position: relative;
  z-index: 0;
  text-align: left;
  line-height: 30px;
  color: #000000;
  font-size: 15px;
}

.box2 li a:hover {
  text-align: center;
  border-bottom: 1px solid #333;
  z-index: 1;
}

/* by nana */

/*左侧学科导航*/

.sub_nav {
  width: 1200px;
  height: 0;
  position: absolute;
  left: 49.4%;
  margin-left: -600px;
  top: 0;
  z-index: 3;
}

.sub_nav .nav_txt {
  width: 232px;
  height: 450px;
  padding-top: 1px;
  padding-bottom: 5px;
  background: url(~@/assets/images/course_bg.png);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  z-index: 55;
}

.sub_nav .nav_txt li {
  height: 60px;
  line-height: 32px;
  margin-bottom: 3.3px;
  overflow: hidden;
}

.sub_nav .nav_txt li a {
  display: block;
  color: #fff;
  height: 32px;
  padding: 0 20px;
  position: relative;
  left: 0;
}

.spant {
  padding-left: 5px;
}

.spantt {
  padding-left: 15px;
}

.sub_nav .nav_txt li:hover a {
  left: 5px;
}

.sub_nav .nav_txt li:hover {
  background: #3d3e4a;
}

.sub_nav .nav_txt li.cur {
  background: #3d3e4a;
}

.sub_nav .nav_txt li.cur a {
  left: 5px;
}

.sub_nav .nav_txt li span {
  float: left;
  cursor: pointer;
}

.sub_nav .nav_txt li i {
  float: left;
  cursor: default;
  font-size: 14px;
}

/* 测导扩展宽度 */

.course_kind {
  position: absolute;
  left: 231px;
  top: 0;
  width: 317px;
  height: 469px;
  border: 1px solid #e0e0e0;
  background: #fafafa;
  cursor: pointer;
  opacity: 0.6;
}

/* 测导航字宽 */

.course_kind .icon_fu .icon_fuli li {
  width: 70px;
  padding-top: 10px;
  border-bottom: 0px solid #e0e0e0;
}

.course_kind .icon_fu .icon_fuli li .iconfont {
  font-size: 18px;
  color: #979797;
}

.course_kind .icon_fu .icon_fuli li p {
  padding: 5px 0 5px;
}

.course_kind .icon_fu .icon_fuli li:hover .iconfont {
  color: #d72502;
}

.course_kind .icon_fu .icon_fuli li:hover p {
  color: #d72502;
}
</style>