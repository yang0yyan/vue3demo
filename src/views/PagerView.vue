<template>
    <div class="pagerView">
        <div class="fliterView">

        </div>
        <div class="listView">
            <div class="itemView" v-for="item in listData">
                <div class="top"></div>
                <div class="bottom">
                    <div class="title">{{ item.title }}</div>
                    <div class="tip">文件大小：{{ item.size }}MB</div>
                    <div class="tip">更新时间：{{ item.time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { ApiService } from '@/api/mock/ApiService';
import type { MediaBean } from '@/bean/MediaBean';
import { DisposableObserver } from '@/utils/net/connection/DisposableObserver';
import { LoginViewModel } from '@/viewModel/LoginViewModel';
const viewModel = new LoginViewModel();

let listData = reactive<Array<MediaBean>>([])

viewModel.addDisposable(ApiService.webList(), new class extends DisposableObserver<Array<MediaBean>>{
    dataSuccess(o: Array<MediaBean>): void {
        console.log(o.length)
        listData.push(...o)
    }
    dataError(msg: String): void {
    }

})
</script>

<style lang="less">
.pagerView {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background: #FFFFFF;
    box-shadow: 0px 4px 20px 0px rgba(27, 91, 218, 0.08);
    border-radius: 8px;
    border: 1px solid #CFD7E6;
    margin-bottom: 8px;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .fliterView {
        height: 200px;
    }

    .listView {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        height: 0;
        overflow-y: scroll;
        margin-left: -16px;

        .itemView {
            width: calc(15.6%);
            height: 236px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #D2D2D2;

            display: flex;
            flex-direction: column;

            margin-left: 16px;
            margin-bottom: 16px;

            .top {
                height: 145px;
                background: #FFF2EF;
                border-radius: 8px 8px 0px 0px;
            }

            .bottom {
                flex-grow: 1;
                height: 0;
                padding-left: 15px;

                .title {
                    font-weight: bold;
                    font-size: 16px;
                    color: #333333;
                    line-height: 40px;
                }

                .tip {
                    font-weight: 400;
                    font-size: 13px;
                    color: #999999;
                }
            }
        }
    }
}
</style>