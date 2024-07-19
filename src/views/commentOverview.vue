<template>
  <div class="colView pagerView">
    <div class="lg:mainRoundRectBg colView topView">
      <div class="filterView rowVCView">
        <div class="textTip">任务统计时间</div>
        <div class="btn">本月</div>
        <div class="btn">本年</div>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        />
      </div>
      <div class="tipTitleView" style="margin-left: 48px">总体概览</div>
      <div class="rowVCView heightFill cardView">
        <div class="colHCView cardItem">
          <div class="title">队伍数</div>
          <div class="subtitle">TEAMS</div>
          <div class="num">{{ orgCount.memberCount }}<span>队</span></div>
        </div>
        <div class="colHCView cardItem">
          <div class="title">队伍数</div>
          <div class="subtitle">MEMBERS</div>
          <div class="num">{{ orgCount.teamCount }}<span>队</span></div>
        </div>
        <div class="colHCView cardItem">
          <div class="title">队伍数</div>
          <div class="subtitle">TASKS</div>
          <div class="num">{{ taskCount.taskCount }}<span>队</span></div>
        </div>
        <div class="colHCView cardItem">
          <div class="title">队伍数</div>
          <div class="subtitle">SCORE</div>
          <div class="num">{{ taskCount.totalScore }}<span>队</span></div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="lg:mainRoundRectBg bottomView colView">
      <div class="rowView heightFill">
        <div class="colView widthFill lg:secondaryRoundRectBg p-6">
          <div class="tipTitleView">任务分布</div>
          <ChartBar class="heightFill"></ChartBar>
        </div>
        <div class="colView widthFill lg:secondaryRoundRectBg p-6" style="margin-left: 24px">
          <div class="tipTitleView">站点分布</div>
          <ChartPie class="heightFill"></ChartPie>
        </div>
      </div>
      <div class="colView heightFill lg:secondaryRoundRectBg p-6" style="margin-top: 24px">
        <div class="tipTitleView">最新动态</div>
        <div class="listView colView heightFill">
          <div class="itemView rowVCView" v-for="(item, index) in newTask" :key="index">
            <div class="widthFill weight1 ellipsis1">{{ item.creator }}</div>
            <div class="widthFill weight1 ellipsis1">发布了任务</div>
            <div class="widthFill weight3 ellipsis1">{{ item.title }}</div>
            <div class="widthFill weight2 ellipsis1">{{ item.content }}！</div>
            <div class="widthFill weight1 ellipsis1">{{ item.createTime }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LineData } from '@/bean/echarts/LineData';
import type { PieData } from '@/bean/echarts/PieData';
import type { HomeStatisticsBean } from '@/bean/overview/HomeStatisticsBean';
import type { NewTaskBean } from '@/bean/overview/NewTaskBean';
import type { OrgCountBean } from '@/bean/overview/OrgCountBean';
import type { TaskCountBean } from '@/bean/overview/TaskCountBean';
import { OverviewViewModel } from '@/viewModel/OverviewViewModel';
import type { OverviewView } from '@/viewModel/view/OverviewView';
import dayjs from 'dayjs';

const value1 = ref('');
let startTime = dayjs().subtract(1, 'month').format('YYYY-MM-DD 00:00:00');
let endTime = dayjs().format('YYYY-MM-DD 00:00:00');
let stauds = 0;

const orgCount = reactive<OrgCountBean>({
  teamCount: 0,
  memberCount: 0,
});
const taskCount = reactive<TaskCountBean>({
  taskCount: 0,
  totalScore: 0,
});
const newTask = reactive<Array<NewTaskBean>>([]);
const barGraphMap = reactive<LineData>({
  seriesData: [],
  xAxisData: [],
});
const taskScore = reactive<PieData>({
  seriesData: [],
});

const viewModel = new OverviewViewModel(
  new (class implements OverviewView {
    orgCountSuccess(o: OrgCountBean): void {
      orgCount.memberCount = o.memberCount;
      orgCount.teamCount = o.teamCount;
    }
    taskCountSuccess(o: TaskCountBean): void {
      taskCount.taskCount = o.taskCount;
      taskCount.totalScore = o.totalScore;
    }
    homeStatisticsSuccess(o: HomeStatisticsBean): void {
      let line = o.barGraphMap;
      let pie = o.taskScore;

      barGraphMap.seriesData = Object.values(line);
      barGraphMap.xAxisData = Object.keys(line);
      taskScore.seriesData = Object.values(pie);
    }
    newTaskSuccess(o: Array<NewTaskBean>): void {
      newTask.splice(0, newTask.length, ...o);
    }
  })(),
);

onMounted(() => {
  viewModel.orgCount();
  viewModel.taskCount(endTime, startTime, stauds);
  viewModel.homeStatistics(endTime, startTime, stauds);
  viewModel.newTask();
});
</script>

<style lang="less" scoped>
.pagerView {
  width: 100%;
  height: 100%;

  .line {
    background-color: #d2d2d2;
    height: 1px;
    width: 97%;
    align-self: center;
    margin: -0.5px 0;
    position: relative;
  }

  .topView {
    flex-grow: 270;
    height: 0;
    background-image: url('@/assets/images/commentOverview/topBg.png');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: auto 100%;

    .filterView {
      justify-content: flex-end;
      height: 20%;
      padding-right: 23px;

      :deep(.el-input__wrapper) {
        flex-grow: unset;
        width: 237px !important;
      }

      .btn {
        width: 80px;
        height: 32px;
        background: #ffffff;
        border-radius: 4px;
        border: 1px solid #d1d1d1;

        font-weight: 400;
        font-size: 16px;
        color: #212121;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0px 10px;
      }

      .btn + .btn {
        margin-left: 0px;
      }
    }

    .cardView {
      width: 70%;
      justify-content: space-between;

      .cardItem {
        width: 166px;
        padding-bottom: 20px;
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 80px 54px;
        position: relative;

        .title {
          font-weight: bold;
          font-size: 24px;
          color: #333333;
          font-style: italic;
          position: relative;
          z-index: 10;
        }

        .subtitle {
          position: absolute;
          top: 18px;
          z-index: 9;

          font-weight: bold;
          font-size: 20px;
          font-style: italic;
          opacity: 0.25;
        }

        .num {
          font-family: Arial;
          font-weight: 400;
          font-size: 32px;
          color: #333333;

          span {
            font-size: 16px;
          }
        }
      }

      .cardItem:nth-child(1) {
        background-image: url(@/assets/images/commentOverview/tag1.png);
        color: #275cff;
      }

      .cardItem:nth-child(2) {
        background-image: url(@/assets/images/commentOverview/tag2.png);
        color: #00cdbd;
      }

      .cardItem:nth-child(3) {
        background-image: url(@/assets/images/commentOverview/tag3.png);
        color: #a671ff;
      }

      .cardItem:nth-child(4) {
        background-image: url(@/assets/images/commentOverview/tag4.png);
        color: #ff9371;
      }
    }
  }

  .bottomView {
    flex-grow: 695;
    height: 0;
    padding: 24px;

    .secondaryRoundRectBg {
      padding: 24px 24px 16px 24px;
    }

    .listView {
      overflow-y: auto;
      margin-top: 20px;

      .itemView {
        height: 40px;
        padding: 0px 20px;
        flex-shrink: 0;
        font-size: 16px;

        &:nth-child(2n - 1) {
          background: #f0f0f0;
          border-radius: 4px;
        }

        &:nth-child(1) {
        }

        .ellipsis1 {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
