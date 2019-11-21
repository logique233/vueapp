<template>
  <div class="home">
    <el-container>
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

export default {
  name: "home",
  components: {
    Subnav,
    Iview
  }
};
</script>
<style  scoped>
.el-main{
  overflow:inherit
}
</style>
