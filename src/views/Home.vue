<template>
  <div class="home">
    <el-container>
      <el-header>
        <!-- <Head></Head> -->
      </el-header>
      <el-main>
        <Subnav></Subnav>
        <Iview></Iview>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Subnav from "@/components/navbar/Subnav.vue";
import Iview from "@/components/navbar/iview.vue";
// import Head from "@/components/navbar/head.vue";

export default {
  name: "home",
  components: {
    Subnav,
    Iview,
    // Head
  }
};
</script>
<style  scoped>
.el-main {
  overflow: inherit;
}
</style>
