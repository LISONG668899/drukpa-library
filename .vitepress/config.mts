import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',

  title: '竹巴噶举教法宝藏',
  description: '竹巴噶举法教资料整理',

  themeConfig: {
    siteTitle: '竹巴噶举教法宝藏',

    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '噶举教法简介', link: '/zhukagyu/' }
    ],

    sidebar: [
      {
        text: '内容导航',
        items: [
          { text: '噶举教法简介', link: '/zhukagyu/' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '',
      copyright: '© 2026 竹巴噶举教法宝藏'
    }
  }
})