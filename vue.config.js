const { defineConfig } = require('@vue/cli-service')

const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pages: {
    web: {
      // 入口文件
      entry: './src/pc.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'pc.html',
      title: 'PC',
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'web']
    },
    h5: {
      // 入口文件
      entry: './src/h5.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'h5.html',
      title: 'H5',
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'h5']
    }
  },
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})
