<script setup lang="ts">
import exportImgByCanvas from '../utils/exportImgByCanvas'
</script>

<template>
  <div class=" text-24px" @click="exportImgByCanvas">
    点击导出图片
  </div>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>
  <van-rate icon="like" void-icon="like-o" />
  {{ $t('home') }}
</template>

<style lang="scss"></style>
