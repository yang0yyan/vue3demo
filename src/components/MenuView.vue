<template>
    <div class="menuView">
        <div class="menuItem" v-for="(item, index) in routeList" :key="index" @click="handleSelect(index)">{{
            item.functionName }}</div>
    </div>
</template>

<script setup lang="ts">
import type { RouteNodeBean } from '@/bean/RouteNodeBean';

const props = defineProps<{
    data: Array<RouteNodeBean>
}>()
const routeList: Array<RouteNodeBean> = reactive([...props.data]);
const router = useRouter()

watch(props.data, (list) => {
    routeList.splice(0, routeList.length, ...list)
    activeIndex.value = 0
    handleSelect(activeIndex.value)
})

onMounted(() => {
    handleSelect(activeIndex.value)
})

const activeIndex = ref(0)
function handleSelect(index: number) {
    activeIndex.value = index
    let item = routeList[index]
    router.push(item.functionPath)
}
</script>

<style lang="less" scoped>
.menuView {
    width: 180px;
    height: 100%;

    background: #FFFFFF;
    border-radius: 16px;
    padding-top: 20px;

    .menuItem {
        height: 60px;
        padding-left: 34px;
        line-height: 60px;

    }
}
</style>