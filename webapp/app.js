'use strict';

const DIFF_ZH = { Easy: '簡單', Medium: '中等', Hard: '困難' };
const STATUS_ZH = { todo: '⬜ 未解', wip: '🟡 進行中', done: '✅ 已解' };

const $ = (id) => document.getElementById(id);
const state = {
  problems: [],
  status: 'all',
  diff: 'all',
  tags: new Set(),
  q: '',
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

async function api(path, opts) {
  const res = await fetch(path, opts);
  const data = await res.json().catch(() => ({ error: '回應不是合法的 JSON' }));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

const allTagsOf = (m) => [...(m.userTags || []), ...(m.topicTags || [])];

/* ---------- 總覽 ---------- */

async function loadList() {
  const data = await api('/api/problems');
  state.problems = data.problems;
  renderStats();
  renderTagFilters();
  renderGrid();
}

function renderStats() {
  const n = state.problems.length;
  const done = state.problems.filter((p) => p.status === 'done').length;
  const wip = state.problems.filter((p) => p.status === 'wip').length;
  $('stats').textContent = `共 ${n} 題 · 已解 ${done} · 進行中 ${wip}`;
}

function renderTagFilters() {
  const counts = new Map();
  for (const p of state.problems) {
    for (const t of new Set(allTagsOf(p))) counts.set(t, (counts.get(t) || 0) + 1);
  }
  const sorted = [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-Hant'));
  const box = $('tagFilters');
  box.replaceChildren();
  for (const [tag, count] of sorted) {
    const b = document.createElement('button');
    b.className = 'chip';
    b.setAttribute('aria-pressed', state.tags.has(tag));
    b.innerHTML = `${escapeHtml(tag)}<span class="count">${count}</span>`;
    b.onclick = () => {
      state.tags.has(tag) ? state.tags.delete(tag) : state.tags.add(tag);
      renderTagFilters();
      renderGrid();
    };
    box.append(b);
  }
}

function matches(p) {
  if (state.status !== 'all' && (p.status || 'todo') !== state.status) return false;
  if (state.diff !== 'all' && p.difficulty !== state.diff) return false;
  // 多個標籤取交集
  for (const t of state.tags) if (!allTagsOf(p).includes(t)) return false;
  if (state.q) {
    const hay = [p.id, p.title, p.titleZh, p.slug, ...allTagsOf(p)].join(' ').toLowerCase();
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
    const card = document.createElement('button');
    card.className = 'card';
    const mine = (p.userTags || []).map((t) => `<span class="tag mine">${escapeHtml(t)}</span>`);
    const topic = (p.topicTags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`);
    card.innerHTML = `
      <div class="card-top">
        <span class="qid">${escapeHtml(p.id || '')}</span>
        <span class="badge d-${p.difficulty}">${DIFF_ZH[p.difficulty] || p.difficulty}</span>
        <span class="spacer"></span>
        <span class="status">${STATUS_ZH[p.status] || ''}</span>
      </div>
      <h2 class="card-title">${escapeHtml(p.titleZh || p.title)}</h2>
      <div class="tags">${[...mine, ...topic].join('')}</div>
      <div class="card-foot"><span>${escapeHtml(p.date || '')}</span></div>`;
    card.onclick = () => openProblem(p._dir);
    grid.append(card);
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
  $('notes').value = data.notesMd;
  $('officialTags').textContent = (m.topicTags || []).join('、') || '（無）';
  renderStatusEdit(m.status || 'todo');
  renderTagChips(m.userTags || []);
  renderSuggest();
  renderCode(data.solutions);
  $('saveHint').textContent = '';

  document.body.classList.add('viewing');
  $('back').hidden = false;
  selectTab('p-problem');
  location.hash = encodeURIComponent(dir);
  window.scrollTo(0, 0);
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
  for (const t of state.current?.meta.topicTags || []) if (!used.has(t)) pool.set(t, pool.get(t) || 0);

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
  if (!state.current) return;
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

for (const b of $('statusSeg').children) {
  b.onclick = () => {
    state.status = b.dataset.status;
    for (const x of $('statusSeg').children) x.setAttribute('aria-pressed', x === b);
    renderGrid();
  };
}
for (const b of $('diffSeg').children) {
  b.onclick = () => {
    state.diff = b.dataset.diff;
    for (const x of $('diffSeg').children) x.setAttribute('aria-pressed', x === b);
    renderGrid();
  };
}
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
  if (e.key === 'Escape' && state.current && !typing) closeProblem();
  if (e.key === '/' && !typing) { e.preventDefault(); $('search').focus(); }
});

window.onbeforeunload = (e) => { if (state.dirty) { e.preventDefault(); return ''; } };

/* ---------- 啟動 ---------- */

loadList()
  .then(() => {
    const dir = decodeURIComponent(location.hash.slice(1));
    if (dir) openProblem(dir).catch(() => { location.hash = ''; });
  })
  .catch((e) => {
    $('grid').innerHTML = `<p class="empty">載入失敗：${escapeHtml(e.message)}</p>`;
  });
