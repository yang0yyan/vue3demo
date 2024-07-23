<template>
  <div class="relative overflow-hidden w-[800px] h-[800px] flex" id="myDiv">
    <img :src="mainImage" alt="" class="w-full m-auto" />
    <img class="image image1" :src="image1" alt="" />

    <div class="txt1">
      加<span class="qd">大</span>加<span class="qd">厚</span> 磁力更<span class="qd">强</span>
      倒置<span class="qd">不掉</span>
    </div>
    <div class="txt2">
      <span class="qd">六</span>大主题 <span class="qd">18</span>个场景
      <span class="qd">随心</span>搭配
    </div>
    <div class="rect"></div>
    <div class="txt3">一本即享极致体验</div>
  </div>
</template>
<script setup lang="ts">
import mainImage from '@/assets/images/安静书图片/实拍图/背景.png';
import image1 from '@/assets/images/安静书图片/实拍图/帕恰狗单件.png';
</script>
<style lang="less" scoped>
#myDiv {
  background-color: #ffe2c6;
}

.image {
  width: 500px;
  height: 500px;
}

.image1 {
  position: absolute;
  top: 150px;
  left: 150px;
}

.qd {
  color: #0077ff;
  font-weight: bold;
}

.txt1 {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100px;

  text-align: center;
  font-size: 60px;
  color: #ff0600;
  font-weight: bold;
  line-height: 90px;
}

.txt2 {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 100px;

  text-align: center;
  font-size: 60px;
  color: #ff0600;
  font-weight: bold;
  line-height: 90px;

  // text-shadow: 4px 0 #fffe54,
  //   -4px 0 #fffe54,
  //   0 4px #fffe54,
  //   0 -4px #fffe54,
  //   4px 4px #fffe54,
  //   -4px -4px #fffe54,
  //   4px -4px #fffe54,
  //   -4px 4px #fffe54;
}

.rect {
  position: absolute;
  top: calc(50% - 50px);
  left: 0;
  right: 0;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.671);
}

.txt3 {
  position: absolute;
  top: calc(50% - 50px);
  left: 0;
  right: 0;
  height: 100px;

  text-align: center;
  font-size: 60px;
  color: #ffffff;
  font-weight: bold;
  line-height: 90px;

  background: linear-gradient(to right, #fae061, #ec5d56);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
