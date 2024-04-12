<template>
    <router-view name="head" />
    <!-- <head-view @menuClick="menuClick" name="HeadView"></head-view> -->
    <div class="heightFill rowView">
        <router-view name="menu" />
        <!-- <menu-view v-if="showSubMenu" name="MenuView"></menu-view> -->
        <div class="widthFill">
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

.menuView {
    margin: 20px 20px 20px 20px;
    height: unset;
}
</style>