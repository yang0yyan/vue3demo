<template>
  <div class="menuView flex-shrink-0">
    <div
      class="menuItem"
      :class="{ menuItemChoose: activeIndex === index }"
      v-for="(item, index) in routeList"
      :key="index"
      @click="handleSelect(index)"
    >
      {{ item.functionName }}
    </div>
  </div>
</template>

<script setup lang="ts">
// import type { RouteNodeBean } from '@/bean/RouteNodeBean';
import type { RouteNodeBean } from '@/bean/RouteNodeBean';
import { CacheEnum } from '@/utils/cache/CacheEnum';
import { StorageUtil } from '@/utils/cache/StorageUtil';
import type { RouteLocationMatched } from 'vue-router';

const routerCache = StorageUtil.get(CacheEnum.USER_ROUTER, []) as Array<RouteNodeBean>;
const routerData = routerCache && routerCache.length ? routerCache[0].children : [];
const routeList: Array<RouteNodeBean> = reactive([]);
const router = useRouter();

const activeIndex = ref(0);
function handleSelect(index: number) {
  activeIndex.value = index;
  let item = routeList[index];
  router.push(item.functionPath || '/404');
}

const route = useRoute();
let currentRootPath = route.matched[0].path;
function initRouteList(router: RouteLocationMatched) {
  if (!routerData) return;
  for (let index = 0; index < routerData.length; index++) {
    const item = routerData[index];
    if (item.functionPath === router.path) {
      routeList.splice(0, routeList.length);
      if (item.children) routeList.push(...item.children);
      break;
    }
  }
}
function initSelect(router: RouteLocationMatched) {
  for (let index = 0; index < routeList.length; index++) {
    const item = routeList[index];
    if (item.functionPath === router.path) {
      activeIndex.value = index;
      break;
    }
  }
}
initRouteList(route.matched[0]);
initSelect(route.matched[1]);
watch(
  () => route.matched,
  () => {
    if (currentRootPath !== route.matched[0].path) {
      currentRootPath = route.matched[0].path;
      initRouteList(route.matched[0]);
    }
    initSelect(route.matched[1]);
  },
);
</script>

<style lang="less" scoped>
.menuView {
  width: 180px;
  height: 100%;

  background: #ffffff;
  border-radius: 16px;
  padding-top: 20px;

  .menuItem {
    height: 60px;
    padding-left: 34px;
    line-height: 60px;
    cursor: pointer;
  }

  .menuItemChoose {
    width: 100%;
    background-color: #0b59cf;
    margin-left: 20px;
    padding-left: 14px;
    border-radius: 16px 0 0 16px;

    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
    text-shadow: 0px 1px 4px rgba(0, 30, 80, 0.3);
  }
}
</style>
