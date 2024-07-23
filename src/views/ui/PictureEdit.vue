<template>
  <div class="w-full h-full flex flex-wrap content-start overflow-auto p-4">
    <div class="preview">
      <PictureModel1 />
    </div>
    <div class="preview">
      <PictureModel2 />
    </div>
    <div class="preview">
      <PictureModel3 />
    </div>
    <div class="preview">
      <PictureModel11 />
    </div>
    <div class="preview">
      <PictureModel12 />
    </div>
    <div class="preview">
      <PictureModel13 />
    </div>
    <div class="preview">
      <PictureModel21 />
    </div>
    <div class="preview">
      <PictureModel22 />
    </div>
    <div class="preview">
      <PictureModel23 />
    </div>
    <!-- <div class="preview">
    <PictureModel31 />
  </div>
  <div class="preview">
    <PictureModel32 />
  </div>
  <div class="preview">
    <PictureModel41 />
  </div>
  <div class="preview">
    <PictureModel42 />
  </div>
  <div class="preview">
    <PictureModel43 />
  </div>
  <div class="preview">
    <PictureModel44 />
  </div>
  <div class="preview">
    <PictureModel51 />
  </div>
  <div class="preview">
    <PictureModel52 />
  </div>
  <div class="preview">
    <PictureModel53 />
  </div>
  <div class="preview">
    <PictureModel54 />
  </div>
  <div class="preview">
    <PictureModel55 />
  </div>
  <div class="preview">
    <PictureModel56 />
  </div>
  <div class="preview">
    <PictureModel61 />
  </div>
  <div class="preview">
    <PictureModel62 />
  </div>
  <div class="preview">
    <PictureModel63 />
  </div>
  <div class="preview">
    <PictureModel64 />
  </div>
  <div class="preview">
    <PictureModel65 />
  </div>
  <div class="preview">
    <PictureModel66 />
  </div> -->
  </div>
</template>
<script setup lang="ts">
import html2canvas from 'html2canvas';

function saveDivAsImage() {
  var div = document.getElementById('myDiv');
  if (!div) return;
  html2canvas(div).then(function (canvas) {
    // 创建一个临时的下载链接
    var link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'myDiv.png';

    // 触发下载链接
    link.click();
  });
}
</script>
<style lang="less" scoped>
:deep(img) {
  max-width: unset;
  height: unset;
}

.preview {
  position: relative;
  height: 240px;
  width: 240px;
  // background: #FF00FF;
  transition-duration: 0.3s;

  :deep(#myDiv) {
    transition-duration: 0.3s;
    position: absolute;
    top: -280px;
    left: -280px;
    transform: scale(0.3);
  }
}

:deep(#myDiv) {
  margin-top: 5px;
}

.preview:hover {
  height: 800px;
  width: 800px;

  :deep(#myDiv) {
    top: 0px;
    left: 0px;
    transform: scale(1);
  }
}
</style>
