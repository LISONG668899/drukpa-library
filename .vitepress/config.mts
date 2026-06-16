import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',

  title: '竹巴噶举妙法宝箧',
  description: '竹巴噶举法教资料整理',

  themeConfig: {
    siteTitle: '竹巴噶举妙法宝箧',

    logo: '/logo.png',

    nav: [
      { text: '主页', link: '/' },
      { text: '关于我们', link: '/关于我们/' },
      { text: '竹巴噶举简介', link: '/竹巴噶举简介/' }
    ],

    sidebar: [
      {
        text: '内容导航',
        items: [
          { text: '竹巴噶举简介', link: '/竹巴噶举简介/' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '关闭搜索',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    footer: {
      message: '',
      copyright: '© 2026 竹巴噶举妙法宝箧'
    }
  }
})
