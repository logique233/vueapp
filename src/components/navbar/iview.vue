<template>
  <div id="app">
    <el-carousel :height="height">
      <el-carousel-item v-for="(img) in img_list" :key="img.index" :style="img.colours">
        <img :src="img.link" alt />
      </el-carousel-item>
    </el-carousel>
    <Track />
  </div>
</template>
<script>
import Track from "@/components/navbar/track.vue";

export default {
  components: {
    Track
  },
  data() {
    return {
      height: "343px",
      img_list: [
        {
          link:
            "http://www.itheima.com/images/slidead/HOMEPAGE/20191112093108968x385.jpg",
          colours: "background-color: #0E1144"
        },
        {
          link:
            "http://www.itheima.com/images/slidead/HOMEPAGE/20191111094228banner968x385.jpg",
          colours: "background-color: #173BFF"
        },
        {
          link:
            "http://www.itheima.com/images/slidead/HOMEPAGE/2019092611235020190809153712renbao968x385.jpg",
          colours: "background-color: #000247"
        },
        {
          link:
            "http://www.itheima.com/images/slidead/HOMEPAGE/20181009105646968-385.jpg",
          colours: "background-color: #00101F"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.el-carousel container {
  height: 343px;
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