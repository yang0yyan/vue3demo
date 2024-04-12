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
import { CacheEnum } from '@/utils/cache/CacheEnum';
import { StorageUtil } from '@/utils/cache/StorageUtil';
import type { RouteLocationMatched } from 'vue-router';

const routerCache = StorageUtil.get(CacheEnum.USER_ROUTER, []) as Array<RouteNodeBean>;
const routerData = (routerCache && routerCache.length) ? routerCache[0].children : [];
const router = useRouter()
const activeIndex = ref(0)
const routeList = reactive<Array<RouteNodeBean>>(routerData || [])
// activeIndex.value = 
function handleSelect(index: number) {
    if (routeList.length === 0) return
    let item: RouteNodeBean = routeList[index]
    router.push(item.functionPath || '/404')
}

const route = useRoute()
function initSelect(router: RouteLocationMatched) {
    for (let index = 0; index < routeList.length; index++) {
        const item = routeList[index];
        if (item.functionPath === router.path) {
            activeIndex.value = index
            break;
        }
    }
}
initSelect(route.matched[0])
watch(() => route.matched, (data) => {
    if (data[0].path === '/root') {
        initSelect(data[1])
    } else {
        initSelect(data[0])
    }
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