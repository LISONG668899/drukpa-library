---
layout: page
title: 祖师简介
---

<div class="patriarch-home">

<h1 class="ph-title">祖师简介</h1>
<p class="ph-sub">竹巴噶举传承上师简介</p>

<div class="ph-grid">
  <a class="ph-card" href="/祖师简介/帕摩竹巴/"><span class="ph-name">帕摩竹巴</span><span class="ph-desc">帕竹噶举开山祖师</span></a>
  <a class="ph-card" href="/祖师简介/岭钦日巴/"><span class="ph-name">岭钦日巴</span><span class="ph-desc">岭钦噶举创始人</span></a>
  <a class="ph-card" href="/祖师简介/藏巴甲热/"><span class="ph-name">藏巴甲热</span><span class="ph-desc">第一世嘉旺竹巴法王</span></a>
  <a class="ph-card" href="/祖师简介/白玛嘎波/"><span class="ph-name">白玛嘎波</span><span class="ph-desc">第四世嘉旺竹巴法王</span></a>
  <a class="ph-card" href="/祖师简介/郭仓巴/"><span class="ph-name">郭仓巴</span><span class="ph-desc">上竹巴噶举创始人</span></a>
  <a class="ph-card" href="/祖师简介/阿德仁波切/"><span class="ph-name">阿德仁波切</span><span class="ph-desc">当代竹巴传承持有者</span></a>
</div>

</div>

<style>
.patriarch-home {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 20px 64px;
}
.ph-title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  border: 0;
  margin: 0 0 6px;
  letter-spacing: 2px;
}
.ph-sub {
  text-align: center;
  font-size: 15px;
  color: var(--vp-c-text-2);
  margin: 0 0 36px;
}
.ph-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.ph-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 18px;
  text-align: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  text-decoration: none !important;
  transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease, color .2s ease;
}
.ph-card:hover {
  border-color: #b06a43;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, .08);
}
.ph-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.ph-card:hover .ph-name {
  color: #b06a43;
}
.ph-desc {
  margin-top: 8px;
  font-size: 13px;
  color: var(--vp-c-text-3);
  letter-spacing: .5px;
}
@media (max-width: 640px) {
  .patriarch-home { padding: 28px 16px 48px; }
  .ph-title { font-size: 25px; }
  .ph-sub { margin-bottom: 28px; }
  .ph-grid { gap: 12px; }
  .ph-card { padding: 22px 12px; border-radius: 14px; }
  .ph-name { font-size: 18px; }
  .ph-desc { font-size: 12px; }
}
</style>
