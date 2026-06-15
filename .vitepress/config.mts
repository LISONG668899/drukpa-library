import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: '竹巴噶举教法宝藏',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '竹巴噶举简介', link: '/docs/zhukagyu/' }
    ]
  }
})
