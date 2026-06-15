import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: '竹巴噶举教法宝藏',
  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '竹巴噶举简介', link: '/docs/zhukagyu/' },
      { text: '联络我们', link: '/contact/' }
    ]
  }
})
