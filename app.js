'use strict';

// ── State ──────────────────────────────────────────────────────────────────
const STATE = {
  lang: null,
  screen: 'home',       // home | lessons | vocab | quiz | result
  lesson: null,
  quizIdx: 0,
  quizScore: 0,
  selected: null,
  answered: false,
  hintCache: {}
};

const STORAGE_KEY = 'minilingo_v1';

let progress = loadProgress();

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultProgress();
  } catch { return defaultProgress(); }
}

function defaultProgress() {
  return { xp: 0, level: 1, streak: 0, lastDate: null, completed: {}, vocab: {} };
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// ── XP / Level ─────────────────────────────────────────────────────────────
function xpForLevel(lvl) { return lvl * lvl * 20; }
function currentLevel() {
  let lvl = 1;
  while (progress.xp >= xpForLevel(lvl + 1)) lvl++;
  return lvl;
}
function xpPercent() {
  const lvl = currentLevel();
  const base = xpForLevel(lvl);
  const next = xpForLevel(lvl + 1);
  return Math.round(((progress.xp - base) / (next - base)) * 100);
}

// ── Streak ─────────────────────────────────────────────────────────────────
function updateStreak() {
  const today = new Date().toDateString();
  if (progress.lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  progress.streak = progress.lastDate === yesterday ? progress.streak + 1 : 1;
  progress.lastDate = today;
  saveProgress();
}

// ── Groq API hint (minimal calls, cached) ──────────────────────────────────
const GROQ_KEY = (window.__env && window.__env.GROQ_API_KEY) || '';

async function getHint(word, lang) {
  const cacheKey = `${lang}_${word}`;
  if (STATE.hintCache[cacheKey]) return STATE.hintCache[cacheKey];
  if (!GROQ_KEY) return `Try to remember the context where you saw "${word}"!`;
  try {
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_KEY}` },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        max_tokens: 60,
        messages: [{ role: 'user', content: `Give a one-sentence memory tip to remember the ${lang} word "${word}" in English. Be short and fun.` }]
      })
    });
    const d = await r.json();
    const hint = d.choices?.[0]?.message?.content?.trim() || 'Keep practicing!';
    STATE.hintCache[cacheKey] = hint;
    return hint;
  } catch { return 'Keep practicing — repetition is key!'; }
}

// ── Routing / Rendering ────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const app = () => $('app');

function render() {
  switch (STATE.screen) {
    case 'home':    renderHome(); break;
    case 'lessons': renderLessons(); break;
    case 'vocab':   renderVocab(); break;
    case 'quiz':    renderQuiz(); break;
    case 'result':  renderResult(); break;
  }
}

// ── HOME ───────────────────────────────────────────────────────────────────
function renderHome() {
  updateStreak();
  const lvl = currentLevel();
  const pct = xpPercent();
  app().innerHTML = `
    <header class="header">
      <div class="logo">🦜 MiniLingo</div>
      <div class="stats-bar">
        <span class="stat">🔥 ${progress.streak}</span>
        <span class="stat">⭐ ${progress.xp} XP</span>
        <span class="stat">Lv.${lvl}</span>
      </div>
    </header>

    <div class="xp-bar-wrap">
      <div class="xp-bar-label">Level ${lvl} → ${lvl + 1}</div>
      <div class="xp-bar"><div class="xp-fill" style="width:${pct}%"></div></div>
    </div>

    <h2 class="section-title">Choose a Language</h2>
    <div class="lang-grid">
      ${Object.entries(LESSONS_DATA).map(([code, lang]) => `
        <button class="lang-card" onclick="selectLang('${code}')">
          <span class="lang-flag">${lang.flag}</span>
          <span class="lang-name">${lang.name}</span>
        </button>
      `).join('')}
    </div>

    <div class="daily-tip">
      <span>💡</span>
      <span>Tip: Practice every day to keep your streak alive!</span>
    </div>
  `;
}

window.selectLang = function(code) {
  STATE.lang = code;
  STATE.screen = 'lessons';
  render();
};

// ── LESSONS ────────────────────────────────────────────────────────────────
function renderLessons() {
  const lang = LESSONS_DATA[STATE.lang];
  const lvl = currentLevel();
  app().innerHTML = `
    <header class="header">
      <button class="back-btn" onclick="goHome()">← Back</button>
      <div class="logo">${lang.flag} ${lang.name}</div>
      <div class="stats-bar">
        <span class="stat">🔥 ${progress.streak}</span>
        <span class="stat">⭐ ${progress.xp}</span>
      </div>
    </header>

    <h2 class="section-title">Lessons</h2>
    <div class="lessons-list">
      ${lang.lessons.map((lesson, i) => {
        const done = progress.completed[lesson.id];
        const locked = lvl < lesson.requiredLevel;
        return `
          <div class="lesson-card ${done ? 'done' : ''} ${locked ? 'locked' : ''}">
            <div class="lesson-icon">${locked ? '🔒' : lesson.icon}</div>
            <div class="lesson-info">
              <div class="lesson-title">${lesson.title}</div>
              <div class="lesson-meta">${lesson.xp} XP · ${lesson.quiz.length} questions</div>
            </div>
            <div class="lesson-actions">
              ${!locked ? `<button class="btn-sm btn-outline" onclick="startVocab(${i})">📖 Study</button>` : ''}
              ${!locked ? `<button class="btn-sm btn-primary" onclick="startQuiz(${i})">${done ? '🔄 Redo' : '▶ Start'}</button>` : ''}
              ${locked ? `<span class="locked-label">Lv.${lesson.requiredLevel} needed</span>` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

window.goHome = function() { STATE.screen = 'home'; render(); };

window.startVocab = function(idx) {
  STATE.lesson = idx;
  STATE.screen = 'vocab';
  render();
};

window.startQuiz = function(idx) {
  STATE.lesson = idx;
  STATE.quizIdx = 0;
  STATE.quizScore = 0;
  STATE.selected = null;
  STATE.answered = false;
  STATE.screen = 'quiz';
  render();
};

// ── VOCAB ──────────────────────────────────────────────────────────────────
function renderVocab() {
  const lang = LESSONS_DATA[STATE.lang];
  const lesson = lang.lessons[STATE.lesson];
  app().innerHTML = `
    <header class="header">
      <button class="back-btn" onclick="backToLessons()">← Back</button>
      <div class="logo">📖 ${lesson.title}</div>
    </header>

    <div class="vocab-grid">
      ${lesson.vocab.map(v => `
        <div class="vocab-card" onclick="this.classList.toggle('flipped')">
          <div class="vocab-front">
            <div class="vocab-word ${STATE.lang === 'ar' ? 'rtl' : ''}">${v.word}</div>
            <div class="vocab-tap">Tap to reveal</div>
          </div>
          <div class="vocab-back">
            <div class="vocab-translation">${v.translation}</div>
            <div class="vocab-example ${STATE.lang === 'ar' ? 'rtl' : ''}">${v.example}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="vocab-footer">
      <button class="btn-primary btn-block" onclick="startQuiz(${STATE.lesson})">Take the Quiz →</button>
    </div>
  `;
}

window.backToLessons = function() { STATE.screen = 'lessons'; render(); };

// ── QUIZ ───────────────────────────────────────────────────────────────────
function renderQuiz() {
  const lang = LESSONS_DATA[STATE.lang];
  const lesson = lang.lessons[STATE.lesson];
  const q = lesson.quiz[STATE.quizIdx];
  const total = lesson.quiz.length;
  const pct = Math.round((STATE.quizIdx / total) * 100);

  app().innerHTML = `
    <header class="header">
      <button class="back-btn" onclick="backToLessons()">✕</button>
      <div class="quiz-progress-wrap">
        <div class="quiz-progress"><div class="quiz-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="quiz-counter">${STATE.quizIdx + 1}/${total}</div>
    </header>

    <div class="quiz-body">
      <div class="quiz-question">${q.q}</div>
      <div class="options-grid" id="opts">
        ${q.options.map((opt, i) => `
          <button class="option-btn" id="opt_${i}" onclick="selectAnswer(${i})">${opt}</button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback"></div>
      <div class="hint-area" id="hintArea"></div>
    </div>

    <div class="quiz-foot">
      <button class="btn-primary" id="nextBtn" style="display:none" onclick="nextQuestion()">
        ${STATE.quizIdx + 1 < total ? 'Next →' : 'Finish 🎉'}
      </button>
    </div>
  `;
}

window.selectAnswer = function(idx) {
  if (STATE.answered) return;
  STATE.answered = true;
  STATE.selected = idx;

  const lang = LESSONS_DATA[STATE.lang];
  const lesson = lang.lessons[STATE.lesson];
  const q = lesson.quiz[STATE.quizIdx];
  const correct = idx === q.answer;

  if (correct) STATE.quizScore++;

  // Color options
  q.options.forEach((_, i) => {
    const btn = $(`opt_${i}`);
    if (i === q.answer) btn.classList.add('correct');
    else if (i === idx && !correct) btn.classList.add('wrong');
    btn.disabled = true;
  });

  // Feedback
  const fb = $('feedback');
  fb.textContent = correct ? '✅ Correct!' : `❌ The answer is: ${q.options[q.answer]}`;
  fb.className = `quiz-feedback ${correct ? 'fb-correct' : 'fb-wrong'}`;

  $('nextBtn').style.display = 'block';

  // Show hint for wrong answers (cached, lazy)
  if (!correct) {
    const vocab = lesson.vocab[STATE.quizIdx % lesson.vocab.length];
    const ha = $('hintArea');
    ha.textContent = '💡 Loading hint…';
    getHint(vocab.word, lang.name).then(h => { ha.textContent = `💡 ${h}`; });
  }
};

window.nextQuestion = function() {
  const lang = LESSONS_DATA[STATE.lang];
  const lesson = lang.lessons[STATE.lesson];
  STATE.quizIdx++;
  STATE.answered = false;
  STATE.selected = null;

  if (STATE.quizIdx >= lesson.quiz.length) {
    // Finish
    const earned = Math.round(lesson.xp * (STATE.quizScore / lesson.quiz.length));
    progress.xp += earned;
    progress.completed[lesson.id] = true;
    updateStreak();
    saveProgress();
    STATE.screen = 'result';
    render();
  } else {
    render();
  }
};

// ── RESULT ─────────────────────────────────────────────────────────────────
function renderResult() {
  const lang = LESSONS_DATA[STATE.lang];
  const lesson = lang.lessons[STATE.lesson];
  const total = lesson.quiz.length;
  const pct = Math.round((STATE.quizScore / total) * 100);
  const earned = Math.round(lesson.xp * (STATE.quizScore / total));
  const stars = pct >= 80 ? '⭐⭐⭐' : pct >= 50 ? '⭐⭐' : '⭐';
  const medal = pct === 100 ? '🏆' : pct >= 80 ? '🥇' : pct >= 50 ? '🥈' : '🥉';

  app().innerHTML = `
    <div class="result-screen">
      <div class="result-medal">${medal}</div>
      <h2 class="result-title">Lesson Complete!</h2>
      <div class="result-stars">${stars}</div>
      <div class="result-score">${STATE.quizScore}/${total} correct</div>
      <div class="result-xp">+${earned} XP earned</div>
      <div class="result-streak">🔥 ${progress.streak} day streak!</div>
      <div class="result-actions">
        <button class="btn-outline btn-block" onclick="startQuiz(${STATE.lesson})">🔄 Try Again</button>
        <button class="btn-primary btn-block" onclick="backToLessons()">Continue →</button>
      </div>
    </div>
  `;
}

// ── Init ───────────────────────────────────────────────────────────────────
updateStreak();
render();
