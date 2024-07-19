<template>
  <div class="h-full w-full flex flex-col p-4">
    <div class="lg:mainRoundRectBg p-4 mb-4">
      <el-row>
        <el-col :span="6">
          <input type="file" @change="handleFileUpload" />
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click.prevent="exportAssets()"> 导入资产库 </el-button>
        </el-col>
      </el-row>
    </div>

    <div class="lg:mainRoundRectBg p-4 mb-4 flex-grow h-0">
      <el-table :data="tableData" class="w-full" height="100%">
        <el-table-column
          :prop="'' + index"
          :label="item + ''"
          width="180"
          v-for="(item, index) in titles"
          :key="index"
        />
      </el-table>
    </div>
    <div class="h-80 flex lg:mainRoundRectBg p-4">
      <div class="flex-1">
        <ChartPie class="h-full w-full" chat-name="ChartPie1" :series-data="seriesData"></ChartPie>
      </div>
      <div class="flex-1">
        <ChartPie class="h-full w-full" chat-name="ChartPie2" :series-data="seriesData2"></ChartPie>
      </div>
      <div class="flex-1">
        <ChartPie class="h-full w-full" chat-name="ChartPie3" :series-data="seriesData3"></ChartPie>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CacheEnum } from '@/utils/cache/CacheEnum';
import { StorageUtil } from '@/utils/cache/StorageUtil';
import * as XLSX from 'xlsx';

const titles = reactive<Array<String>>([]);
const tableData = reactive<Array<Array<String>>>([]);

const count = ref<number>(0);

async function handleFileUpload(event: Event) {
  const files = event?.target?.files;
  if (files && files[0]) {
    const data = (await parseCSV(files[0])) as Array<Array<String>>;
    console.log(data);
    titles.splice(0, titles.length, ...data[0]);
    tableData.splice(0, tableData.length, ...data.slice(1, data.length));
    optionProd();
  }
}

function parseCSV(file: File) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        console.log(json);
        // 这里的json就是解析后的数组，可以根据需要进一步处理或使用
        resolve(json);
      };
      reader.readAsBinaryString(file);
    } catch (e) {
      reject(e);
    }
  });
}

const seriesData = reactive<Array<{ value: number; name: string }>>([
  { value: 0, name: '单件' },
  { value: 0, name: '两件套' },
  { value: 0, name: '四件套' },
  { value: 0, name: '六件套' },
]);
const seriesData2 = reactive<Array<{ value: number; name: string }>>([
  { value: 0, name: '待付款' },
  { value: 0, name: '待发货' },
  { value: 0, name: '已发货，待发货' },
  { value: 0, name: '已收货' },
  { value: 0, name: '已申请缺货' },
  { value: 0, name: '已付定金，待付尾款' },
  { value: 0, name: '已付定金/待支付尾款' },
]);
const seriesData3 = reactive<Array<{ value: number; name: string }>>([
  { value: 0, name: '美乐蒂' },
  { value: 0, name: '库洛米' },
  { value: 0, name: '玉桂狗' },
  { value: 0, name: '帕恰狗' },
  { value: 0, name: '布丁狗' },
  { value: 0, name: '凯蒂猫' },
]);
function optionProd() {
  count.value = 0;
  seriesData.forEach((item) => (item.value = 0));
  tableData.forEach((item) => {
    let prod2 = item[2] + '';
    let prod1 = item[14] + '';
    if (
      prod1.includes('为你打开乐趣的大门') ||
      prod1.includes('是探索新乐趣的开始') ||
      prod1.includes('为你打开新的大门')
    ) {
      seriesData[0].value += 1;
    } else if (
      prod1.includes('多样化的阅读体验悦') ||
      prod1.includes('拥有平衡的阅读体验') ||
      prod1.includes('不同的情境不同的乐趣')
    ) {
      seriesData[1].value += 1;
    } else if (
      prod1.includes('内容更加充实') ||
      prod1.includes('更加丰富和有趣') ||
      prod1.includes('丰富阅读体验')
    ) {
      seriesData[2].value += 1;
    } else if (
      prod1.includes('全部六本带你穿越不同的世界') ||
      prod1.includes('多样化的深入探索六个主题') ||
      prod1.includes('全面涉猎六种主题绝佳的选择')
    ) {
      seriesData[3].value += 1;
    }
    // if (prod1.includes("单件")) {
    //   seriesData[0].value += 1
    // } else if (prod1.includes("两件套")) {
    //   seriesData[1].value += 1
    // } else if (prod1.includes("四件套")) {
    //   seriesData[2].value += 1
    // } else if (prod1.includes("六件套")) {
    //   seriesData[3].value += 1
    // }
    if (prod2.includes('待付款')) {
      seriesData2[0].value += 1;
    } else if (prod2.includes('待发货')) {
      seriesData2[1].value += 1;
    } else if (prod2.includes('已发货，待收货')) {
      seriesData2[2].value += 1;
    } else if (prod2.includes('已收货')) {
      seriesData2[3].value += 1;
    } else if (prod2.includes('已申请缺货')) {
      seriesData2[4].value += 1;
    } else if (prod2.includes('已付定金，待付尾款')) {
      seriesData2[5].value += 1;
    } else if (prod2.includes('已付定金/待支付尾款')) {
      seriesData2[6].value += 1;
    }
    ['美乐蒂', '库洛米', '玉桂狗', '帕恰狗', '布丁狗', '凯蒂猫', '六'].forEach((txt) => {
      if (prod1.includes(txt)) {
        if (txt === '美乐蒂') {
          seriesData3[0].value += 1;
        } else if (txt === '库洛米') {
          seriesData3[1].value += 1;
        } else if (txt === '玉桂狗') {
          seriesData3[2].value += 1;
        } else if (txt === '帕恰狗') {
          seriesData3[3].value += 1;
        } else if (txt === '布丁狗') {
          seriesData3[4].value += 1;
        } else if (txt === '凯蒂猫') {
          seriesData3[5].value += 1;
        } else if (txt === '六') {
          seriesData3[0].value += 1;
          seriesData3[1].value += 1;
          seriesData3[2].value += 1;
          seriesData3[3].value += 1;
          seriesData3[4].value += 1;
          seriesData3[5].value += 1;
        }
      }
    });
  });
}

function exportAssets() {
  const assets = StorageUtil.get(CacheEnum.ASSETS_LIBRARY, []) as Array<IAssets>;
  for (let i = 0; i < seriesData3.length; i++) {
    const item1 = seriesData3[i];
    for (let j = 0; j < assets.length; j++) {
      const item2 = assets[j];
      if (item2.type?.includes(item1.name)) {
        if (item2.count) item2.count -= item1.value;
      }
    }
  }
  StorageUtil.set(CacheEnum.ASSETS_LIBRARY, assets);
}
</script>
<style lang="less"></style>
