<template>
  <div class="flex flex-col flex-grow w-0 py-5 pr-5">
    <div class="lg:mainRoundRectBg p-4 pb-0">
      <el-form label-width="76px">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="选择中队" class="text-[#222222]">
              <el-select v-model="requestData.teamId" placeholder="请选择">
                <el-option
                  v-for="item in viewModel.teamListData"
                  :key="item.id"
                  :label="item.teamName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="选择小队">
              <el-select v-model="requestData.squadId" placeholder="请选择">
                <el-option
                  v-for="item in viewModel.squadListData"
                  :key="item.id"
                  :label="item.teamName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="选择星级">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="选择角色">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="状态">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否锁定">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="单位">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="人员姓名">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="手机号">
              <el-input v-model="value2" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="时间范围">
              <el-date-picker
                v-model="startTime"
                type="date"
                placeholder="Pick a day"
                class="flex-1"
                :disabled-date="disabledDateStart"
              />
              <div class="mx-4">-</div>
              <el-date-picker
                v-model="endTime"
                type="date"
                placeholder="Pick a day"
                class="flex-1"
                :disabled-date="disabledDateEnd"
              />
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <div class="flex">
              <el-button type="primary"> 搜索 </el-button>
              <el-button>重置</el-button>
              <div class="flex-1"></div>
              <el-button type="primary" plain @click="dialogVisible = !dialogVisible">
                <template #icon>
                  <i-ep-plus />
                </template>
                新建队员
              </el-button>
              <el-button type="primary">批量导入</el-button>
              <el-button type="primary">批量导出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="h-px bg-[#D2D2D2] mx-4"></div>
    <div class="lg:mainRoundRectBg flex-grow h-0 flex flex-col p-4">
      <el-table
        height="100%"
        class="w-full flex-grow h-0"
        :data="viewModel.userPageData"
        header-row-class-name="header-row-class"
        header-cell-class-name="header-cell-class"
        row-class-name="row-class"
        tooltip-effect=""
        cell-class-name="cell-class"
      >
        <el-table-column prop="date" label="序号" fixed />
        <el-table-column prop="name" label="单位" />
        <el-table-column prop="address" label="所属中队" />
        <el-table-column prop="address" label="所属小队" />
        <el-table-column prop="fullName" label="姓名" min-width="100px" />
        <el-table-column prop="address" label="角色" />
        <el-table-column prop="phone" label="手机号" min-width="100px" />
        <el-table-column prop="address" label="星级" />
        <el-table-column prop="address" label="积分" />
        <el-table-column prop="address" label="绑定情况" />
        <el-table-column prop="address" label="状态" />
        <el-table-column prop="address" label="是否锁定" />
        <el-table-column prop="lastActiveTime" label="最后登录时间" min-width="150px" />
        <el-table-column prop="address" label="操作" fixed="right" min-width="150px" align="center">
          <template #default>
            <div class="flex justify-center">
              <div class="cursor-pointer mx-1.5" style="color: #1b5bda">编辑</div>
              <div class="cursor-pointer mx-1.5" style="color: #1b5bda">删除</div>
              <div class="cursor-pointer mx-1.5" style="color: #1b5bda">锁定</div>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total,prev,pager,next,sizes"
        :total="viewModel.total.value"
        class="justify-end"
        :page-sizes="[20, 30, 40, 50, 100]"
        :page-size="20"
        @size-change="sizeChange"
        @current-change="currentChange"
      >
      </el-pagination>
    </div>
    <el-dialog v-model="dialogVisible" title="编辑队员" width="800" align-center>
      <el-form label-width="100" class="mt-5 mr-5" :model="formData">
        <el-row>
          <el-col :span="24">
            <el-form-item label="中队">
              <el-select></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="小队">
              <el-select></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="角色">
              <el-select></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="星级">
              <el-select></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单位">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="行业">
              <el-select></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="名族">
              <el-select></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出生日期">
              <el-select></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别">
              <el-radio-group class="ml-4">
                <el-radio value="1" size="large">Option 1</el-radio>
                <el-radio value="2" size="large">Option 2</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="备注">
              <el-input
                type="textarea"
                :autosize="false"
                :rows="4"
                :maxlength="500"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="用户头像">
              <el-select></el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { TeamManagementViewModel } from '@/viewModel/TeamManagementViewModel';
import type { UserPageBean } from '@/api/ApiTeamManagement';
const value = ref('');
const value2 = ref('');
const startTime = ref('');
const endTime = ref('');
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];

function disabledDateStart(data: Date) {
  return dayjs(endTime.value).isBefore(data);
}
function disabledDateEnd(data: Date) {
  return dayjs(startTime.value).isAfter(data);
}

function sizeChange(value: number) {
  requestData.pageSize = value;
  requestData.pageNum = 1;
}

function currentChange(value: number) {
  requestData.pageNum = value;
}

const requestData = reactive<UserPageBean>({
  pageNum: 1,
  pageSize: 20,
  teamId: undefined,
  squadId: undefined,
});
watch(requestData, (data) => {
  viewModel.userPage(data);
});
watch(
  () => requestData.teamId,
  (id) => {
    if (id) viewModel.squadList('', [id]);
  },
);
const viewModel = new TeamManagementViewModel();
viewModel.userPage(requestData);
viewModel.statistics({});
viewModel.teamList(null);
viewModel.squadList('', null);

// -----------------------------dialog------------------------
const dialogVisible = ref<boolean>(false);
const formData = reactive({});
</script>

<style scoped lang="less"></style>
