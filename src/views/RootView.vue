<template>
    <head-view></head-view>
    <div class="rowFillView">
        <menu-view></menu-view>
        <div class="contentRouterView">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.rowFillView {
    box-sizing: border-box;
}

.contentRouterView {
    flex-grow: 1;
    width: 0;
}

.menuView {
    margin: 0px 8px 8px 8px;
    height: unset;
}
</style>