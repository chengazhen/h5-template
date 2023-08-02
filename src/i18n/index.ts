import { createI18n } from 'vue-i18n'

// 引入第三方最新的i18n注意版本
/**
 * @description: 加载当前配置的语言配置目录，随意添加
 */
export function loadLang() {
  const files: Record<string, { default: object }> = import.meta.glob('./lang/*.ts', { eager: true })
  const langs: Record<string, object> = {}
  const keys = Object.keys(files)
  for (const key of keys) {
    const name = key.replace('./lang/', '').replace('.ts', '')
    langs[name] = files[key]?.default
  }

  return langs
}

export const i18n = createI18n({
  locale: 'zh-cn', // 默认语言，当前这里的数据要跟配置的lang目录下面的文件名字前缀一致
  fallbackLocale: 'zh-cn',
  messages: loadLang() as any, // 记载当前引入的语言目录的处理过后的数据
})

/**
 * @description: 切换当前多语言
 */
export function setLang(locale: string): void {
  if (locale) {
    localStorage.setItem('lang', locale)
  }
  i18n.global.locale = locale || localStorage.getItem('lang') || ''
}

// 获取当前语言
export function getLang(): string {
  return i18n.global.locale
}
