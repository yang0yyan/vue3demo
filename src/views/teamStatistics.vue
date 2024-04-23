<template>
  <div class="teamStatistics flex flex-col">
    <div class="lg:mainRoundRectBg flex-1 flex flex-col p-5">
      <div class="tipTitleView">网评员统计</div>
      <div class="flex-1 flex">
        <div class="flex-1 content-center inline-grid grid-cols-3 gap-4">
          <div class="cardItem">
            <div class="title">总人数</div>
            <div class="subtitle">MEMBERS</div>
            <div class="num">169<span>人</span></div>
          </div>
          <div class="cardItem">
            <div class="title">小队长人数</div>
            <div class="subtitle">MEMBERS</div>
            <div class="num">169<span>人</span></div>
          </div>
          <div class="cardItem">
            <div class="title">网评人员数</div>
            <div class="subtitle">MEMBERS</div>
            <div class="num">169<span>人</span></div>
          </div>
          <div class="cardItem">
            <div class="title">队伍数</div>
            <div class="subtitle">MEMBERS</div>
            <div class="num">169<span>人</span></div>
          </div>
          <div class="cardItem">
            <div class="title">中队长人数</div>
            <div class="subtitle">MEMBERS</div>
            <div class="num">169<span>人</span></div>
          </div>
          <div class="cardItem">
            <div class="title">管理员人数</div>
            <div class="subtitle">MEMBERS</div>
            <div class="num">169<span>人</span></div>
          </div>
        </div>
        <div class="cardItem w-96 shrink-0 mr-96">
          <div class="title">总人数</div>
          <div class="subtitle">MEMBERS</div>
          <div class="num">169<span>人</span></div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="lg:mainRoundRectBg p-6 flex-1 flex flex-row">
      <div class="lg:secondaryRoundRectBg flex-1 mr-6 p-5">
        <div class="tipTitleView">队员星级</div>
      </div>
      <div class="lg:secondaryRoundRectBg flex-1 p-5 flex flex-col">
        <div class="tipTitleView">中队人员分布</div>
        <ChartLine class="flex-1"></ChartLine>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.teamStatistics {
  width: 100%;
  height: 100%;

  .line {
    background-color: #d2d2d2;
    height: 1px;
    margin: 0px 20px;
    margin-top: -1px;
  }

  .cardItem {
    padding-bottom: 20px;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 80px 54px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

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

    &:nth-child(6n + 2),
    &:nth-child(6n + 5) {
      background-image: url(@/assets/images/commentOverview/tag1.png);
      color: #275cff;
    }

    &:nth-child(6n + 1),
    &:nth-child(6n + 3) {
      background-image: url(@/assets/images/commentOverview/tag2.png);
      color: #00cdbd;
    }

    &:nth-child(6n + 4),
    &:nth-child(6n + 6) {
      background-image: url(@/assets/images/commentOverview/tag4.png);
      color: #ff9371;
    }
  }
}
</style>
