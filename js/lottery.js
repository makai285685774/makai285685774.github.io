/* ================================================================
   lottery.js — 全对抽奖系统（转盘 + 彩带特效）
   ================================================================ */

const prizes = [
  { name: '🧧 8.88元',  desc: '现金红包',     fun: '🧨 大吉大利，今晚加鸡腿！', icon: '🧧', weight: 2  },
  { name: '📒 笔记本',  desc: '精美文具',     fun: '📝 记下每一个英语单词吧！', icon: '📒', weight: 8  },
  { name: '🧧 5.00元',  desc: '现金红包',     fun: '💰 小钱钱到手，开心！',     icon: '🧧', weight: 4  },
  { name: '✏️ 文具套装', desc: '写字必备',     fun: '✍️ 好文具写出好字！',       icon: '✏️', weight: 7  },
  { name: '🧧 2.00元',  desc: '现金红包',     fun: '🍬 可以买两颗糖啦～',       icon: '🧧', weight: 6  },
  { name: '🖍️ 荧光笔',  desc: '标记重点',     fun: '🌈 把重点画得五颜六色！',   icon: '🖍️', weight: 7  },
  { name: '🧧 1.00元',  desc: '现金红包',     fun: '🎈 一分也是爱！',           icon: '🧧', weight: 9  },
  { name: '🎀 贴纸包',  desc: '可爱收藏',     fun: '⭐ 集齐全套贴在课本上！',   icon: '🎀', weight: 10 },
  { name: '🧧 0.50元',  desc: '现金红包',     fun: '😊 小小红包，大大快乐！',   icon: '🧧', weight: 10 },
  { name: '📐 文具盒',  desc: '收纳好帮手',   fun: '🏆 让文具们有个家！',       icon: '📐', weight: 5  },
  { name: '🧧 6.66元',  desc: '现金红包',     fun: '㊗️ 六六大顺，好运连连！',  icon: '🧧', weight: 3  },
  { name: '✨ 橡皮擦',  desc: '修改错误',     fun: '🪄 擦掉错误，越擦越进步！', icon: '✨', weight: 9  },
];

// 加权随机
function weightedRandom(weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }
  return weights.length - 1;
}

// 绘制转盘
function drawWheel(rotationDeg) {
  const canvas = document.getElementById('wheelCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 160, cy = 160, r = 155;
  const n = prizes.length;
  const arc = (2 * Math.PI) / n;

  ctx.clearRect(0, 0, 320, 320);

  const colors = [
    '#fef3c7','#fce7f3','#e0f2fe','#f0fdf4','#fef9c3',
    '#f3e8ff','#fce4ec','#e8f5e9','#fff3e0','#e1f5fe',
    '#ffebee','#f1f8e9',
  ];

  prizes.forEach((p, i) => {
    const startAngle = i * arc + (rotationDeg * Math.PI / 180);
    const endAngle   = startAngle + arc;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(startAngle + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 13px "Segoe UI", system-ui, sans-serif';
    ctx.fillText(p.name, r - 14, 5);
    ctx.restore();
  });

  // center dot
  ctx.beginPath();
  ctx.arc(cx, cy, 18, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 2;
  ctx.stroke();
}

let currentRotation = 0;
let isSpinning = false;

function showLottery() {
  document.getElementById('lotteryOverlay').classList.add('show');
  document.getElementById('prizeResult').style.display = 'none';
  document.getElementById('spinBtn').style.display = '';
  drawWheel(currentRotation);
}

function closeLottery() {
  document.getElementById('lotteryOverlay').classList.remove('show');
}

async function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;
  const btn = document.getElementById('spinBtn');
  btn.disabled = true;
  btn.textContent = '🌀';

  const idx   = weightedRandom(prizes.map(p => p.weight));
  const prize = prizes[idx];

  const extraRounds = 5 + Math.floor(Math.random() * 4);
  const segArc      = 360 / prizes.length;
  const landAngle   = ((270 - idx * segArc - segArc / 2) % 360 + 360) % 360;
  const totalSpin   = extraRounds * 360 + landAngle - (currentRotation % 360);

  currentRotation += totalSpin;

  const canvas = document.getElementById('wheelCanvas');
  canvas.style.transition = 'none';
  canvas.style.transform = `rotate(${currentRotation - totalSpin}deg)`;
  canvas.offsetHeight;
  canvas.style.transition = 'transform 3.8s cubic-bezier(.17,.67,.1,.99)';
  canvas.style.transform = `rotate(${currentRotation}deg)`;

  await new Promise(r => setTimeout(r, 3900));

  document.getElementById('spinBtn').style.display = 'none';
  document.getElementById('prizeIcon').textContent = prize.icon;
  document.getElementById('prizeName').textContent = prize.name;
  document.getElementById('prizeDesc').textContent = prize.desc;
  document.getElementById('prizeFun').textContent  = prize.fun;
  document.getElementById('prizeResult').style.display = 'block';

  launchConfetti();

  isSpinning = false;
  btn.disabled = false;
  btn.textContent = '🎯 开始抽奖';
}

// 彩带特效
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.style.display = 'block';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#f59e0b','#ef4444','#ec4899','#8b5cf6','#22c55e','#3b82f6','#f97316','#14b8a6'];
  const particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * canvas.height,
      w: 6 + Math.random() * 10,
      h: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - .5) * 3,
      vy: 2 + Math.random() * 5,
      rot: Math.random() * 360,
      rotV: (Math.random() - .5) * 8,
      opacity: 1,
    });
  }

  let startTime = performance.now();

  function animate(ts) {
    const elapsed = ts - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotV;
      p.vy += 0.04;
      if (elapsed > 2500) p.opacity = Math.max(0, 1 - (elapsed - 2500) / 1000);

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (elapsed < 3500) requestAnimationFrame(animate);
    else canvas.style.display = 'none';
  }

  requestAnimationFrame(animate);
}

// 点击蒙层关闭（DOM 已就绪，直接绑定）
(function () {
  const overlay = document.getElementById('lotteryOverlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === this) closeLottery();
    });
  }
})();
