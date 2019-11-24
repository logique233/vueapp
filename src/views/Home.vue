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
    <Affix></Affix>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import Lesson from "@/components/lesson/lesson.vue";
import Affix from "@/components/affix/affix.vue";

export default {
  name: "home",
  components: {
    navbar,
    Lesson,
    Affix
  }
};
</script>
<style  scoped>
</style>
