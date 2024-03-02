<template>
    <div id="main"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { fa } from 'element-plus/es/locales.mjs';

type EChartsOption = echarts.EChartsOption;

onMounted(() => {
    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
        tooltip: {},
        grid: {
            top: 20,
            left: 0,
            right: 0,
            bottom: 10,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                color: "#333333",
                fontSize: 16
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: "#333333",
                fontSize: 16
            },
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

    option && myChart.setOption(option);
})

</script>

<style scoped lang="less">
.main {}
</style>