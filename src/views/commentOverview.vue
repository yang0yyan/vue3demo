<template>
    <div class="pagerView">
        <div class="roundRectBg topView"></div>
        <div class="line"></div>
        <div class="roundRectBg bottomView"></div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.pagerView {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    .line {
        background-color: #D2D2D2;
        height: 1px;
        width: 90%;
        align-self: center;
        margin: -0.5px 0;
        position: relative;
    }

    .topView {
        flex-grow: 270;
        height: 0;
    }

    .bottomView {
        flex-grow: 695;
        height: 0;
    }
}
</style>