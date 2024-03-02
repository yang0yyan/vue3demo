<template>
    <div class="colView pagerView">
        <div class="mainRoundRectBg colView topView">
            <div class="filterView rowVCView">
                <div class="textTip">任务统计时间</div>
                <div class="btn">本月</div>
                <div class="btn">本年</div>
                <el-date-picker v-model="value1" type="daterange" range-separator="-" start-placeholder="开始时间"
                    end-placeholder="结束时间" size="small" />
            </div>
            <div class="tipTitleView" style="margin-left: 48px;">总体概览</div>
            <div class="rowVCView heightFill cardView">
                <div class="colHCView cardItem">
                    <div class="title">队伍数</div>
                    <div class="subtitle">TEAMS</div>
                    <div class="num">28<span>队</span></div>
                </div>
                <div class="colHCView cardItem">
                    <div class="title">队伍数</div>
                    <div class="subtitle">MEMBERS</div>
                    <div class="num">28<span>队</span></div>
                </div>
                <div class="colHCView cardItem">
                    <div class="title">队伍数</div>
                    <div class="subtitle">TASKS</div>
                    <div class="num">28<span>队</span></div>
                </div>
                <div class="colHCView cardItem">
                    <div class="title">队伍数</div>
                    <div class="subtitle">SCORE</div>
                    <div class="num">28<span>队</span></div>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="mainRoundRectBg bottomView colView">
            <div class="rowView heightFill">
                <div class="colView widthFill secondaryRoundRectBg">
                    <div class="tipTitleView">任务分布</div>
                    <ChartLine class="heightFill"></ChartLine>
                </div>
                <div class="colView widthFill secondaryRoundRectBg" style="margin-left: 24px;">
                    <div class="tipTitleView">站点分布</div>
                    <ChartPie class="heightFill"></ChartPie>
                </div>
            </div>
            <div class="colView heightFill secondaryRoundRectBg" style="margin-top: 24px;">
                <div class="tipTitleView">最新动态</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const value1 = ref('')

</script>

<style lang="less" scoped>
.pagerView {
    width: 100%;
    height: 100%;
    padding: 20px;

    .line {
        background-color: #D2D2D2;
        height: 1px;
        width: 97%;
        align-self: center;
        margin: -0.5px 0;
        position: relative;
    }

    .topView {
        flex-grow: 270;
        height: 0;
        background-image: url("@/assets/images/commentOverview/topBg.png");
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
                background: #FFFFFF;
                border-radius: 4px;
                border: 1px solid #D1D1D1;

                font-weight: 400;
                font-size: 16px;
                color: #212121;

                display: flex;
                align-items: center;
                justify-content: center;

                margin: 0px 10px;
            }

            .btn+.btn {
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
                color: #275CFF;
            }

            .cardItem:nth-child(2) {
                background-image: url(@/assets/images/commentOverview/tag2.png);
                color: #00CDBD;
            }

            .cardItem:nth-child(3) {
                background-image: url(@/assets/images/commentOverview/tag3.png);
                color: #A671FF;
            }

            .cardItem:nth-child(4) {
                background-image: url(@/assets/images/commentOverview/tag4.png);
                color: #FF9371;
            }
        }
    }

    .bottomView {
        flex-grow: 695;
        height: 0;
        padding: 24px;

        .secondaryRoundRectBg {
            padding: 24px;
        }
    }
}
</style>