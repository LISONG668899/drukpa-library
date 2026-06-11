import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '竹巴噶举法藏',
  description: '汇集古吉·钦哲译传之竹巴噶举法教资源',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '/about' },
      { text: '联络方式', link: '/contact' }
    ],

    sidebar: [
      {
        text: '传承祖师',
        items: [
          { text: '金刚总持', link: '/传承祖师/金刚总持/传记' },
          { text: '帝洛巴', link: '/传承祖师/帝洛巴/传记' },
          { text: '那洛巴', link: '/传承祖师/那洛巴/传记' },
          { text: '玛尔巴', link: '/传承祖师/玛尔巴/传记' },
          { text: '密勒日巴', link: '/传承祖师/密勒日巴/传记' },
          { text: '冈波巴', link: '/传承祖师/冈波巴/传记' },
          { text: '帕木竹巴', link: '/传承祖师/帕木竹巴/传记' },
          { text: '林热巴', link: '/传承祖师/林热巴/传记' },
          { text: '藏巴嘉热', link: '/传承祖师/藏巴嘉热/传记' }
        ]
      }
    ]
  }
})