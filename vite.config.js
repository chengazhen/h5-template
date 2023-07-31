import { defineConfig } from 'vite'
import getPxToViewport from 'postcss-px-to-viewport'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import ComponentsPlugin from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

const pxToViewport = getPxToViewport({
  unitToConvert: 'px',
  viewportWidth: 750,
  viewportHeight: 812,
  unitPrecision: 6,
  viewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  exclude: /(node_modules)/, // 注意这里的正则表达式的写法稍有不同
})

export default defineConfig({
  plugins: [
    vue(),
    ComponentsPlugin({
      resolvers: [VantResolver()],
    }),
    UnoCSS()],
  transpileDependencies: true,
  resolve: {
    alias: {
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [pxToViewport],
    },
  },
})
