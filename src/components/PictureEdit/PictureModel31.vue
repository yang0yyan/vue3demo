<template>
  <div class="relative overflow-hidden w-[800px] h-[800px] flex" id="myDiv">
    <img :src="mainImage" alt="" class="w-full m-auto" />
    <div class="txt1">
      加<span class="qd">大</span>加<span class="qd">厚</span> 磁力更<span class="qd">强</span>
      倒置<span class="qd">不掉</span>
    </div>
    <div class="txt2">
      <span class="qd">六</span>大主题 <span class="qd">18</span>个场景
      <span class="qd">随心</span>搭配
    </div>
    <div class="rect"></div>
    <div class="txt3">18*18 免裁剪 安静书</div>
  </div>
</template>
<script setup lang="ts">
import mainImage from '@/assets/images/安静书图片/六种款式.png';
</script>
<style lang="less" scoped>
#myDiv {
  background-color: #ffe2c6;
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

// .bottomRect {
//   left: 0px;
//   right: 0px;
//   bottom: 0px;
//   height: 93px;
//   background-image: linear-gradient(to top, #eda2b0, #f4cad4);
// }

// .bottomRound {
//   left: -40px;
//   right: 0px;
//   bottom: -40px;
//   border-radius: 50%;
//   width: 250px;
//   height: 250px;
//   background-color: #FFF;
//   background-image: linear-gradient(to top, #73b3da44, #73b3da, #73b3da44);

//   box-shadow: 0px 0px 10px 10px rgba(4, 24, 49, 0.1);
// }

// .gradient-text {
//   font-size: 45px;
//   font-weight: bold;
//   background: linear-gradient(to bottom, #7ec5e3, #56b1dd);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   position: relative;
//   display: inline-block;
//   -webkit-text-stroke: 1px white;
//   /* 添加白色边框 */
//   text-stroke: 1px white;
//   /* 对于支持的浏览器 */
// }

// .gradient-text::before {
//   content: attr(data-text);
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: -1;
//   color: white;
//   -webkit-text-fill-color: white;
//   /* For Safari */
//   visibility: hidden;
//   /* 隐藏辅助层 */
// }

// .gradient-text2 {
//   line-height: 50px;
//   font-weight: bold;
//   background: linear-gradient(to right, #fae061, #ec5d56);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   position: relative;
//   display: inline-block;
//   -webkit-text-stroke: 1px #972557;
//   /* 添加白色边框 */
//   text-stroke: 1px white;
//   /* 对于支持的浏览器 */
// }

// .gradient-text2::before {
//   content: attr(data-text);
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: -1;
//   color: white;
//   -webkit-text-fill-color: white;
//   /* For Safari */
//   visibility: hidden;
//   /* 隐藏辅助层 */
// }

// .centerText {
//   top: 10px;
//   left: 20px;

//   font-size: 70px;
//   color: #e5738c;
//   font-weight: bold;

//   // -webkit-text-stroke: 0px white;
//   text-shadow: 4px 0 #fffe54,
//     -4px 0 #fffe54,
//     0 4px #fffe54,
//     0 -4px #fffe54,
//     4px 4px #fffe54,
//     -4px -4px #fffe54,
//     4px -4px #fffe54,
//     -4px 4px #fffe54;
// }

// .centerText2 {
//   top: 250px;
//   right: 20px;

//   font-size: 70px;
//   color: #FF2E7B;
//   font-weight: bold;

//   // -webkit-text-stroke: 0px white;
//   text-shadow: 4px 0 #2EFFB2,
//     -4px 0 #2EFFB2,
//     0 4px #2EFFB2,
//     0 -4px #2EFFB2,
//     4px 4px #2EFFB2,
//     -4px -4px #2EFFB2,
//     4px -4px #2EFFB2,
//     -4px 4px #2EFFB2;
// }
</style>
