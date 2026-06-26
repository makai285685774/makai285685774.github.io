/* ================================================================
   app.js — 全局状态、工具函数、底部栏、摇动动画
   ================================================================ */

// 全局状态
let quizData    = [];
let userAnswers = [];
let submitted   = false;

// 默认结果栏按钮模板
const defaultActions = `
  <button class="btn-outline" onclick="handleRetry()">🔄 再做一遍</button>
  <button class="btn" onclick="handleGenerate()">✨ 换一批题</button>`;

// ---------- 底部栏控制 ----------
function showBottomBar() {
  const bar = document.getElementById('bottomBar');
  bar.classList.add('visible');
  document.body.classList.add('has-bottom-bar');
}

function hideBottomBar() {
  const bar = document.getElementById('bottomBar');
  bar.classList.remove('visible');
  document.body.classList.remove('has-bottom-bar');
}

// ---------- 工具函数 ----------
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Fisher-Yates 打乱
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- 摇动动画 ----------
(function () {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%,100% { transform: translateX(0); }
      20%     { transform: translateX(-6px); }
      40%     { transform: translateX(6px); }
      60%     { transform: translateX(-4px); }
      80%     { transform: translateX(4px); }
    }`;
  document.head.appendChild(style);
})();
