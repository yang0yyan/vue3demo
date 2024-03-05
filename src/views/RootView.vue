<template>
    <head-view @menuClick="menuClick" v-if="showMenu" :data="routeList"></head-view>
    <div class="heightFill rowView">
        <menu-view v-if="showSubMenu" :data="subRouteList"></menu-view>
        <div class="widthFill">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { RouteNodeBean } from '@/bean/RouteNodeBean';
import { CacheEnum } from '@/utils/cache/CacheEnum';
import { StorageUtil } from '@/utils/cache/StorageUtil';

const routeList = reactive<Array<RouteNodeBean>>([])
const subRouteList = reactive<Array<RouteNodeBean>>([])
const router = useRouter()

function menuClick(list: Array<RouteNodeBean>) {
    subRouteList.splice(0, subRouteList.length, ...list)
}
const showMenu = computed(() => {
    return routeList.length > 0
})
const showSubMenu = computed(() => {
    return subRouteList.length > 0
})

onBeforeMount(() => {
    let myRoute = StorageUtil.get(CacheEnum.USER_ROUTER, []) as Array<RouteNodeBean>;
    if (myRoute.length === 0 || !myRoute[0].children || myRoute[0].children.length === 0) {
        router.push("/404")
    } else {
        routeList.push(...myRoute[0].children)
    }
})
</script>

<style lang="less" scoped>
.rowFillView {
    box-sizing: border-box;
}

.menuView {
    margin: 20px 20px 20px 20px;
    height: unset;
}
</style>