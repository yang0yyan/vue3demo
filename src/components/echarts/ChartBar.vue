<template>
  <div id="main"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { cloneDeep } from 'lodash-es';

let props = defineProps<{
  xAxisData: Array<string>;
  seriesDatas: Array<Array<number>>;
}>();

type EChartsOption = echarts.EChartsOption;
type SeriesOption = echarts.SeriesOption;
let myChart: echarts.ECharts;
var option: EChartsOption = {};

const seriesItem: SeriesOption = {
  data: [],
  type: 'bar',
  barMaxWidth: 12,
  itemStyle: {
    borderRadius: [12, 12, 0, 0],
    color: '#0B59CF',
  },
  label: {
    show: true,
    position: 'top',
  },
};

function drawEchart() {
  option = {
    tooltip: {},
    grid: {
      top: 40,
      left: 0,
      right: 80,
      bottom: 20,
      containLabel: true,
    },
    xAxis: {
      name: '退货率',
      type: 'category',
      data: props.xAxisData || [],
      axisLabel: {
        color: '#333333',
        fontSize: 16,
        margin: 16,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#D2D2D2',
        },
      },
      axisTick: {
        show: false,
      },
      nameTextStyle: {
        color: '#333333',
      },
    },
    yAxis: {
      name: '净投产',
      type: 'value',
      axisLabel: {
        color: '#333333',
        fontSize: 16,
      },
      splitNumber: 5,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#D2D2D2',
          type: [2, 2],
          dashOffset: 5,
        },
      },
    },
    dataZoom: [
      {
        type: 'inside',
        // startValue: 0,
        // endValue: 4,
        zoomLock: false,
      },
      {
        type: 'slider',
        height: 8,
        borderColor: '#00000000',
        borderRadius: 2,
        backgroundColor: '#E9EDF8',
        fillerColor: '#C2C5D2',
        handleStyle: {
          opacity: 0,
        },
        dataBackground: {
          lineStyle: {
            cap: 'round',
          },
        },
        selectedDataBackground: {
          lineStyle: {
            cap: 'round',
          },
        },
        showDetail: false,
        showDataShadow: false,
        bottom: 0,
        // left: 0,
        brushSelect: false,
      },
    ],
    series: [
      // {
      //   data: [120, 200, 150, 80, 70, 110, 130],
      //   type: 'bar',
      //   barWidth: 12,
      //   itemStyle: {
      //     borderRadius: [12, 12, 0, 0],
      //     color: '#0B59CF',
      //   },
      // },
    ],
  };
  let seriesDatas = props.seriesDatas;
  seriesDatas.forEach((item) => {
    let ibj: SeriesOption = cloneDeep(seriesItem);
    ibj.data = item;
    option.series = [];
    option.series.push(ibj);
  });
  if (!myChart) {
    var chartDom = document.getElementById('main')!;
    if (!chartDom) return;
    myChart = echarts.init(chartDom);
  }

  option && myChart.setOption(option);
}

onMounted(() => {
  drawEchart();
  window.addEventListener('resize', resize);
});
onUnmounted(() => {
  window.removeEventListener('resize', resize);
});

watch(
  () => props.xAxisData,
  (arr) => {
    drawEchart();
  },
  { deep: true },
);
watch(
  () => props.seriesDatas,
  (arr) => {
    drawEchart();
  },
  { deep: true },
);
function resize() {
  myChart && myChart.resize();
}
</script>

<style scoped lang="less">
.main {
}
</style>
