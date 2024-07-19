<template>
  <div class="lg:mainRoundRectBg p-4">
    <el-form label-width="76px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="卖价">
            <el-input-number v-model="sell" :min="1" :max="99999" @change="handleChange" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="利润">
            <el-input-number v-model="profit" :min="1" :max="99999" @change="handleChange" />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="退货率">
            <el-slider
              v-model="value"
              range
              :min="1"
              :max="99"
              :marks="marks"
              @change="handleChange2"
            />
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item label-width="0"> {{ value[0] }}% - {{ value[1] }}% </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <ChartBar
      class="w-[54rem] h-[32rem]"
      :x-axis-data="xAxisData"
      :series-datas="seriesDatas"
    ></ChartBar>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus';

const xAxisData = reactive<Array<string>>([]);
const seriesDatas = reactive<Array<Array<number>>>([]);

const sell = ref<number>(1);
const profit = ref<number>(1);
function handleChange(cur: number | undefined, prev: number | undefined) {
  if (sell.value < profit.value) {
    ElMessage.error('利润不能大于卖价');
    profit.value = sell.value;
    return;
  }
  calculated();
}

import type { Arrayable } from 'element-plus/es/utils';
import type { CSSProperties } from 'vue';
interface Mark {
  style: CSSProperties;
  label: string;
}
type Marks = Record<number, Mark | string>;

const value = ref([1, 20]);
const marks = reactive<Marks>({
  1: '1%',
  10: '10%',
  20: '20%',
  30: '30%',
  40: '40%',
  50: {
    style: {
      color: '#1989FA',
    },
    label: '50%',
  },
  60: '60%',
  70: '70%',
  80: '80%',
  90: '90%',
  99: '99%',
});
function handleChange2(value: Arrayable<number>) {
  calculated();
}

function calculated() {
  const returnArr: Array<string> = [];
  const netArr: Array<number> = [];
  for (let index = value.value[0]; index <= value.value[1]; index++) {
    let returnRate = index / 100;
    returnArr.push(index + '%');
    let net = (sell.value / profit.value / (1 - returnRate)) * 1.1;
    netArr.push(Math.round(net * 100) / 100);
  }
  xAxisData.splice(0, xAxisData.length, ...returnArr);
  seriesDatas.splice(0, seriesDatas.length, netArr);
}
calculated();
</script>
<style lang="less"></style>
