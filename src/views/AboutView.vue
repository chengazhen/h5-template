
<script setup>
</script>

<template>
  <div class="about">
    <h1>我的字体大小单位转为了vw，适用与 h5</h1>
    <div>
      <h2>vw</h2>
      <p>vw是相对于视口的宽度而言的，视口被均分为100单位的vw，1vw等于视口宽度的1%</p>
      <p>1vw = 1% * width</p>
      <p>1vh = 1% * height</p>
      <p>1vmin = 1vw 或 1vh 中较小的那个</p>
      <p>1vmax = 1vw 或 1vh 中较大的那个</p>
    </div>
  </div>
</template>



<style>
.about {
  font-size: 20px;
}
</style>