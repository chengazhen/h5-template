// uno.config.ts
import { defineConfig } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetUno from 'unocss/preset-uno'

export default defineConfig({
  presets: [presetRemToPx(), presetUno()],
})
