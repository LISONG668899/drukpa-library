import { defineConfig } from 'vitepress'

const SITE_URL = 'https://DrukpaTrove.org'
const SITE_TITLE = '竹巴噶举妙法宝箧'
const SITE_DESCRIPTION = '竹巴噶举 · 藏汉译传法要'
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

export default defineConfig({
  base: '/',
  lang: 'zh-CN',

  title: SITE_TITLE,
  description: SITE_DESCRIPTION,

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  transformPageData(pageData) {
    const rawTitle = pageData.title || SITE_TITLE
    const pageTitle = rawTitle === SITE_TITLE ? SITE_TITLE : `${rawTitle} | ${SITE_TITLE}`
    const pageDescription = pageData.description || SITE_DESCRIPTION
    const pageUrl = getPageUrl(pageData.relativePath)

    const head = Array.isArray(pageData.frontmatter.head)
      ? pageData.frontmatter.head
      : []

    pageData.frontmatter.head = head

    upsertMeta(head, 'property', 'og:title', pageTitle)
    upsertMeta(head, 'property', 'og:description', pageDescription)
    upsertMeta(head, 'property', 'og:image', OG_IMAGE)
    upsertMeta(head, 'property', 'og:url', pageUrl)
    upsertMeta(head, 'name', 'twitter:title', pageTitle)
    upsertMeta(head, 'name', 'twitter:description', pageDescription)
    upsertMeta(head, 'name', 'twitter:image', OG_IMAGE)
  },

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
    }
  }
})
