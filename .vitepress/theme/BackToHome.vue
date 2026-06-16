<script setup>
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'

const route = useRoute()
const home = withBase('/')
// 仅在非主页显示
const show = computed(() => {
  const p = decodeURIComponent(route.path)
  return p !== '/' && p !== '/index.html'
})
</script>

<template>
  <a v-if="show" class="back-to-home" :href="home" aria-label="返回主页" title="返回主页">
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M12 3.172 2.5 11.5l1.32 1.5L5 11.94V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-8.06l1.18 1.06 1.32-1.5L12 3.172z"/>
    </svg>
    <span class="back-to-home-text">主页</span>
  </a>
</template>
