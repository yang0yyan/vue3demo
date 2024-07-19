<template>
  <div class="h-full w-full p-4 flex flex-col">
    <div class="lg:mainRoundRectBg p-4 mb-4">
      <el-form label-width="76px">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="物品名" class="text-[#222222]">
              <el-input v-model="filterData.type"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="选择中队" class="text-[#222222]">
              <el-button type="primary" @click="addAssets">新增资产</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="lg:mainRoundRectBg p-4 flex-grow h-0">
      <el-table :data="filterTableData" class="w-full" height="100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="type" label="物品名" />
        <el-table-column prop="count" label="库存" />
        <el-table-column prop="mark" label="备注" />
        <el-table-column prop="mark" label="快捷操作">
          <template #default="scope">
            <el-button type="danger" @click.prevent="addition(scope.$index, -2)"> -2 </el-button>
            <el-button type="danger" @click.prevent="addition(scope.$index, -1)"> -1 </el-button>
            <el-button type="primary" @click.prevent="addition(scope.$index, +1)"> +1 </el-button>
            <el-button type="primary" @click.prevent="addition(scope.$index, +2)"> +2 </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="count" label="操作" width="200px">
          <template #default="scope">
            <el-button type="primary" @click.prevent="editRow(scope.$index)"> 编辑 </el-button>
            <el-button type="danger" @click.prevent="deleteRow(scope.$index)"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="编辑队员"
      width="800"
      align-center
      :before-close="beforeClose"
    >
      <el-form
        ref="ruleFormRef"
        label-width="100"
        class="mt-5 mr-5"
        :model="formData"
        :rules="rules"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="类型" prop="type">
              <el-input v-model="formData.type"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="数量" prop="count">
              <el-input-number v-model="formData.count" :min="0" :max="99999" />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="备注">
              <el-input
                v-model="formData.mark"
                type="textarea"
                :autosize="false"
                :rows="4"
                :maxlength="500"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="beforeClose()">取消</el-button>
          <el-button type="primary" @click="positiveClick()"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { CacheEnum } from '@/utils/cache/CacheEnum';
import { StorageUtil } from '@/utils/cache/StorageUtil';
import { CipherUtil } from '@/utils/cipher/CipherUtil';

const tableData = reactive<Array<IAssets>>([]);

function hasRepeat(type: string) {
  for (let index = 0; index < tableData.length; index++) {
    const item = tableData[index];
    if (item.type === type) {
      return true;
    }
  }
  return false;
}
// ------------------------------------筛选------------------------------------ begin
interface IFilter {
  type: string;
}
const filterData = reactive<IFilter>({
  type: '',
});
function addAssets() {
  currentIndex = -1;
  showDialog();
}
const filterTableData = computed<Array<IAssets>>(() => {
  const data = reactive<Array<IAssets>>([]);
  tableData.forEach((item) => {
    if (!item.type?.includes(filterData.type)) {
      return;
    }
    data.push(item);
  });
  return data;
});
// 获取真正的下标
function getTableIndex(filterIndex: number): number {
  const item = filterTableData.value[filterIndex];
  for (let index = 0; index < tableData.length; index++) {
    const item2 = tableData[index];
    if (item.UUID === item2.UUID) {
      return index;
    }
  }
  return -1;
}
function getTableItem(filterIndex: number): IAssets | null {
  const item = filterTableData.value[filterIndex];
  for (let index = 0; index < tableData.length; index++) {
    const item2 = tableData[index];
    if (item.UUID === item2.UUID) {
      return item2;
    }
  }
  return null;
}
// ------------------------------------筛选------------------------------------ end
// ------------------------------------dialog------------------------------------ begin

const dialogVisible = ref<boolean>(false);

function showDialog() {
  changeDialog();
}
function changeDialog() {
  dialogVisible.value = !dialogVisible.value;
}
function beforeClose() {
  changeDialog();
  resetDialog();
}
function positiveClick() {
  validateForm(() => {
    if (currentIndex > -1) {
      let item = tableData[currentIndex];
      item.type = formData.type;
      item.count = formData.count;
      item.mark = formData.mark;
    } else {
      const uniqueId = `${Date.now()}${Math.floor(Math.random() * 10000)}`;
      if (formData.type && hasRepeat(formData.type)) {
        ElMessage.error('资产已存在');
        return;
      }
      tableData.push({
        UUID: CipherUtil.encryptBySha256(uniqueId),
        type: formData.type,
        count: formData.count,
        mark: formData.mark,
      });
    }

    save();
    beforeClose();
  });
}
// 重置dialog
function resetDialog() {
  formData.type = '';
  formData.count = 0;
  formData.mark = '';
}
// 为dialog设置初始值，用户编辑使用
function setDialogData(data: IAssets) {
  formData.type = data.type;
  formData.count = data.count;
  formData.mark = data.mark;
}
// ------------------------------------form------------------------------------ begin
import type { FormInstance, FormRules } from 'element-plus';
const ruleFormRef = ref<FormInstance>();
interface RuleForm {
  type: string;
  count: number;
}
const formData = reactive<IAssets>({
  type: '',
  count: 0,
  mark: '',
});
const rules = reactive<FormRules<RuleForm>>({
  type: [{ required: true, message: '请输入物品名', trigger: 'blur' }],
  count: [{ required: true, message: '请输入数量', trigger: 'blur' }],
});
function validateForm(callback: () => void) {
  ruleFormRef.value?.validate((valid, fields) => {
    if (valid) {
      callback();
    } else {
      console.log('error submit!', fields);
    }
  });
}
// ------------------------------------form------------------------------------ end
// ------------------------------------doalog------------------------------------ end
// ------------------------------------table------------------------------------ begin
let currentIndex = -1;
function editRow(index: number) {
  currentIndex = getTableIndex(index);
  setDialogData(tableData[index]);
  changeDialog();
}
function deleteRow(index: number) {
  tableData.splice(getTableIndex(index), 1);
  save();
}
function addition(index: number, count: number) {
  let item = getTableItem(index);
  if (!item) return;
  item.count += count;
  save();
}
// ------------------------------------table------------------------------------ end
// ------------------------------------缓存------------------------------------ begin
function save() {
  StorageUtil.set(CacheEnum.ASSETS_LIBRARY, tableData);
}
function read() {
  const data = StorageUtil.get(CacheEnum.ASSETS_LIBRARY, []);
  console.log(data);
  tableData.splice(0, tableData.length, ...data);
}
read();
// ------------------------------------缓存----------------------- end
</script>

<style scoped lang="less"></style>
