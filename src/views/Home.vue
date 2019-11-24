<template>
  <div class="home">
    <el-container>
      <navbar></navbar>
    </el-container>
    <el-container>
      <Lesson></Lesson>
    </el-container>
    <el-container>
      <Lesson></Lesson>
    </el-container>
    <el-container>
      <Lesson></Lesson>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import Lesson from "@/components/lesson/lesson.vue";
export default {
  name: "home",
  components: {
    navbar,
    Lesson
  }
};
</script>
<style  scoped>
</style>
