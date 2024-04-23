<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ElConfigProvider } from 'element-plus';
const zIndex = 3000;
const size = 'default';
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <RouterView />
  </el-config-provider>
</template>

<style lang="css">
#app {
  /* width: 100vw;
  height: 100vh;
  min-width: 1300px;
  min-height: 900px; */

  display: flex;
  flex-direction: column;

  background-color: #f2f7ff;
}
</style>
