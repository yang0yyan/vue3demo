<template>
  <div class="relative overflow-hidden" id="myDiv">
    <img :src="mainImage" alt="" />
    <div class="absolute centerText">加厚 加大 不易掉</div>
    <div class="absolute centerText2">六种搭配 培养想象力</div>
    <div class="absolute bottomRect flex justify-center items-center">
      <div class="w-48"></div>
      <div class="gradient-text">18cm*18cm</div>
      <div class="w-4"></div>
      <div class="gradient-text">磁力强不易掉落</div>
    </div>
    <div class="absolute bottomRound pl-16 pt-6">
      <div class="gradient-text2 text-[45px]">强磁</div>
      <div class="gradient-text2 text-[45px]">更大本</div>
      <div class="gradient-text2 text-[36px] mt-4">新一代</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import mainImage from '@/assets/images/安静书图片/副图2.jpg';
</script>
<style lang="less" scoped>
.bottomRect {
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 93px;
  background-image: linear-gradient(to top, #eda2b0, #f4cad4);
}

.bottomRound {
  left: -40px;
  right: 0px;
  bottom: -40px;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  background-color: #fff;
  background-image: linear-gradient(to top, #73b3da44, #73b3da, #73b3da44);

  box-shadow: 0px 0px 10px 10px rgba(4, 24, 49, 0.1);
}

.gradient-text {
  font-size: 45px;
  font-weight: bold;
  background: linear-gradient(to bottom, #7ec5e3, #56b1dd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  -webkit-text-stroke: 1px white;
  /* 添加白色边框 */
  text-stroke: 1px white;
  /* 对于支持的浏览器 */
}

.gradient-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  color: white;
  -webkit-text-fill-color: white;
  /* For Safari */
  visibility: hidden;
  /* 隐藏辅助层 */
}

.gradient-text2 {
  line-height: 50px;
  font-weight: bold;
  background: linear-gradient(to right, #fae061, #ec5d56);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  -webkit-text-stroke: 1px #972557;
  /* 添加白色边框 */
  text-stroke: 1px white;
  /* 对于支持的浏览器 */
}

.gradient-text2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  color: white;
  -webkit-text-fill-color: white;
  /* For Safari */
  visibility: hidden;
  /* 隐藏辅助层 */
}

.centerText {
  top: 10px;
  left: 20px;

  font-size: 70px;
  color: #e5738c;
  font-weight: bold;

  // -webkit-text-stroke: 0px white;
  text-shadow:
    4px 0 #fffe54,
    -4px 0 #fffe54,
    0 4px #fffe54,
    0 -4px #fffe54,
    4px 4px #fffe54,
    -4px -4px #fffe54,
    4px -4px #fffe54,
    -4px 4px #fffe54;
}

.centerText2 {
  top: 180px;
  right: 20px;

  font-size: 70px;
  color: #ff2e7b;
  font-weight: bold;

  // -webkit-text-stroke: 0px white;
  text-shadow:
    4px 0 #2effb2,
    -4px 0 #2effb2,
    0 4px #2effb2,
    0 -4px #2effb2,
    4px 4px #2effb2,
    -4px -4px #2effb2,
    4px -4px #2effb2,
    -4px 4px #2effb2;
}
</style>
