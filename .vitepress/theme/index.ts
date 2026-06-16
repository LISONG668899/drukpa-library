import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { withBase } from 'vitepress'
import BackToHome from './BackToHome.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
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
