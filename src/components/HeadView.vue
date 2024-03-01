<template>
    <div class="headView">
        <div class="titleView">
            <div class="title">网评管理系统</div>
            <div class="subtitle">Network Evaluation System</div>
        </div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c6400"
            text-color="#333" active-text-color="#1D66DB" @select="handleSelect">
            <el-menu-item index="1">Processing Center</el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMenu, ElMenuItem, ElImage } from 'element-plus'


const activeIndex2 = ref('1')
function handleSelect(key: string, keyPath: string[]) {
    console.log(key, keyPath);
}
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
        .title {}

        .subtitle {}
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