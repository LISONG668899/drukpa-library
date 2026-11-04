import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { fileURLToPath, URL } from 'node:url'

const SITE_URL = 'https://DrukpaTrove.org'
const SITE_TITLE = '竹巴噶举妙法宝箧'
const SITE_DESCRIPTION = '竹巴噶举 · 藏汉译传法要'
const APP_NAME = 'Drukpa'
const OG_IMAGE = `${SITE_URL}/og-cover.png`

function getPageUrl(relativePath: string) {
  const pagePath = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '.html')
  return encodeURI(`${SITE_URL}/${pagePath}`)
}

function upsertMeta(
  head: any[],
  attrName: 'property' | 'name',
  attrValue: string,
  content: string
) {
  const existing = head.find((item) => {
    return item[0] === 'meta' && item[1]?.[attrName] === attrValue
  })
  if (existing) {
    existing[1].content = content
    return
  }
  head.push(['meta', { [attrName]: attrValue, content }])
}

export default withPwa(defineConfig({
  base: '/',
  lang: 'zh-CN',

  title: SITE_TITLE,
  description: SITE_DESCRIPTION,

  sitemap: {
    hostname: SITE_URL
  },
  lastUpdated: true,

  // 用定制的搜索框替换 VitePress 自带的：输入时不弹出结果，按回车才搜索
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPLocalSearchBox\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/DrukpaSearchBox.vue', import.meta.url)
          )
        }
      ]
    }
  },

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#b06a43' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: APP_NAME }]
  ],

  themeConfig: {
    siteTitle: SITE_TITLE,
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我们', link: '/关于我们/' },
      { text: '竹巴噶举', link: '/竹巴噶举简介/' }
    ],
    sidebar: [
      {
        text: '内容导航',
        items: [
          { text: '竹巴噶举', link: '/竹巴噶举简介/' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        // 默认展开每条结果的正文摘录，方便确认关键词出现在哪里
        detailedView: true,

        // 每次打开搜索框都是空的，不自动带出上次的关键词和结果
        disableQueryPersistence: true,

        // ===== 中文/藏文分词 =====
        // VitePress 默认只按空格和标点切词，中文整句连写会变成一个“词”，
        // 所以搜“大手印”往往搜不到。这里改为：汉字切成单字 + 两字组，
        // 藏文按音节点（ཙེག་）切成音节。
        // 注意：这两个函数会被原样送到浏览器执行，函数内部不能引用外部变量。
        miniSearch: {
          options: {
            // 建索引时用：汉字单字 + 相邻两字
            tokenize: (text) => {
              const tokens = []
              const parts = text.split(/[\n\r\s\p{Z}\p{P}]+/u)
              for (const part of parts) {
                if (!part) continue
                const segs = part.match(/[㐀-鿿豈-﫿]+|[^㐀-鿿豈-﫿]+/g) || []
                for (const seg of segs) {
                  if (/^[㐀-鿿豈-﫿]/.test(seg)) {
                    for (let i = 0; i < seg.length; i++) {
                      tokens.push(seg[i])
                      if (i + 1 < seg.length) tokens.push(seg.slice(i, i + 2))
                    }
                  } else {
                    tokens.push(seg)
                  }
                }
              }
              return tokens
            }
          },
          searchOptions: {
            // 搜索时用：只取相邻两字（单字查询则用单字），
            // 并要求全部命中，相当于按连续词组查找
            tokenize: (text) => {
              const tokens = []
              const parts = text.split(/[\n\r\s\p{Z}\p{P}]+/u)
              for (const part of parts) {
                if (!part) continue
                const segs = part.match(/[㐀-鿿豈-﫿]+|[^㐀-鿿豈-﫿]+/g) || []
                for (const seg of segs) {
                  if (/^[㐀-鿿豈-﫿]/.test(seg)) {
                    if (seg.length === 1) {
                      tokens.push(seg)
                    } else {
                      for (let i = 0; i + 1 < seg.length; i++) tokens.push(seg.slice(i, i + 2))
                    }
                  } else {
                    tokens.push(seg)
                  }
                }
              }
              return tokens
            },
            combineWith: 'AND',
            fuzzy: false,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        },

        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
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
    }
  },

  // ===== PWA（渐进式网页应用）=====
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon-32x32.png', 'favicon-16x16.png', 'apple-touch-icon.png'],
    manifest: {
      id: '/',
      name: APP_NAME,
      short_name: APP_NAME,
      description: SITE_DESCRIPTION,
      lang: 'zh-CN',
      theme_color: '#b06a43',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      prefer_related_applications: false,
      icons: [
        { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: '/pwa-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,woff2,woff,ttf,png,jpg,jpeg,svg,webp,ico}'],
      maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
      cleanupOutdatedCaches: true
    }
  }
}))
