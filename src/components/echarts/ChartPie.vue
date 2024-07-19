<template>
  <div :id="props.chatName || defaultName" ref="myChartView"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;
const props = defineProps<{
  seriesData: Array<{ value: number; name: string }>;
  chatName?: string;
}>();
const defaultName = 'myChartView';

let myChart: echarts.ECharts;
let option: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  color: ['#0B59CF', '#009E21', '#A671FF', '#014FA2', '#1BB8FF', '#E6A23C'],
  legend: {
    top: 'center',
    right: '20%',
    orient: 'vertical',
    itemWidth: 18,
    itemHeight: 18,
    itemGap: 16,
    icon: 'circle',
    formatter: function (name: string) {
      return name + '：' + seriesMap.get(name) + '单';
    },
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
let seriesMap = new Map<string, number>();
function drawEchart() {
  props.seriesData.forEach((item) => {
    seriesMap.set(item.name, item.value);
  });
  option.series[0].data = props.seriesData;
  if (!myChart) {
    var chartDom = document.getElementById(props.chatName || defaultName);
    if (!chartDom) return;
    myChart = echarts.init(chartDom);
  }

  myChart && myChart.setOption(option);
}

onMounted(() => {
  drawEchart();
  resize();
  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  window.removeEventListener('resize', resize);
});

watch(
  () => props.seriesData,
  () => {
    drawEchart();
  },
  { deep: true },
);

let myChartView = ref<HTMLElement>();
let viewHeight = ref<number>(0);
let viewWidth = ref<number>(0);
function resize() {
  viewWidth.value = myChartView.value?.clientWidth || 0;
  viewHeight.value = myChartView.value?.clientHeight || 0;

  let chartHeight = viewHeight.value * 0.5;

  option.graphic.shape.r = chartHeight - 1;
  option.graphic.left = viewWidth.value * 0.2;

  option.series[0].radius[1] = chartHeight - 20;
  option.series[0].center[0] = chartHeight + viewWidth.value * 1 * 0.2;

  myChart && myChart.setOption(option);
  myChart && myChart.resize();
}
</script>

<style scoped lang="less">
.main {
}
</style>
