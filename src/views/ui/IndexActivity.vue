<template>
  <div class="flex flex-wrap justify-items-start">
    <div class="item" v-for="item in menuList" :key="item.path" @click="jumpPager(item)">
      <div class="radius"></div>
      <div class="txt">{{ item?.meta.title || '' }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { modules } from '@/router/routes/modules';
import type { RouteRecordRaw } from 'vue-router';

const menuList = modules;
const router = useRouter();
function jumpPager(item: RouteRecordRaw) {
  router.push(item.path);
}
</script>
<style lang="less">
.item {
  width: 317px;
  height: 99px;
  background-image: url('@/assets/images/indexActivity/bg.png');
  background-size: 100% 100%;

  display: flex;
  align-items: center;
  cursor: pointer;

  .radius {
    content: '';
    width: 48px;
    height: 48px;
    background: #d0e2fd;
    border-radius: 50%;
    margin-left: 10%;
  }

  .txt {
    font-family: Microsoft YaHei;
    font-weight: bold;
    font-size: 28px;
    color: #000000;
    line-height: 24px;
    margin-left: 10%;
  }
}

.item {
  margin-right: 16px;
}
</style>
