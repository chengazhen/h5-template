<script>
import { getLang, setLang } from '@/i18n/index.js'

export default {
  name: 'HomeView',
  setup() {
    const changeLang = () => {
      if (getLang() === 'en') {
        setLang('zh-cn')
        return
      }

      setLang('en')
    }
    return {
      changeLang,
    }
  },
}
</script>

<template>
  <div class="home w-100px">
    <div>
      <van-button type="primary">
        我是vant的按钮
      </van-button> <br>
      vant 组件可以直接使用， 不需要手动导入
    </div>
    <div>
      <van-button type="primary" @click="changeLang">
        点击切换语言
      </van-button> <br>
      我是中文的首页单词 {{ $t('home') }} <br>
      about 页面单词 {{ $t('about') }} <br>
    </div>
  </div>
</template>
