import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import getPxToViewport from 'postcss-px-to-viewport'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
      dts: 'typing/components.d.ts',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'typing/auto-imports.d.ts',
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': '/src',
      // 'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  css: {
    postcss: {
      plugins: [pxToViewport],
    },
  },
})
