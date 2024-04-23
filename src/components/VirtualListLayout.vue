<template>
  <div class="virtualList" ref="rootView" @scroll="onScroll">
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="infinite-list" :style="{ transform: transform }">
      <div
        class="infinite-item"
        v-for="(item, index) in visibleData"
        :key="index"
        :style="`height: ${itemHeight}px;background-color: ${item.color};`"
        @click="itemClick(item)"
      >
        {{ item.checked }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NodeData {
  color: string;
  checked: boolean;
}

let rootView = ref<HTMLElement>();
const clientHeight = ref<number>(0);
const startOffset = ref<number>(0);
const start = ref<number>(0);
const end = ref<number>(0);
const rowNum = ref<number>(3);

const listData = reactive<Array<NodeData>>([]);

const itemHeight = 40;

const listHeight = computed(() => {
  return Math.ceil(listData.length / rowNum.value) * itemHeight;
});

const visibleCount = computed(() => {
  return Math.ceil(clientHeight.value / itemHeight) * rowNum.value;
});

const visibleData = computed(() => {
  return listData.slice(start.value, Math.min(end.value, listData.length));
});

const transform = computed(() => {
  return `translate3d(0,${startOffset.value}px,0)`;
});

onMounted(() => {
  clientHeight.value = rootView.value?.clientHeight || 0;
  start.value = 0;
  end.value = start.value + visibleCount.value;

  const list: Array<NodeData> = [];
  for (let index = 0; index < 101; index++) {
    list.push({ color: '#FFFFFF', checked: false });
  }
  listData.splice(0, listData.length, ...list);
});

function onScroll() {
  let scrollTop = rootView.value?.scrollTop || 0;
  start.value = Math.floor(scrollTop / itemHeight) * rowNum.value;
  end.value = start.value + visibleCount.value;
  startOffset.value = scrollTop - (scrollTop % itemHeight);
}

function itemClick(item: NodeData) {
  item.color = '#FFFF00';
  item.checked = true;
}
</script>

<style scoped lang="less">
.virtualList {
  width: 300px;
  height: 500px;
  background-color: #ffffff;

  overflow: auto;

  position: relative;

  .infinite-list {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    display: grid;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
}
</style>
