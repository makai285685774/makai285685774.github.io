/* ================================================================
   quiz.js — 题目生成、渲染、提交、重做
   ================================================================ */

// ---------- 知识点池 ----------
const knowledgePool = {
  '一般现在时': [
    '第三人称单数动词加-s/-es', 'be动词 am/is/are 使用', '助动词 do/does 否定句',
    '助动词 do/does 疑问句', '频度副词 always/usually/sometimes/never',
    '主语为I/you/we/they时动词原形', 'have/has 区分',
    '一般现在时表习惯性动作', '一般现在时表客观真理',
  ],
  '现在进行时': [
    'am/is/are + V-ing 结构', '动词-ing 变化规则（去e加ing）', '动词-ing 变化规则（双写末尾辅音）',
    '现在进行时表此刻动作', '现在进行时否定句', '现在进行时疑问句',
    'look/listen/now 等提示词', '现在进行时表将来安排',
  ],
  '一般过去时': [
    '规则动词加-ed', '不规则动词过去式（go-went, see-saw, eat-ate 等）',
    'be动词过去式 was/were', '助动词 did 否定句', '助动词 did 疑问句',
    'yesterday/last/ago 等时间状语', '一般过去时讲故事/叙述',
  ],
  '名词单复数': [
    '规则复数加-s/-es', '以s/x/sh/ch结尾加-es', '辅音+y结尾变y为i加-es',
    '不规则复数 man-men, child-children, foot-feet', '不可数名词（water, milk, bread）',
    'some/any/a lot of/many/much 搭配', '单复数一致的谓语选择',
  ],
  '人称代词': [
    '主格 I/you/he/she/it/we/they', '宾格 me/you/him/her/it/us/them',
    '形容词性物主代词 my/your/his/her/its/our/their', '名词性物主代词 mine/yours/his/hers/ours/theirs',
    '反身代词 myself/yourself/himself/herself', '主格vs宾格选词填空',
  ],
  '介词搭配': [
    '时间介词 at/in/on', '地点介词 at/in/on', '方位介词 behind/in front of/next to/between',
    '方向介词 to/from/into/out of', '固定搭配 listen to/look at/wait for',
    '交通工具介词 by bus/on foot', 'in the morning/at night 区别',
  ],
  '形容词比较级': [
    '单音节 adj + er', '辅音+y 结尾变 i 加 er', '双写末尾辅音加 er',
    '多音节 more + adj', '不规则比较级 good-better, bad-worse', 'than 比较句结构',
    'as...as 同级比较', '最高级 -est/most', 'one of the + 最高级',
  ],
  '情态动词': [
    'can 表能力', "can't / cannot 否定", 'may 表允许/可能性',
    'must 表必须', "mustn't 表禁止", 'should 表建议',
    '情态动词 + 动词原形', 'would like to 句型',
  ],
  'There be 句型': [
    'There is + 单数/不可数', 'There are + 复数', 'There be 否定句',
    'There be 疑问句', 'There be 就近原则', 'There was/were 过去式',
    'some/any 在 There be 中的使用', 'How many ... are there?',
  ],
  '疑问句': [
    '一般疑问句 Yes/No 问答', 'What 提问事物', 'Where 提问地点',
    'When 提问时间', 'Who 提问人物', 'Why 提问原因',
    'How 提问方式', 'How many/How much 提问数量', 'Which 提问选择',
    'Whose 提问所属', 'How often 提问频率', '特殊疑问句语序 = 疑问词 + 一般疑问句',
  ],
};

// 随机素材
const scenes = ['学校', '家庭', '动物园', '公园', '超市', '操场', '图书馆', '医院', '餐厅', '农场',
                '海滩', '生日派对', '运动会', '厨房', '花园', '书店', '电影院', '公交车站', '宠物店', '郊游'];
const names  = ['Tom', 'Lucy', 'Amy', 'Jack', 'Lily', 'Mike', 'Emma', 'David', 'Sarah', 'Peter',
                '小明', '小红', '小华', '小丽', '小刚'];

// ---------- 生成题目 ----------
async function handleGenerate() {
  const quizType  = document.getElementById('quizType').value;
  let topic       = document.getElementById('topic').value;
  const difficulty = document.getElementById('difficulty').value;
  const count     = parseInt(document.getElementById('count').value) || 5;

  // UI 重置
  submitted = false;
  userAnswers = [];
  document.getElementById('quizArea').innerHTML = '';
  document.getElementById('submitArea').style.display = 'none';
  document.getElementById('resultBar').classList.remove('show');
  hideBottomBar();

  const loading = document.getElementById('loading');
  const btn     = document.getElementById('generateBtn');
  loading.classList.add('active');
  btn.disabled = true;

  try {
    // 综合 → 随机主题
    if (topic === '综合') {
      const allTopics = Object.keys(knowledgePool);
      topic = allTopics[Math.floor(Math.random() * allTopics.length)];
    }

    // localStorage 知识点历史
    const STORAGE_KEY = 'engquiz_knowledge_history';
    let history;
    try { history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { history = {}; }
    if (!history[topic]) history[topic] = [];

    const allPoints   = knowledgePool[topic] || ['基础用法'];
    const freshPoints = allPoints.filter(p => !history[topic].includes(p));

    let targetPoints;
    if (freshPoints.length === 0) {
      history[topic] = [];
      targetPoints = [...allPoints];
    } else {
      targetPoints = freshPoints;
    }

    const pickPoint   = (i) => targetPoints[i % targetPoints.length];
    const usedThisRound = [];

    // 题型
    let typeDesc = '';
    if (quizType === 'choice') {
      typeDesc = '全部为4选1选择题，每题提供A/B/C/D四个选项';
    } else if (quizType === 'fill') {
      typeDesc = '全部为填空题，题干中用一个下划线 ____ 表示空位';
    } else {
      typeDesc = '混合选择题和填空题';
    }

    // 随机种子
    const seed      = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    const pickNames = shuffle(names).slice(0, 5);

    // 题型逐题注入
    const typeLabel  = quizType === 'choice' ? '【选择题】' : quizType === 'fill' ? '【填空题】' : '【选择题或填空题随机】';
    const formatDemo = quizType === 'choice'
      ? `每道题 JSON 字段：{"type":"choice","stem":"题干","options":["A. xxx","B. xxx","C. xxx","D. xxx"],"answer":"B","explanation":"解析"}`
      : quizType === 'fill'
      ? `每道题 JSON 字段：{"type":"fill","stem":"题干（空位用 ___ 表示）","answer":"答案","explanation":"解析"}`
      : `选择题用 {"type":"choice",...}，填空题用 {"type":"fill",...}`;

    let perQuestionReqs = '';
    for (let i = 0; i < count; i++) {
      const pt     = pickPoint(i);
      usedThisRound.push(pt);
      const qScene = shuffle(scenes).slice(0, 1)[0];
      const qName  = pickNames[i % pickNames.length];
      perQuestionReqs += `第${i+1}题：${typeLabel}子知识点必须为「${pt}」，推荐场景「${qScene}」，推荐人物「${qName}」\n`;
    }

    // 更新历史
    usedThisRound.forEach(pt => {
      if (!history[topic].includes(pt)) history[topic].push(pt);
    });
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history)); } catch(e) {}

    const covered     = history[topic].filter(p => !usedThisRound.includes(p));
    const typeHardRule = quizType === 'choice'
      ? `\n🔒 硬性约束：本批所有题目必须全部是选择题，绝对禁止生成填空题。每道题的 type 字段必须为 "choice"。如果没有生成4个选项，该题就是不合格的。`
      : quizType === 'fill'
      ? `\n🔒 硬性约束：本批所有题目必须全部是填空题，绝对禁止生成选择题。每道题的 type 字段必须为 "fill"。题干的空位必须用三个下划线 ___ 表示。`
      : '';

    const prompt = `请生成${count}道${difficulty}小学英语练习题。

📘 本次语法主题：${topic}
📝 题型要求：${typeDesc}
⚠️ JSON 格式要求：${formatDemo}${typeHardRule}

⚠️ 每道题必须考察【不同的子知识点】，禁止重复考察同一个点！
每道题的具体要求如下：
${perQuestionReqs}
🚫 本次以下子知识点已经考过，禁止再出相关题目：${covered.join('、') || '无'}

通用要求：
- **每道题必须遵守上方指定的题型，type 字段不能写错**
- 每道题的主语、动词、场景必须互不相同
- 每道题包含：题号、题干、正确答案、中文解析（用孩子能理解的语言解释）
- 选择题每道题必须包含 4 个选项数组
- 解析要具体说明语法规则，不要泛泛而谈
- 批次标识：${seed}

只返回JSON数组，不要加\`\`\`json标记。`;

    const response = await puter.ai.chat(prompt, {
      model: 'gemini-2.5-flash',
      timeout: 60000
    });

    let text = typeof response === 'string' ? response
      : response?.message?.content ? response.message.content
      : String(response);

    text = text.trim()
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '');

    const start = text.indexOf('[');
    const end   = text.lastIndexOf(']');
    if (start !== -1 && end !== -1 && end > start) {
      text = text.slice(start, end + 1);
    }

    quizData = JSON.parse(text);

    if (!Array.isArray(quizData) || quizData.length === 0) {
      throw new Error('AI 返回的题目格式不正确，请重试');
    }

    renderQuiz(quizData);
    document.getElementById('submitArea').style.display = 'block';
    showBottomBar();

  } catch (err) {
    console.error('生成失败:', err);
    document.getElementById('quizArea').innerHTML = `
      <div class="quiz-card" style="border-left-color: var(--danger); text-align:center; padding:40px;">
        <p style="font-size:1.3rem; margin-bottom:8px;">😵 生成失败了</p>
        <p style="color:var(--muted);">${err.message || '请检查网络后重试'}</p>
      </div>`;
  } finally {
    loading.classList.remove('active');
    btn.disabled = false;
  }
}

// ---------- 渲染题目 ----------
function renderQuiz(data) {
  const area = document.getElementById('quizArea');
  userAnswers = new Array(data.length).fill(null);
  area.innerHTML = '';

  data.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.id = `q-${idx}`;

    const typeLabel = q.type === 'choice' ? '选择题' : '填空题';

    let bodyHTML = '';
    if (q.type === 'choice') {
      const letters = ['A', 'B', 'C', 'D'];
      const optsHTML = (q.options || []).map((opt, oi) => {
        const letter = letters[oi] || String.fromCharCode(65 + oi);
        return `
          <div class="opt" data-q="${idx}" data-opt="${letter}" onclick="selectChoice(${idx}, '${letter}', this)">
            <span class="opt-letter">${letter}</span>
            <span>${opt.replace(/^[A-D][.、]\s*/, '')}</span>
          </div>`;
      }).join('');
      bodyHTML = `<div class="options">${optsHTML}</div>`;
    } else {
      bodyHTML = `
        <input class="fill-input" id="fill-${idx}" type="text"
               placeholder="请输入答案…"
               oninput="recordFill(${idx}, this.value)">`;
    }

    card.innerHTML = `
      <div class="q-header">
        <span class="q-num">第 ${idx + 1} 题</span>
        <span class="q-type">${typeLabel}</span>
      </div>
      <div class="q-stem">${escapeHtml(q.stem)}</div>
      ${bodyHTML}
      <div class="explanation" id="exp-${idx}">
        💡 <strong>解析：</strong>${escapeHtml(q.explanation || '')}
        <br><button class="deep-explain-btn" id="deepBtn-${idx}" onclick="showDeepExplain(${idx})">📖 深入讲解</button>
      </div>`;

    area.appendChild(card);
  });

  document.getElementById('quizArea').scrollIntoView({ behavior: 'smooth' });
}

// ---------- 用户交互 ----------
function selectChoice(qIdx, letter, el) {
  if (submitted) return;
  const card = document.getElementById(`q-${qIdx}`);
  card.querySelectorAll('.opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  userAnswers[qIdx] = letter;
}

function recordFill(qIdx, value) {
  if (submitted) return;
  userAnswers[qIdx] = value.trim();
}

// ---------- 提交答案 ----------
function handleSubmit() {
  const unanswered = userAnswers.findIndex(a => !a || a === '');
  if (unanswered !== -1) {
    const card = document.getElementById(`q-${unanswered}`);
    card.scrollIntoView({ behavior: 'smooth' });
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'shake .4s ease';
    return;
  }

  submitted = true;
  let correctCount = 0;

  quizData.forEach((q, idx) => {
    const card       = document.getElementById(`q-${idx}`);
    const expDiv     = document.getElementById(`exp-${idx}`);
    const userAns    = (userAnswers[idx] || '').trim();
    const correctAns = (q.answer || '').trim();
    const isCorrect  = userAns.toLowerCase() === correctAns.toLowerCase();

    if (isCorrect) {
      correctCount++;
      card.classList.add('correct');
      expDiv.classList.add('show');
    } else {
      card.classList.add('wrong');
      expDiv.classList.add('show', 'wrong-exp');
      expDiv.innerHTML = `💡 <strong>正确答案：${escapeHtml(correctAns)}</strong><br>📖 解析：${escapeHtml(q.explanation || '暂未提供')}<br><button class="deep-explain-btn" id="deepBtn-${idx}" onclick="showDeepExplain(${idx})">📖 深入讲解</button>`;
    }

    if (q.type === 'choice') {
      card.querySelectorAll('.opt').forEach(opt => {
        const letter = opt.dataset.opt;
        if (letter === correctAns) opt.classList.add('correct-answer');
        if (letter === userAns && !isCorrect) opt.classList.add('wrong-answer');
      });
    } else {
      const input = document.getElementById(`fill-${idx}`);
      if (input) {
        input.disabled = true;
        input.classList.add(isCorrect ? 'correct-input' : 'wrong-input');
        if (!isCorrect) {
          input.value = userAns;
          const hint = document.createElement('span');
          hint.style.cssText = 'color:#22c55e;font-weight:600;margin-left:8px;font-size:.9rem;';
          hint.textContent = `✓ 正确答案：${correctAns}`;
          input.parentNode.appendChild(hint);
        }
      }
    }

    card.querySelectorAll('.opt').forEach(o => o.style.pointerEvents = 'none');
  });

  // 显示结果
  const bar = document.getElementById('resultBar');
  bar.classList.add('show');
  document.getElementById('scoreText').textContent = `${correctCount} / ${quizData.length}`;

  const ratio     = correctCount / quizData.length;
  const actionsDiv = bar.querySelector('.actions');
  let msg = '';

  if (ratio === 1) {
    msg = '🏆 太棒了！全部正确！你是英语小天才！';
    actionsDiv.innerHTML = `
      <button class="btn-lottery-big" onclick="showLottery()">🎁 抽奖！</button>
      <button class="btn-outline" onclick="handleRetry()">🔄 再做一遍</button>
      <button class="btn" onclick="handleGenerate()">✨ 换一批题</button>`;
  } else {
    if (ratio >= .8)      msg = '👏 非常优秀！继续加油！';
    else if (ratio >= .6) msg = '📖 还不错，看看解析再巩固一下哦～';
    else if (ratio >= .4) msg = '💪 还需要多练习，别灰心！';
    else                  msg = '🌱 没关系，学习就是一步一步来的，看看解析吧！';
    actionsDiv.innerHTML = defaultActions;
  }
  document.getElementById('msgText').textContent = msg;

  bar.scrollIntoView({ behavior: 'smooth' });
  hideBottomBar();
}

// ---------- 重做 ----------
function handleRetry() {
  submitted = false;
  userAnswers = new Array(quizData.length).fill(null);

  quizData.forEach((q, idx) => {
    const card = document.getElementById(`q-${idx}`);
    card.classList.remove('correct', 'wrong');
    const expDiv = document.getElementById(`exp-${idx}`);
    expDiv.classList.remove('show', 'wrong-exp');
    expDiv.innerHTML = `💡 <strong>解析：</strong>${escapeHtml(q.explanation || '')}<br><button class="deep-explain-btn" id="deepBtn-${idx}" onclick="showDeepExplain(${idx})">📖 深入讲解</button>`;

    const deepPanel = document.getElementById(`deepPanel-${idx}`);
    if (deepPanel) deepPanel.remove();

    card.querySelectorAll('.opt').forEach(o => {
      o.classList.remove('selected', 'correct-answer', 'wrong-answer');
      o.style.pointerEvents = 'auto';
    });

    const input = document.getElementById(`fill-${idx}`);
    if (input) {
      input.value = '';
      input.disabled = false;
      input.classList.remove('correct-input', 'wrong-input');
      const next = input.nextElementSibling;
      if (next && next.tagName === 'SPAN') next.remove();
    }
  });

  document.getElementById('resultBar').classList.remove('show');
  document.getElementById('quizArea').scrollIntoView({ behavior: 'smooth' });
  showBottomBar();
}
