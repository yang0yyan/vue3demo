<template>
  <div class="notFound">
    <h1>404</h1>
    <h2>PAGE NOT FOUND</h2>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();

watch(router, () => {
  console.log(router.fullPath);
});
</script>

<style scoped lang="less">
.notFound {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
