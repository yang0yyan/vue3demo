<template>
  <router-view name="header" />
  <div class="flex flex-grow h-0">
    <router-view name="aside" />
    <!-- <router-view name="main" /> -->
    <router-view />
  </div>
  <router-view name="footer" />
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.menuView {
  margin: 20px 20px 20px 20px;
  height: unset;
}
</style>
