<template>
  <div id="app">
    <el-carousel >
      <el-carousel-item v-for="item in img_list" :key="item" :style="item.colour" :title="item.colour">
        <img :src="item.link" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img_list: [
        {link: "http://www.itheima.com/images/slidead/HOMEPAGE/20191112093108968x385.jpg",colour: "background-color: #0E1144"},
        {link: "http://www.itheima.com/images/slidead/HOMEPAGE/20191111094228banner968x385.jpg",colour: "background-color: #173BFF"},
        {link: "http://www.itheima.com/images/slidead/HOMEPAGE/2019092611235020190809153712renbao968x385.jpg",colour: "background-color: #000247"},
        {link: "http://www.itheima.com/images/slidead/HOMEPAGE/20181009105646968-385.jpg",colour: "background-color: #00101F"}
      ],
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0
    };
  },
  methods: {
    setSize: function() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    }
  },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    };
  }
};
</script>
<style scoped>
/* #app {
  background: #012553;
} */
.el-carousel{
  /* position:inherit; */
}
img {
  height: inherit;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #012553;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #012553;
}
#bg {
  background: #012553;
}
.el-aside {
  background: #012553;
}
</style>