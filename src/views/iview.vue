<template>
  <div id="app">
    <el-container>
      <el-aside>
        <div id="bg"></div>
      </el-aside>
      <el-main>
        <el-carousel indicator-position="outside" >
          <h1>h1</h1>
          <el-carousel-item v-for="item in img_list" :key="item">
            <img :src="item" alt />
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img_list: [
        "http://www.itheima.com/images/slidead/HOMEPAGE/20191112093108968x385.jpg",
        "http://www.itheima.com/images/slidead/HOMEPAGE/20191111094228banner968x385.jpg",
        "http://www.itheima.com/images/slidead/HOMEPAGE/2019092611235020190809153712renbao968x385.jpg",
        "http://www.itheima.com/images/slidead/HOMEPAGE/20181009105646968-385.jpg"
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
#app {
  background: #012553;
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