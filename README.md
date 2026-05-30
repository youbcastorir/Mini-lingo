# 🦜 MiniLingo

A lightweight, Duolingo-style language learning app built with pure HTML, CSS, and Vanilla JavaScript. No frameworks, no backend, no heavy dependencies.

## Features

- 🌍 4 languages: English, French, Spanish, Arabic
- 📖 Vocabulary flashcards with flip animation
- ✅ Multiple-choice quizzes with instant feedback
- ⭐ XP points & level progression
- 🔥 Daily streak counter
- 🔒 Lesson unlock system
- 💾 Progress saved to localStorage
- 💡 Optional AI hints via Groq API

---

## Local Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/minilingo.git
cd minilingo

# No build step needed — open directly
open index.html
# or serve with any static server:
npx serve .
```

---

## API Setup (Optional — for AI hints)

1. Get a free API key at https://console.groq.com
2. Copy `.env.example` to `.env`
3. Add your key: `GROQ_API_KEY=your_key_here`
4. Inject it into the page. For GitHub Pages, edit `index.html`:

```html
<script>
  window.__env = { GROQ_API_KEY: "your_key_here" };
</script>
```

> ⚠️ Do not commit real API keys. Use environment injection or a build tool for production.

---

## GitHub Pages Deployment

1. Push your code to GitHub (see commands below)
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/minilingo`

---

## Git Commands

```bash
git init
git add .
git commit -m "Launch MiniLingo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/minilingo.git
git push -u origin main
```

---

## Project Structure

```
minilingo/
├── index.html      # App shell
├── style.css       # All styles
├── app.js          # App logic, routing, quiz engine
├── lessons.js      # All lesson & quiz data
├── .env.example    # API key template
├── .gitignore
└── README.md
```

---

## Performance

- ~15 KB total (HTML + CSS + JS, no images)
- Zero external JS dependencies
- Groq API called only on wrong answers, results cached in memory
- All progress stored in localStorage (no backend)

---

MIT License
