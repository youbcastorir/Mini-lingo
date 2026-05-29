# MiniLingo

MiniLingo is a lightweight, Duolingo-style language learning website designed for speed, mobile responsiveness, and a beginner-friendly user interface. It offers interactive lessons, QCM quizzes, and tracks user progress with XP, levels, and streaks. The application supports English, French, Spanish, and Arabic, and integrates with the Groq API for small translations, hints, or exercises.

## Features

*   **Beginner Lessons**: Structured lessons to introduce new vocabulary and grammar.
*   **QCM Quizzes**: Multiple-choice questions for interactive learning and assessment.
*   **XP, Levels, Streaks**: Gamified progress tracking to keep users motivated.
*   **Vocabulary Training**: Focused exercises to build and reinforce vocabulary.
*   **Instant Corrections**: Immediate feedback on answers for effective learning.
*   **Progress Saved Locally**: Uses `localStorage` to save user progress directly in the browser.
*   **Multilingual Support**: Content available in English, French, Spanish, and Arabic.
*   **AI Hints**: Optional hints powered by the Groq API to assist learners.

## Requirements

*   Fast, mobile-responsive, beginner-friendly UI.
*   Minimal animations for a smooth experience.
*   Low CPU/RAM usage.
*   No backend or external frameworks (Vanilla HTML, CSS, JavaScript only).

## File Structure

```
minilingo/
├── index.html
├── style.css
├── app.js
├── lessons.js
├── README.md
├── .gitignore
└── .env.example
```

## Local Installation

To set up MiniLingo on your local machine, follow these steps:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/minilingo.git
    cd minilingo
    ```

2.  **Open `index.html`**: Simply open the `index.html` file in your web browser. Since there is no backend, no server is required to run the application locally.

## API Setup (Groq)

MiniLingo uses the Groq API for AI-powered hints. To enable this feature:

1.  **Get an API Key**: Obtain a Groq API key from the [Groq Console](https://console.groq.com/keys).

2.  **Configure `.env.example`**: Rename `.env.example` to `.env` and add your Groq API key:

    ```
    GROQ_API_KEY=gsk_YOUR_GROQ_API_KEY_HERE
    ```

    *Note: For security reasons, the API key is stored in `localStorage` after being entered in the settings. The `.env` file is primarily for local development and is excluded from version control via `.gitignore`.*

3.  **Enter Key in Application**: Navigate to the "Settings" screen within the MiniLingo application and paste your Groq API key into the provided input field. Click "Save Settings".

## GitHub Pages Deployment

MiniLingo can be easily deployed using GitHub Pages due to its static nature.

1.  **Create a GitHub Repository**: Push your local repository to GitHub.

2.  **Enable GitHub Pages**: Go to your repository settings on GitHub, navigate to the "Pages" section, and select the `main` branch (or `gh-pages` if you prefer) as the source for deployment. Ensure the root directory is selected.

3.  **Access Your Site**: Your MiniLingo site will be available at `https://your-username.github.io/your-repository-name/`.

## Git Commands

Here are some essential Git commands for managing your project:

*   **Initialize a new Git repository**:

    ```bash
    git init
    ```

*   **Add files to the staging area**:

    ```bash
    git add .
    ```

*   **Commit changes**:

    ```bash
    git commit -m "Initial commit"
    ```

*   **Link to a remote repository**:

    ```bash
    git remote add origin https://github.com/your-username/your-repository-name.git
    ```

*   **Push changes to GitHub**:

    ```bash
    git push -u origin main
    ```

*   **Pull latest changes from remote**:

    ```bash
    git pull origin main
    ```

## Author

**Manus AI**
