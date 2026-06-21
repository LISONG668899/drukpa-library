---
layout: page
aside: false
---

<div class="cat-page">

<h1 class="cat-h1">皈依发心</h1>
<p class="cat-lead">竹巴噶举皈依、发心、受戒仪轨</p>

<div class="cat-grid">
  <a class="cat-card" href="/皈依发心/授三皈戒仪轨/">
    <span class="cat-title">授三皈戒仪轨</span>
    <span class="cat-sub">白玛嘎波尊者</span>
  </a>
  <a class="cat-card" href="/皈依发心/授皈依戒议轨/">
    <span class="cat-title">授皈依戒议轨</span>
    <span class="cat-sub">昂旺求巴嘉措</span>
  </a>
  <a class="cat-card" href="/皈依发心/受菩萨戒仪轨/">
    <span class="cat-title">受菩萨戒仪轨</span>
    <span class="cat-sub">白玛嘎波菩萨</span>
  </a>
  <a class="cat-card" href="/皈依发心/三皈依三殊胜/">
    <span class="cat-title">三皈依三殊胜</span>
    <span class="cat-sub">伊培南哇堪布</span>
  </a>
</div>

</div>

<style>
.cat-page { max-width: 760px; margin: 0 auto; padding: 48px 24px 56px; }
.cat-h1 { text-align: center; border: 0; font-size: 30px; margin: 0 0 8px; padding-top: 0; }
.cat-lead { text-align: center; font-size: 16px; color: var(--vp-c-text-2); letter-spacing: 2px; margin: 0 0 40px; }
.cat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.cat-card {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; gap: 8px;
  min-height: 104px; padding: 22px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color .2s ease, transform .2s ease, background .2s ease;
}
.cat-card:hover {
  border-color: #b06a43;
  background: var(--vp-c-bg);
  transform: translateY(-2px);
}
.cat-title { font-size: 20px; font-weight: 600; color: var(--vp-c-text-1); letter-spacing: 1px; }
.cat-sub { font-size: 14px; color: var(--vp-c-text-2); }
.cat-card:hover .cat-title { color: #b06a43; }
@media (max-width: 640px) {
  .cat-page { padding: 28px 18px 44px; }
  .cat-h1 { font-size: 25px; }
  .cat-grid { gap: 14px; }
  .cat-card { min-height: 92px; padding: 18px 12px; }
  .cat-title { font-size: 17px; }
  .cat-sub { font-size: 13px; }
}
</style>
