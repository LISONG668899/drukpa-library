<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { withBase } from 'vitepress'

// 简/繁切换：只转换中文汉字，藏文(U+0F00-0FFF)不受影响。
// 转换库为同源静态文件 public/opencc/cn2t.js（不走外部 CDN），点按钮时才懒加载。
const STORE_KEY = 'zh-variant'                 // 's'=简体 | 't'=繁体
const SCRIPT_SRC = withBase('/opencc/cn2t.js')
const TARGET = 'tw'                            // 繁体标准：tw=台湾(裡/麵)；如需canonical标准改为 't'

const mode = ref('s')
let converter = null
let observer = null
let raf = 0
const orig = new WeakMap()                    // 文本节点 -> 原始简体内容
const HAN = /[\u4e00-\u9fff]/
const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA'])

function loadConverter() {
  if (converter) return Promise.resolve(converter)
  return new Promise((resolve, reject) => {
    const make = () => {
      try { converter = window.OpenCC.Converter({ from: 'cn', to: TARGET }); resolve(converter) }
      catch (e) { reject(e) }
    }
    if (window.OpenCC && window.OpenCC.Converter) return make()
    let s = document.querySelector('script[data-opencc]')
    if (!s) {
      s = document.createElement('script')
      s.src = SCRIPT_SRC
      s.setAttribute('data-opencc', '')
      document.head.appendChild(s)
    }
    s.addEventListener('load', make, { once: true })
    s.addEventListener('error', () => reject(new Error('opencc load failed')), { once: true })
  })
}

function root() { return document.getElementById('app') || document.body }

function eachTextNode(fn) {
  const w = document.createTreeWalker(root(), NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      const p = n.parentElement
      if (!p) return NodeFilter.FILTER_REJECT
      if (SKIP.has(p.tagName) || p.closest('.st-toggle')) return NodeFilter.FILTER_REJECT
      if (!HAN.test(n.data)) return NodeFilter.FILTER_SKIP
      return NodeFilter.FILTER_ACCEPT
    }
  })
  let n
  while ((n = w.nextNode())) fn(n)
}

function toTraditional() {
  if (!converter) return
  eachTextNode((n) => {
    if (!orig.has(n)) orig.set(n, n.data)
    const t = converter(orig.get(n))
    if (n.data !== t) n.data = t
  })
}

function toSimplified() {
  eachTextNode((n) => {
    if (orig.has(n)) { const s = orig.get(n); if (n.data !== s) n.data = s }
  })
}

function schedule() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => requestAnimationFrame(toTraditional))
}

function startObserver() {
  if (observer) return
  observer = new MutationObserver((muts) => {
    if (mode.value !== 't') return
    for (const m of muts) if (m.addedNodes && m.addedNodes.length) { schedule(); return }
  })
  observer.observe(root(), { childList: true, subtree: true })   // 只监听新增节点(翻页/动态内容),不监听文本改动,避免死循环
}

async function toggle() {
  mode.value = mode.value === 's' ? 't' : 's'
  try { localStorage.setItem(STORE_KEY, mode.value) } catch (e) {}
  if (mode.value === 't') { await loadConverter(); toTraditional() }
  else toSimplified()
}

onMounted(async () => {
  let saved = 's'
  try { saved = localStorage.getItem(STORE_KEY) || 's' } catch (e) {}
  mode.value = saved === 't' ? 't' : 's'
  startObserver()
  if (mode.value === 't') { await loadConverter(); toTraditional() }
})

onUnmounted(() => { if (observer) { observer.disconnect(); observer = null } })
</script>

<template>
  <button class="st-toggle" type="button" @click="toggle"
          :aria-label="mode === 's' ? '切换为繁体' : '切换为简体'"
          :title="mode === 's' ? '切换为繁体' : '切换为简体'">
    <span class="st-s" :class="{ active: mode === 's' }">简</span>
    <span class="st-sep">/</span>
    <span class="st-t" :class="{ active: mode === 't' }">繁</span>
  </button>
</template>
