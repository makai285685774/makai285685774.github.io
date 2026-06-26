/* ================================================================
   tts.js — 语音朗读
   优先：Puter.js TTS（AWS Polly 神经网络，已集成在 lib/puter.js 中）
   回退：Web Speech API（浏览器内置）
   ================================================================ */

const TTS = (() => {

  // ---- 引擎 1：Puter.js TTS（AWS Polly 神经网络） ----
  async function speakViaPuter(text) {
    if (typeof puter === 'undefined' || !puter.ai || !puter.ai.txt2speech) return null;

    const hasChinese = /[一-鿿]/.test(text);

    try {
      const audio = await puter.ai.txt2speech(text, {
        provider: 'aws-polly',
        language: hasChinese ? 'cmn-CN' : 'en-US',
        voice: hasChinese ? 'Zhiyu' : 'Joanna',
        engine: 'neural',
      });
      return audio;
    } catch (e) {
      console.warn('[TTS] Puter.js 引擎不可用 →', e.message);
      return null;
    }
  }

  // ---- 引擎 2：Web Speech API ----
  function speakViaWebSpeech(text, onEnd) {
    const hasChinese = /[一-鿿]/.test(text);
    const utt = new SpeechSynthesisUtterance(text.trim());
    utt.lang  = hasChinese ? 'zh-CN' : 'en-US';
    utt.rate  = 0.9;
    utt.pitch = 1;

    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      utt.voice = voices.find(v =>
        hasChinese ? v.lang.startsWith('zh') : v.lang.startsWith('en-US')
      ) || voices.find(v => v.lang.startsWith('en')) || voices[0];
    }

    if (onEnd) { utt.onend = onEnd; utt.onerror = onEnd; }
    speechSynthesis.speak(utt);
  }

  function cancelWebSpeech() {
    speechSynthesis.cancel();
  }

  // ---- 统一接口 ----
  let speaking      = false;
  let currentBtn   = null;
  let currentAudio = null;

  function resetBtn() {
    if (currentBtn) {
      currentBtn.classList.remove('playing');
      currentBtn.textContent = currentBtn.dataset.origText || '🔊 朗读';
      currentBtn = null;
    }
  }

  async function speak(text, options = {}) {
    const { btn, onStart, onEnd } = options;

    if (speaking) {
      if (currentAudio) { currentAudio.pause(); currentAudio = null; }
      try { cancelWebSpeech(); } catch (e) { /* noop */ }
      speaking = false;
      resetBtn();
      if (currentBtn === btn && btn) { currentBtn = null; return; }
    }

    if (!text || !text.trim()) return;

    if (btn) {
      btn.dataset.origText = btn.textContent;
      btn.classList.add('playing');
      btn.textContent = '⏹ 停止';
      currentBtn = btn;
    }

    speaking = true;
    if (onStart) onStart();

    const done = () => {
      speaking = false;
      currentAudio = null;
      resetBtn();
      if (onEnd) onEnd();
    };

    // 优先 Puter.js TTS
    const audio = await speakViaPuter(text);
    if (audio) {
      currentAudio = audio;
      console.log('[TTS] ✅ 使用引擎: Puter.js（AWS Polly 神经网络）');
      audio.onended = done;
      audio.onerror = () => {
        console.warn('[TTS] Puter 播放失败，回退 Web Speech');
        cancelWebSpeech();
        speakViaWebSpeech(text, done);
      };
      audio.play().catch(() => {
        cancelWebSpeech();
        speakViaWebSpeech(text, done);
      });
    } else {
      console.log('[TTS] ⚠️  回退引擎: Web Speech API（浏览器内置）');
      speakViaWebSpeech(text, done);
    }
  }

  function createButton(targetText, label = '🔊 朗读') {
    const btn = document.createElement('button');
    btn.className = 'voice-btn';
    btn.textContent = label;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speak(targetText, { btn });
    });
    return btn;
  }

  function attachTo(el, text, label = '🔊 朗读') {
    const btn = createButton(text, label);
    el.appendChild(btn);
    return btn;
  }

  return { speak, createButton, attachTo };
})();
