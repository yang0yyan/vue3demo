<template>
  <div class="lg:mainRoundRectBg p-4 pb-0">
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
        <el-col :span="6">
          <el-form-item label="退货率">
            <el-input-number v-model="returnRate" :min="0" :max="100" @change="handleChange" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="净投产">
            {{ (sell / profit / (1 - returnRate / 100)) * 1.1 }}
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script setup lang="ts">
const sell = ref<number>(1);
const profit = ref<number>(1);
const returnRate = ref<number>(1);
function handleChange(cur: number | undefined, prev: number | undefined) {
  if (sell.value < profit.value) {
    ElMessage.error('利润不能大于卖价');
    profit.value = sell.value;
    return;
  }
}
</script>
<style lang="less"></style>
