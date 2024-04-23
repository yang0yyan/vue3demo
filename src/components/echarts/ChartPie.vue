<template>
  <div id="main2" ref="myChartView"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;

let myChart: echarts.ECharts;
let option: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  color: ['#0B59CF', '#009E21', '#A671FF', '#014FA2', '#1BB8FF'],
  legend: {
    top: 'center',
    right: '20%',
    orient: 'vertical',
    itemWidth: 18,
    itemHeight: 18,
    itemGap: 16,
    icon: 'circle',
  },
  graphic: {
    type: 'circle',
    top: 'center',
    left: 0,
    shape: {
      cx: 20,
      cy: 30,
      r: 0,
    },
    style: {
      stroke: '#D2D2D2',
      fill: '#FFFFFF',
      lineWidth: 1,
    },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      center: [0, 'center'],
      radius: ['54%', 0],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      labelLine: {
        show: false,
      },

      emphasis: {
        scaleSize: 20,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
};

onMounted(() => {
  if (!myChart) {
    var chartDom = document.getElementById('main2')!;
    myChart = echarts.init(chartDom);
  }
  resize();
  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  window.removeEventListener('resize', resize);
});

let myChartView = ref<HTMLElement>();
let viewHeight = ref<number>(0);
let viewWidth = ref<number>(0);
function resize() {
  viewWidth.value = myChartView.value?.clientWidth || 0;
  viewHeight.value = myChartView.value?.clientHeight || 0;
}

watch(viewHeight, () => {
  let chartHeight = viewHeight.value * 0.5;

  option.graphic.shape.r = chartHeight - 1;
  option.graphic.left = viewWidth.value * 0.2;

  option.series[0].radius[1] = chartHeight - 20;
  option.series[0].center[0] = chartHeight + viewWidth.value * 1 * 0.2;

  option && myChart.setOption(option);
  myChart.resize();
});
</script>

<style scoped lang="less">
.main {
}
</style>
