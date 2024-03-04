<template>
    <div id="main"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;
let myChart: echarts.ECharts;
var option: EChartsOption = {
    tooltip: {},
    grid: {
        top: 20,
        left: 0,
        right: 0,
        bottom: 20,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            color: "#333333",
            fontSize: 16,
            margin: 16
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#D2D2D2"
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: "#333333",
            fontSize: 16
        },
        splitNumber: 5,
        splitLine: {
            show: true,
            lineStyle: {
                color: "#D2D2D2",
                type: [2, 2],
                dashOffset: 5
            }
        }
    },
    dataZoom: [
        {
            type: 'inside',
            startValue: 0,
            endValue: 4,
            zoomLock: false
        },
        {
            type: 'slider',
            height: 8,
            borderColor: "#00000000",
            borderRadius: 2,
            backgroundColor: '#E9EDF8',
            fillerColor: "#C2C5D2",
            handleStyle: {
                opacity: 0
            },
            dataBackground: {
                lineStyle: {
                    cap: "round"
                }
            },
            selectedDataBackground: {
                lineStyle: {
                    cap: "round"
                }
            },
            showDetail: false,
            showDataShadow: false,
            bottom: 0,
            right: 1,
            brushSelect: false
        }
    ],
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 12,
            itemStyle: {
                borderRadius: [12, 12, 0, 0],
                color: "#0B59CF",
            },

        }
    ]
};

onMounted(() => {
    if (!myChart) {
        var chartDom = document.getElementById('main')!;
        myChart = echarts.init(chartDom);
    }

    option && myChart.setOption(option);
    window.addEventListener('resize', resize);
})
onUnmounted(() => {
    window.removeEventListener('resize', resize);
})
function resize() {
    myChart.resize();
}
</script>

<style scoped lang="less">
.main {}
</style>