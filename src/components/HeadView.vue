<template>
    <div class="headView">
        <div class="titleView">
            <div class="title">网评管理系统</div>
            <div class="subtitle">Network Evaluation System</div>
        </div>
        <div class="menuView">
            <div class="menuItem" :class="{ menuItemChoose: activeIndex === index }" v-for="(item, index) in routeList"
                :key="index" @click="handleSelect(index)">
                <el-icon size="32" color="#FF0000">
                    <i-ep-edit />
                </el-icon>
                <div>{{ item.functionName }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { RouteNodeBean } from '@/bean/RouteNodeBean';

const emit = defineEmits<{ menuClick: [Array<RouteNodeBean>] }>()
const props = defineProps<{ data: Array<RouteNodeBean> }>()
const router = useRouter()
const activeIndex = ref(0)
const routeList = reactive<Array<RouteNodeBean>>([])

function handleSelect(index: number) {
    if (routeList.length === 0) return
    activeIndex.value = index
    let item: RouteNodeBean = routeList[index]
    if (item.children && item.children.length) {
        emit("menuClick", item.children)
    } else {
        emit("menuClick", [])
        router.push(item.functionPath || '/404')
    }
}

watch(props.data, () => {
    activeIndex.value = 0
    routeList.push(...props.data)
    handleSelect(activeIndex.value)
})

onBeforeMount(() => {
    routeList.push(...props.data)
    handleSelect(activeIndex.value)
})
</script>

<style lang="less" scoped>
.headView {
    width: 100%;
    height: 74px;

    background-image: url("@/assets/images/root/head.png");
    background-size: calc(100% + 34px) calc(100% + 64px);
    background-position: -17px -32px;

    display: flex;
    align-items: center;

    box-shadow: 0px 2px 20px 0px rgba(0, 26, 65, 0.2);
    border-radius: 0px 0px 20px 20px;

    .titleView {
        margin-left: 120px;

        .title {
            font-family: Alibaba PuHuiTi 2.0;
            font-weight: normal;
            font-size: 32px;
            color: #FFFFFF;
            line-height: 32px;
        }

        .subtitle {
            font-family: Alibaba PuHuiTi 2.0;
            font-weight: normal;
            font-size: 16px;
            color: #FFFFFF;
            line-height: 16px;
            margin-top: 4px;
        }
    }

    .menuView {
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px 0px 0px 16px;

        display: flex;
        align-items: center;
        padding: 0px 100px;

        .menuItem {
            width: 160px;
            height: 48px;

            border-radius: 4px;

            display: flex;
            align-items: center;
            justify-content: center;

            font-family: Microsoft YaHei;
            font-weight: bold;
            font-size: 16px;
            color: #FFFFFF;
            line-height: 24px;

            cursor: pointer;

            .el-icon {
                --color: #FFFFFF !important;
            }
        }

        .menuItemChoose {
            background-color: #FFFFFF;
            background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(11, 89, 207, 0.6));
            box-shadow: 0px 5px 20px 0px rgba(0, 38, 98, 0.16);

            color: #03347E;

            .el-icon {
                --color: #03347E !important;
            }
        }
    }
}
</style>