'use strict';

const DIFF_ZH = { Easy: '簡單', Medium: '中等', Hard: '困難' };
const STATUS_ZH = { todo: '⬜ 未解', wip: '🟡 進行中', done: '✅ 已解' };

// build-site 輸出的唯讀靜態站（GitHub Pages / 手機 PWA）會帶這個標記
const STATIC = document.documentElement.dataset.mode === 'static';

const $ = (id) => document.getElementById(id);
const state = {
  problems: [],
  status: 'all',
  diff: 'all',
  tag: '',           // 一次只篩一個標籤（仿 LeetCode App 的標籤頁）
  q: '',
  catalog: new Map(),  // 英文官方標籤 -> { group, zh }，來自 tags.json
  current: null,   // 目前檢視的題目 payload
  dirty: false,
};

/* ---------- 共用 ---------- */

function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('on'), 2200);
}

/** 靜態站沒有後端，改讀 build-site 預先產生的 JSON（相對路徑，Pages 子路徑也能用） */
function staticPath(path) {
  if (path === '/api/problems') return 'data/problems.json';
  const m = path.match(/^\/api\/problem\/(.+)$/);
  if (m) return `data/problem/${m[1]}.json`;
  throw new Error('唯讀模式不支援這個操作');
}

async function api(path, opts) {
  const res = await fetch(STATIC ? staticPath(path) : path, opts);
  const data = await res.json().catch(() => ({ error: '回應不是合法的 JSON' }));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

/* ---------- 標籤分類 ---------- */

const TAG_GROUPS = ['資料結構', '演算法', '其他', '我的標籤'];

function setCatalog(raw) {
  state.catalog = new Map();
  state.alias = new Map();  // 中文名 / 英文名（小寫）-> 官方英文名
  for (const [group, tags] of Object.entries(raw || {})) {
    for (const [en, zh] of Object.entries(tags)) {
      state.catalog.set(en, { group, zh });
      state.alias.set(zh, en);
      state.alias.set(en.toLowerCase(), en);
    }
  }
}

/** 官方標籤顯示 LeetCode 英文原名，依 tags.json 分類排序；沒收錄的歸「其他」 */
function officialTagsOf(m) {
  const en = m.topicTagsEn || [];
  const list = en.length
    ? en.map((t) => ({ group: '其他', ...state.catalog.get(t), name: t }))
    : (m.topicTags || []).map((t) => ({ group: '其他', name: t }));
  const seen = new Set();
  return list
    .filter((t) => !seen.has(t.name) && seen.add(t.name))
    .sort((a, b) => TAG_GROUPS.indexOf(a.group) - TAG_GROUPS.indexOf(b.group));
}

/** 自訂標籤若就是某個官方標籤（例如「線段樹」= Segment Tree），併入官方標籤，不重複列出 */
function tagsOf(m) {
  const out = officialTagsOf(m);
  const names = new Set(out.map((t) => t.name));
  for (const name of m.userTags || []) {
    const en = state.alias?.get(name) || state.alias?.get(name.toLowerCase());
    const t = en ? { ...state.catalog.get(en), name: en } : { group: '我的標籤', name };
    if (!names.has(t.name)) { names.add(t.name); out.push(t); }
  }
  return out.sort((a, b) => TAG_GROUPS.indexOf(a.group) - TAG_GROUPS.indexOf(b.group));
}

const allTagsOf = (m) => tagsOf(m).map((t) => t.name);
const STATUS_ICON = { done: '✓', wip: '◐', todo: '—' };

/* ---------- 總覽 ---------- */

async function loadList() {
  const data = await api('/api/problems');
  state.problems = data.problems;
  setCatalog(data.tagCatalog);
  renderStats();
  renderPills();
  renderGrid();
}

function renderStats() {
  const n = state.problems.length;
  const done = state.problems.filter((p) => p.status === 'done').length;
  const wip = state.problems.filter((p) => p.status === 'wip').length;
  $('stats').textContent = `共 ${n} 題 · 已解 ${done} · 進行中 ${wip}`;
  renderHero();
}

/** 標籤頁標題區（仿 LeetCode App）：大 icon、名稱、分類與題數 */
function renderHero() {
  const hero = $('tagHero');
  hero.hidden = !state.tag;
  if (!state.tag) return;
  const info = state.problems.flatMap(tagsOf).find((t) => t.name === state.tag)
    || { group: '我的標籤', name: state.tag };
  $('heroIcon').replaceChildren(tagIcon(info.name, info.group === '我的標籤'));
  $('heroName').textContent = info.name;
  const n = state.problems.filter((p) => allTagsOf(p).includes(state.tag)).length;
  $('heroSub').textContent = `${info.group}${info.zh ? ` · ${info.zh}` : ''} · ${n} 題`;
}

/* ---------- 篩選（仿 LeetCode App：一排 pill，點開從底部滑出面板） ---------- */

const STATUS_OPTS = [['todo', '未解'], ['wip', '進行中'], ['done', '已解']];
const DIFF_OPTS = [['Easy', '簡單'], ['Medium', '中等'], ['Hard', '困難']];
const SHEET_TITLE = { status: '狀態', diff: '難度', tags: '標籤' };

function renderPills() {
  for (const b of $('filters').querySelectorAll('.pill')) {
    const f = b.dataset.filter;
    let label = SHEET_TITLE[f];
    let on = false;
    if (f === 'status' && state.status !== 'all') {
      label = STATUS_OPTS.find((o) => o[0] === state.status)[1]; on = true;
    } else if (f === 'diff' && state.diff !== 'all') {
      label = DIFF_ZH[state.diff]; on = true;
    } else if (f === 'tags' && state.tag) {
      label = state.tag; on = true;
    }
    b.textContent = label;
    b.classList.toggle('on', on);
  }
  $('clearFilters').hidden = state.status === 'all' && state.diff === 'all' && !state.tag;
}

let sheetKind = null;

function openSheet(kind) {
  sheetKind = kind;
  $('sheetTitle').textContent = SHEET_TITLE[kind];
  renderSheet();
  $('sheetBackdrop').hidden = false;
  requestAnimationFrame(() => $('sheetBackdrop').classList.add('on'));
}

function closeSheet() {
  $('sheetBackdrop').classList.remove('on');
  setTimeout(() => { $('sheetBackdrop').hidden = true; }, 200);
  sheetKind = null;
}

function applyFilters() {
  renderPills();
  renderHero();
  renderGrid();
  if (sheetKind) renderSheet();
}

function renderSheet() {
  const body = $('sheetBody');
  body.replaceChildren();

  if (sheetKind === 'status' || sheetKind === 'diff') {
    const key = sheetKind;
    const opts = key === 'status' ? STATUS_OPTS : DIFF_OPTS;
    const list = document.createElement('div');
    list.className = 'opt-list';
    for (const [value, label] of [['all', '全部'], ...opts]) {
      const b = document.createElement('button');
      b.className = `opt${key === 'diff' && value !== 'all' ? ` t-${value}` : ''}`;
      b.setAttribute('aria-pressed', state[key] === value);
      b.innerHTML = `<span>${label}</span><span class="check">✓</span>`;
      b.onclick = () => { state[key] = value; applyFilters(); closeSheet(); };
      list.append(b);
    }
    body.append(list);
    return;
  }

  // 標籤：仿 LeetCode App 的 Knowledge 列表，依分類分組；點一下直接進該標籤頁
  const groups = new Map(TAG_GROUPS.map((g) => [g, new Map()]));
  for (const p of state.problems) {
    const seen = new Set();
    for (const t of tagsOf(p)) {
      if (seen.has(t.name)) continue;
      seen.add(t.name);
      const g = groups.get(t.group);
      g.set(t.name, (g.get(t.name) || 0) + 1);
    }
  }
  for (const [group, counts] of groups) {
    if (!counts.size) continue;
    const sec = document.createElement('section');
    sec.className = 'sheet-sec';
    sec.innerHTML = `<h3>${group}</h3>`;
    const sorted = [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-Hant'));
    for (const [tag, count] of sorted) {
      const b = document.createElement('button');
      b.className = 'tag-row';
      b.setAttribute('aria-pressed', state.tag === tag);
      b.append(tagIcon(tag, group === '我的標籤'));
      b.insertAdjacentHTML('beforeend', `
        <span class="tag-row-main">
          <span class="tag-row-name">${escapeHtml(tag)}</span>
          <span class="tag-row-sub">${count} 題</span>
        </span>
        <span class="check">✓</span>`);
      b.onclick = () => {
        state.tag = state.tag === tag ? '' : tag;
        closeSheet();
        applyFilters();
        window.scrollTo(0, 0);
      };
      sec.append(b);
    }
    body.append(sec);
  }
}

/* LeetCode 官方 API（questionTopicTags.imgUrl）提供的標籤圖示，直接引用不另存 */
const ICON_SLUG = { 'Graph Theory': 'graph' };

function tagIcon(name, mine) {
  const fallback = () => {
    const el = document.createElement('span');
    el.className = 'tag-icon fallback';
    el.textContent = '#';
    return el;
  };
  if (mine) return fallback();
  const img = document.createElement('img');
  img.className = 'tag-icon';
  img.alt = '';
  img.loading = 'lazy';
  const slug = ICON_SLUG[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  img.src = `https://assets.leetcode.com/favorite/problemset/${slug}.png`;
  img.onerror = () => img.replaceWith(fallback());
  return img;
}

function matches(p) {
  if (state.status !== 'all' && (p.status || 'todo') !== state.status) return false;
  if (state.diff !== 'all' && p.difficulty !== state.diff) return false;
  if (state.tag && !allTagsOf(p).includes(state.tag)) return false;
  if (state.q) {
    const hay = [p.id, p.title, p.titleZh, p.slug, ...allTagsOf(p),
      ...(p.topicTags || []), ...officialTagsOf(p).map((t) => t.zh || '')].join(' ').toLowerCase();
    if (!hay.includes(state.q)) return false;
  }
  return true;
}

function renderGrid() {
  const grid = $('grid');
  grid.replaceChildren();
  const list = state.problems.filter(matches);
  $('empty').hidden = list.length > 0;

  for (const p of list) {
    const row = document.createElement('button');
    row.className = 'qrow';
    const status = p.status || 'todo';
    const meta = [escapeHtml(p.date || ''),
      ...tagsOf(p).map((t) => t.group === '我的標籤'
        ? `<span class="mine">${escapeHtml(t.name)}</span>` : escapeHtml(t.name))];
    row.innerHTML = `
      <span class="qrow-side">
        <span class="qrow-diff t-${p.difficulty}">${DIFF_ZH[p.difficulty] || p.difficulty}</span>
        <span class="qrow-status s-${status}" title="${STATUS_ZH[status]}">${STATUS_ICON[status]}</span>
      </span>
      <span class="qrow-main">
        <span class="qrow-title">${escapeHtml(p.id || '')}. ${escapeHtml(p.titleZh || p.title)}</span>
        <span class="qrow-meta">${meta.join(' · ')}</span>
      </span>`;
    row.onclick = () => openProblem(p._dir);
    grid.append(row);
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

/* ---------- 單題檢視 ---------- */

async function openProblem(dir) {
  const data = await api(`/api/problem/${encodeURIComponent(dir)}`);
  state.current = data;
  state.dirty = false;
  const m = data.meta;

  $('dQid').textContent = m.id || '';
  $('dDiff').textContent = DIFF_ZH[m.difficulty] || m.difficulty;
  $('dDiff').className = `badge d-${m.difficulty}`;
  $('dDate').textContent = m.date || '';
  $('dTitle').textContent = m.titleZh || m.title;
  $('dTitleEn').textContent = m.titleZh && m.titleZh !== m.title ? m.title : '';
  $('dLink').href = m.url || '#';

  $('p-problem').innerHTML = data.problemHtml;
  $('interviewView').innerHTML = data.interviewHtml
    || '<p class="label">這一題還沒有面試官問答。在 Claude Code 執行 <code>/lc-interview</code> 產生。</p>';
  $('interview').value = data.interviewMd;
  $('interviewHint').textContent = '';
  $('notes').value = data.notesMd;
  $('officialTags').textContent = officialTagsOf(m).map((t) => t.name).join(', ') || '（無）';
  renderStatusEdit(m.status || 'todo');
  renderTagChips(m.userTags || []);
  renderSuggest();
  renderCode(data.solutions);
  $('saveHint').textContent = '';
  if (STATIC) renderNotesView(data);

  document.body.classList.add('viewing');
  $('back').hidden = false;
  selectTab('p-problem');
  location.hash = encodeURIComponent(dir);
  window.scrollTo(0, 0);
}

/** 唯讀模式的「筆記與標籤」：只顯示，不給編輯 */
function renderNotesView(data) {
  const m = data.meta;
  const mine = (m.userTags || []).map((t) => `<span class="tag mine">${escapeHtml(t)}</span>`);
  $('notesView').innerHTML = `
    <p><strong>狀態</strong>　${STATUS_ZH[m.status || 'todo']}</p>
    <p><strong>我的標籤</strong>　${mine.join(' ') || '<span class="label">（無）</span>'}</p>
    ${data.notesHtml || '<p class="label">還沒有筆記。</p>'}`;
}

function closeProblem() {
  if (state.dirty && !confirm('筆記或標籤還沒儲存，確定要離開嗎？')) return;
  state.current = null;
  state.dirty = false;
  document.body.classList.remove('viewing');
  $('back').hidden = true;
  location.hash = '';
  loadList();
}

function selectTab(id) {
  for (const t of document.querySelectorAll('.tab')) {
    t.setAttribute('aria-selected', t.dataset.panel === id);
  }
  for (const p of document.querySelectorAll('.panel')) {
    p.classList.toggle('on', p.id === id);
  }
}

function renderStatusEdit(status) {
  for (const b of $('statusEdit').children) {
    b.setAttribute('aria-pressed', b.dataset.status === status);
  }
}

function currentTags() {
  return [...$('tagBox').querySelectorAll('.tag-x')].map((el) => el.dataset.tag);
}

function renderTagChips(tags) {
  const box = $('tagBox');
  for (const el of [...box.querySelectorAll('.tag-x')]) el.remove();
  const input = $('tagInput');
  for (const t of tags) {
    const chip = document.createElement('span');
    chip.className = 'tag-x';
    chip.dataset.tag = t;
    chip.innerHTML = `${escapeHtml(t)}<button type="button" title="移除">×</button>`;
    chip.querySelector('button').onclick = () => {
      chip.remove();
      markDirty();
      renderSuggest();
    };
    box.insertBefore(chip, input);
  }
}

function addTag(raw) {
  const t = raw.trim();
  if (!t || currentTags().includes(t)) return;
  renderTagChips([...currentTags(), t]);
  markDirty();
  renderSuggest();
}

/** 用其他題目已經有的標籤當候選，避免同一概念打成好幾種寫法 */
function renderSuggest() {
  const used = new Set(currentTags());
  const pool = new Map();
  for (const p of state.problems) {
    for (const t of p.userTags || []) if (!used.has(t)) pool.set(t, (pool.get(t) || 0) + 1);
  }
  for (const { name: t } of officialTagsOf(state.current?.meta || {})) {
    if (!used.has(t)) pool.set(t, pool.get(t) || 0);
  }

  const box = $('suggest');
  box.replaceChildren();
  const top = [...pool].sort((a, b) => b[1] - a[1]).slice(0, 12);
  if (!top.length) return;
  const hint = document.createElement('span');
  hint.className = 'label';
  hint.textContent = '常用：';
  box.append(hint);
  for (const [t] of top) {
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = t;
    b.onclick = () => addTag(t);
    box.append(b);
  }
}

function renderCode(solutions) {
  const box = $('p-code');
  box.replaceChildren();
  if (!solutions.length) {
    box.innerHTML = '<p class="label">這一題還沒有解答檔。</p>';
    return;
  }
  for (const f of solutions) {
    const div = document.createElement('div');
    div.className = 'codefile';
    div.innerHTML = `<h3>${escapeHtml(f.name)}</h3><pre>${escapeHtml(f.code)}</pre>`;
    box.append(div);
  }
}

function markDirty() {
  state.dirty = true;
  $('saveHint').textContent = '有未儲存的變更';
}

async function save() {
  if (!state.current || STATIC) return;
  const dir = state.current.meta._dir;
  const status = [...$('statusEdit').children]
    .find((b) => b.getAttribute('aria-pressed') === 'true')?.dataset.status || 'todo';
  try {
    const data = await api(`/api/problem/${encodeURIComponent(dir)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userTags: currentTags(), status, notesMd: $('notes').value }),
    });
    state.current = data;
    state.dirty = false;
    $('saveHint').textContent = '';
    $('p-problem').innerHTML = data.problemHtml;
    toast('已儲存，總覽 README 也更新了');
    await loadList();
  } catch (e) {
    toast(`儲存失敗：${e.message}`);
  }
}

/* ---------- 事件 ---------- */

$('search').oninput = (e) => { state.q = e.target.value.trim().toLowerCase(); renderGrid(); };

for (const b of $('filters').querySelectorAll('.pill')) {
  b.onclick = () => openSheet(b.dataset.filter);
}
$('clearFilters').onclick = () => {
  state.status = 'all'; state.diff = 'all'; state.tag = '';
  applyFilters();
};
$('heroBack').onclick = () => { state.tag = ''; applyFilters(); };
$('sheetBackdrop').onclick = (e) => { if (e.target === e.currentTarget) closeSheet(); };
for (const b of $('statusEdit').children) {
  b.onclick = () => { renderStatusEdit(b.dataset.status); markDirty(); };
}
for (const t of document.querySelectorAll('.tab')) {
  t.onclick = () => selectTab(t.dataset.panel);
}

$('tagInput').onkeydown = (e) => {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    addTag(e.target.value);
    e.target.value = '';
  } else if (e.key === 'Backspace' && !e.target.value) {
    const chips = $('tagBox').querySelectorAll('.tag-x');
    if (chips.length) { chips[chips.length - 1].remove(); markDirty(); renderSuggest(); }
  }
};
$('notes').oninput = markDirty;
$('interview').oninput = () => { $('interviewHint').textContent = '有未儲存的變更'; };
$('saveInterview').onclick = async () => {
  if (!state.current) return;
  try {
    const data = await api(`/api/problem/${encodeURIComponent(state.current.meta._dir)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ interviewMd: $('interview').value }),
    });
    state.current = data;
    $('interviewView').innerHTML = data.interviewHtml;
    $('interviewHint').textContent = '';
    toast('面試官問答已儲存');
  } catch (e) {
    toast(`儲存失敗：${e.message}`);
  }
};
$('save').onclick = save;
$('revert').onclick = () => {
  if (state.current) { state.dirty = false; openProblem(state.current.meta._dir); }
};
$('back').onclick = closeProblem;
$('reveal').onclick = async () => {
  if (!state.current) return;
  try {
    await api(`/api/reveal/${encodeURIComponent(state.current.meta._dir)}`);
  } catch (e) { toast(`開啟失敗：${e.message}`); }
};

document.addEventListener('keydown', (e) => {
  const typing = /^(INPUT|TEXTAREA)$/.test(e.target.tagName);
  if ((e.metaKey || e.ctrlKey) && e.key === 's') { e.preventDefault(); save(); return; }
  if (e.key === 'Escape' && sheetKind) { closeSheet(); return; }
  if (e.key === 'Escape' && state.current && !typing) closeProblem();
  if (e.key === '/' && !typing) { e.preventDefault(); $('search').focus(); }
});

window.onbeforeunload = (e) => { if (state.dirty) { e.preventDefault(); return ''; } };

/* ---------- 啟動 ---------- */

if (STATIC && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
// 已經開著 PWA 時點推播，只會改 hash，不會重新載入
window.addEventListener('hashchange', () => {
  const dir = decodeURIComponent(location.hash.slice(1));
  if (dir && dir !== state.current?.meta._dir) openProblem(dir).catch(() => {});
});

loadList()
  .then(() => {
    const dir = decodeURIComponent(location.hash.slice(1));
    if (dir) openProblem(dir).catch(() => { location.hash = ''; });
  })
  .catch((e) => {
    $('grid').innerHTML = `<p class="empty">載入失敗：${escapeHtml(e.message)}</p>`;
  });
