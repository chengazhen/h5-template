# h5-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

目录

- [x] Vite
- [x] Vue3.0
- [x] Pinia
- [x] VueRouter
- [x] ViewPort 适配方案
- [x] i18n 国际化

### viewport 适配

```javascript
{
  unitToConvert: 'px',
  viewportWidth: 750,
  viewportHeight: 812,
  unitPrecision: 6,
  viewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  exclude: /(node_modules)/, // 注意这里的正则表达式的写法稍有不同
}
```

### 国际化

在 **i18n** 文件夹里面
