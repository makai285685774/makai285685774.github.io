/* ================================================================
   deep-explain.js — 深入讲解 + TTS 朗读解析
   ================================================================ */

async function showDeepExplain(idx) {
  const q   = quizData[idx];
  const btn = document.getElementById(`deepBtn-${idx}`);

  // 已加载 → toggle 显示
  const existing = document.getElementById(`deepPanel-${idx}`);
  if (existing) {
    existing.classList.toggle('show');
    if (existing.classList.contains('show')) {
      // 滚动到可见 + 追加朗读按钮（如果尚未添加）
      existing.scrollIntoView({ behavior: 'smooth' });
      if (!document.getElementById(`deepVoiceBtn-${idx}`)) {
        const rawText = existing.dataset.rawText || '';
        const voiceContainer = document.getElementById(`deepVoice-${idx}`);
        if (voiceContainer && rawText) {
          TTS.attachTo(voiceContainer, rawText, '🔊 朗读讲解');
        }
      }
    }
    return;
  }

  // 首次加载
  const card = document.getElementById(`q-${idx}`);
  const panel = document.createElement('div');
  panel.className = 'deep-explain-panel show';
  panel.id = `deepPanel-${idx}`;
  panel.innerHTML = '<div class="deep-loading"><div class="mini-spinner"></div>AI 老师正在备课…</div>';
  card.appendChild(panel);

  btn.disabled = true;
  btn.textContent = '⏳ 加载中…';

  try {
    const topic      = document.getElementById('topic').value;
    const difficulty = document.getElementById('difficulty').value;
    const qType      = q.type === 'choice' ? '选择题' : '填空题';
    const correctAns = q.answer || '';
    const optionsTxt = q.options ? q.options.join('；') : '';

    const prompt = `你是一位专业的小学英语老师。请针对下面这道${difficulty}英语${qType}做一次"深入讲解"，用孩子能听懂的语言把语法知识点讲透。

🟢 题目：${q.stem}
${qType === '选择题' ? `🟢 选项：${optionsTxt}` : ''}
🟢 正确答案：${correctAns}
🟢 所属语法主题：${topic}

请按以下结构回复（用纯文本，不要用markdown标记）：

【核心语法规则】
用2-3句话讲清楚这道题背后的语法规则。用"公式"的方式表达，比如：主语是第三人称单数 → 动词加 s/es。

【为什么选这个答案】
针对这道题，一步步推导出正确答案。如果是选择题，顺便说说其他选项为什么错。如果是填空题，说说怎么判断该填什么。

【常见错误提醒】
列举1-2个孩子最容易犯的同类错误，用"❌ 错误：……  ✅ 正确：……"的方式呈现。

【举一反三】
给出3个同类知识点的例句（换不同的人称和场景），每个例句后面附上翻译。

【记忆小口诀】
用一句押韵好记的话帮孩子记住这个规则（可以俏皮一点）。

要求：语言亲切、像在跟孩子聊天一样，不要写得太学术。每个部分用清晰的标题分隔。`;

    const response = await puter.ai.chat(prompt, {
      model: 'gemini-2.5-flash',
      timeout: 60000
    });

    let text = typeof response === 'string' ? response
      : response?.message?.content ? response.message.content
      : String(response);

    panel.innerHTML = formatDeepExplain(text);
    panel.dataset.rawText = text;   // 存原始文本供 TTS 朗读

    // 朗读按钮容器
    const voiceDiv = document.createElement('div');
    voiceDiv.id = `deepVoice-${idx}`;
    voiceDiv.style.cssText = 'margin-top:14px; text-align:right;';
    panel.appendChild(voiceDiv);
    TTS.attachTo(voiceDiv, text, '🔊 朗读讲解');

  } catch (err) {
    panel.innerHTML = `<p style="color:#ef4444;">😵 讲解加载失败：${err.message || '请重试'}</p>`;
  } finally {
    btn.disabled = false;
    btn.textContent = '📖 深入讲解';
    panel.scrollIntoView({ behavior: 'smooth' });
  }
}

function formatDeepExplain(text) {
  let html = escapeHtml(text);

  // 【标题】→ 加粗橙色标题
  html = html.replace(/【(.+?)】/g, '<h4>📌 $1</h4>');

  // ❌ 错误 / ✅ 正确 → 着色
  html = html.replace(/❌\s*错误[：:]/g, '<span class="wrong-mark">❌ 错误：</span>');
  html = html.replace(/✅\s*正确[：:]/g, '<span class="correct-mark">✅ 正确：</span>');

  // 换行保留
  html = html.replace(/\n/g, '<br>');

  return html;
}
