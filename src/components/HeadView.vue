<template>
    <div class="headView">
        <el-image class="textIcon" :src="imgs[0]"></el-image>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c6400"
            text-color="#333" active-text-color="#1D66DB" @select="handleSelect">
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3">Info</el-menu-item>
            <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import text from "@/assets/images/root/text.png"
import { ElMenu, ElMenuItem, ElSubMenu, ElImage } from 'element-plus'

const imgs = [text]

const activeIndex2 = ref('1')
function handleSelect(key: string, keyPath: string[]) {
    console.log(key, keyPath);
}
</script>

<style lang="less" scoped>
.headView {
    width: 100%;
    height: 73px;

    background-image: url("@/assets/images/root/head.png");
    background-size: 100% 100%;

    display: flex;
    align-items: center;
    padding-bottom: 10px;

    .textIcon {
        margin-left: 22px;
    }

    .el-menu {
        flex-grow: 1;
        width: 0;
        height: 48px;
        margin-left: 200px;
        border-bottom-width: 0px !important;

        .el-menu-item,
        .el-sub-menu {
            width: 160px;
            height: 48px;
            border-radius: 24px;
            border: 1px solid #1D66DB00;
        }

        .el-menu-item:hover,
        .el-menu-item:focus-within {
            background-color: #00000000;
        }

        .el-menu-item+.el-menu-item,
        .el-sub-menu+.el-menu-item,
        .el-menu-item+.el-sub-menu {
            margin-left: 20px;
        }
    }

    .el-menu>.is-active {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0px 2px 10px 0px rgba(26, 99, 217, 0.2);
        border: 1px solid #1D66DB;
        font-weight: bold;
    }

    :deep(.el-sub-menu__title) {
        border-bottom-width: 0px !important;
    }

    :deep(.el-menu>.is-active>.el-sub-menu__title) {
        font-weight: bold;
    }
}
</style>
<style lang="less"></style>