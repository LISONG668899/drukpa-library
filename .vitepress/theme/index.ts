import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { withBase } from 'vitepress'
import BackToHome from './BackToHome.vue'
import ChineseConvert from './ChineseConvert.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 简/繁切换按钮：顶部导航栏右侧（参考藏汉佛教精华）
      'nav-bar-content-after': () => h(ChineseConvert),
      'layout-bottom': () => [
        h(BackToHome),
        h('footer', { class: 'site-footer' }, [
          h('img', { class: 'site-footer-icon', src: withBase('/copy.png'), alt: '' }),
          h('div', { class: 'site-footer-text' }, '© 2026 竹巴噶举妙法宝箧')
        ])
      ]
    })
  }
}
