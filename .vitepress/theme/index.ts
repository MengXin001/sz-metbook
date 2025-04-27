// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './index.scss'
import HomeUnderline from './HomeUnderline.vue'
import Layout from './Layout.vue'
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) { 
    app.component('Home', HomeUnderline) 
  },
} satisfies Theme