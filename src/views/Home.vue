<template>
  <div class="home">
    <el-container>
     <navbar></navbar>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";

export default {
  name: "home",
  components: {
    navbar
  }
};
</script>
<style  scoped>

</style>
