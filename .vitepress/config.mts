import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '竹巴噶举教法宝藏',
  description: '竹巴噶举法教资料库',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '竹巴噶举简介', link: '/zhukagyu/' }
    ],

    sidebar: [
      {
        text: '内容导航',
        items: [
          { text: '竹巴噶举简介', link: '/zhukagyu/' }
        ]
      }
    ]
  }
})
