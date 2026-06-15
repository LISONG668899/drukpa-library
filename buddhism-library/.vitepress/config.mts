import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',

  title: '竹巴噶举教法宝藏',
  description: 'འབྲུག་པའི་ཆོས་མཛོད།',

  themeConfig: {
    logo: '/logo.jpg',

    siteTitle: '竹巴噶举教法宝藏',

    nav: [
      { text: '主页', link: '/' },
      { text: '竹巴噶举简介', link: '/zhukagyu/' },
      { text: '联络方式', link: '/contact/' }
    ],

    sidebar: [
      {
        text: '教法分类',
        items: [
          { text: '祖师简介', link: '/祖师简介/' },
          { text: '祖师教言', link: '/祖师教言/' },
          { text: '皈依发心', link: '/皈依发心/' },
          { text: '大手印引导', link: '/大手印引导/' },
          { text: '达波四法', link: '/达波四法/' },
          { text: '六类一味法', link: '/六类一味法/' },
          { text: '中阴与破瓦', link: '/中阴与破瓦/' },
          { text: '修法仪轨', link: '/修法仪轨/' },
          { text: '祈祷发愿文', link: '/祈祷发愿文/' },
          { text: '其他', link: '/其他/' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '',
      copyright: '© 2026 竹巴噶举教法宝藏'
    },

    socialLinks: []
  }
})