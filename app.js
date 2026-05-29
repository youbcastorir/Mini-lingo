import lessons from './lessons.js';

// --- State Management ---
const state = {
    currentLang: null,
    currentLevel: null,
    currentExerciseIndex: 0,
    xp: parseInt(localStorage.getItem('minilingo_xp')) || 0,
    streak: parseInt(localStorage.getItem('minilingo_streak')) || 0,
    lastActive: localStorage.getItem('minilingo_lastActive') || null,
    level: Math.floor((parseInt(localStorage.getItem('minilingo_xp')) || 0) / 100) + 1,
    groqApiKey: localStorage.getItem('minilingo_groq_key') || ''
};

// --- DOM Elements ---
const screens = {
    home: document.getElementById('home-screen'),
    language: document.getElementById('language-screen'),
    levels: document.getElementById('levels-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    settings: document.getElementById('settings-screen')
};

const components = {
    xpDisplay: document.getElementById('xp-display'),
    streakDisplay: document.getElementById('streak-display'),
    levelDisplay: document.getElementById('level-display'),
    quizContainer: document.getElementById('quiz-container'),
    feedback: document.getElementById('feedback'),
    aiHintBtn: document.getElementById('ai-hint-btn'),
    aiHintText: document.getElementById('ai-hint-text')
};

// --- Initialization ---
function init() {
    updateStats();
    checkStreak();
    showScreen('home');
    setupEventListeners();
}

function setupEventListeners() {
    document.getElementById('start-btn').addEventListener('click', () => showScreen('language'));
    document.getElementById('settings-btn').addEventListener('click', () => showScreen('settings'));
    document.getElementById('save-settings').addEventListener('click', saveSettings);
    document.getElementById('back-home').addEventListener('click', () => showScreen('home'));
    
    // Language selection
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentLang = btn.dataset.lang;
            renderLevels();
            showScreen('levels');
        });
    });

    components.aiHintBtn.addEventListener('click', fetchAIHint);
}

// --- Navigation ---
function showScreen(screenId) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenId].classList.remove('hidden');
}

// --- UI Rendering ---
function renderLevels() {
    const langData = lessons[state.currentLang];
    const levelsList = document.getElementById('levels-list');
    levelsList.innerHTML = `<h2>${langData.flag} ${langData.title} Lessons</h2>`;
    
    langData.levels.forEach(level => {
        const btn = document.createElement('button');
        btn.className = 'level-card';
        btn.innerHTML = `<h3>Level ${level.id}</h3><p>${level.title}</p>`;
        btn.onclick = () => startLevel(level);
        levelsList.appendChild(btn);
    });
}

function startLevel(level) {
    state.currentLevel = level;
    state.currentExerciseIndex = 0;
    showExercise();
    showScreen('quiz');
}

function showExercise() {
    const exercise = state.currentLevel.exercises[state.currentExerciseIndex];
    components.feedback.innerText = '';
    components.aiHintText.innerText = '';
    components.aiHintBtn.classList.remove('hidden');

    let html = `<h3>${exercise.question}</h3><div class="options-grid">`;
    exercise.options.forEach(opt => {
        html += `<button class="option-btn" onclick="checkAnswer('${opt}')">${opt}</button>`;
    });
    html += `</div>`;
    components.quizContainer.innerHTML = html;
}

// --- Core Logic ---
window.checkAnswer = function(selected) {
    const exercise = state.currentLevel.exercises[state.currentExerciseIndex];
    const isCorrect = selected === exercise.answer;

    if (isCorrect) {
        components.feedback.innerHTML = '<span class="correct">Correct! +10 XP</span>';
        state.xp += 10;
        updateStats();
        
        setTimeout(() => {
            state.currentExerciseIndex++;
            if (state.currentExerciseIndex < state.currentLevel.exercises.length) {
                showExercise();
            } else {
                finishLevel();
            }
        }, 1000);
    } else {
        components.feedback.innerHTML = '<span class="incorrect">Try again!</span>';
    }
};

function finishLevel() {
    const today = new Date().toISOString().split('T')[0];
    if (state.lastActive !== today) {
        state.streak++;
        state.lastActive = today;
    }
    saveProgress();
    showScreen('result');
    document.getElementById('result-msg').innerText = `Level Complete! You earned XP and kept your ${state.streak} day streak!`;
}

function updateStats() {
    state.level = Math.floor(state.xp / 100) + 1;
    components.xpDisplay.innerText = `XP: ${state.xp}`;
    components.streakDisplay.innerText = `🔥 ${state.streak}`;
    components.levelDisplay.innerText = `Lvl ${state.level}`;
}

function saveProgress() {
    localStorage.setItem('minilingo_xp', state.xp);
    localStorage.setItem('minilingo_streak', state.streak);
    localStorage.setItem('minilingo_lastActive', state.lastActive);
}

function checkStreak() {
    if (!state.lastActive) return;
    const last = new Date(state.lastActive);
    const today = new Date();
    const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));
    
    if (diffDays > 1) {
        state.streak = 0;
        saveProgress();
    }
}

function saveSettings() {
    const key = document.getElementById('api-key-input').value;
    state.groqApiKey = key;
    localStorage.setItem('minilingo_groq_key', key);
    alert('Settings saved!');
    showScreen('home');
}

// --- Groq API Integration ---
async function fetchAIHint() {
    if (!state.groqApiKey) {
        components.aiHintText.innerText = "Please add your Groq API Key in settings for AI hints.";
        return;
    }

    const exercise = state.currentLevel.exercises[state.currentExerciseIndex];
    components.aiHintBtn.innerText = "Thinking...";
    
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${state.groqApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [{
                    role: "user", 
                    content: `Give a very short hint for this language learning question: "${exercise.question}". Don't give the answer away.`
                }],
                max_tokens: 50
            })
        });
        
        const data = await response.json();
        components.aiHintText.innerText = data.choices[0].message.content;
    } catch (error) {
        components.aiHintText.innerText = "Error fetching hint. Check API key.";
    } finally {
        components.aiHintBtn.innerText = "Get AI Hint";
    }
}

document.addEventListener('DOMContentLoaded', init);
