# Russian Grammar Learning Tool

## Project Overview

This is a React application built with TypeScript and Vite, designed to help students learn Russian grammar. Specifically, it features interactive charts for understanding the formation and usage of:

*   **Деепричастие (Gerundio):** Imperfective and Perfective aspects.
*   **Причастие (Participio):** Present and Past tenses, including Active and Passive voices.
*   **Cases (Падежи):** Usage and endings for nouns and adjectives.
*   **Verbs of Motion (Глаголы движения):** Prefixed and unprefixed forms with prepositions.
*   **Pronouns (Местоимения):** Personal, possessive, and demonstrative pronoun declensions.
*   **Learn/Teach (Учить/Учиться):** Differences in usage.
*   **Language Support:** Switchable between Italian and English.

The application uses `framer-motion` for animations (revealing steps, arrows) and `tailwindcss` for styling. It implements a custom "butterfly" chart layout for the Participles and structured grids/trees for other grammar topics.

## Architecture & Tech Stack

*   **Framework:** React 19
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS v4
*   **Animation:** Framer Motion
*   **Icons:** Lucide React
*   **State Management:** 
    *   `ChartContext`: Manages expansion/navigation state.
    *   `LanguageContext`: Manages current language state (IT/EN).

## Key Files

*   `src/App.tsx`: Main entry point for the UI components.
*   `src/LanguageContext.tsx`: Context provider for language state and translation hook.
*   `src/translations.ts`: Dictionary for Italian and English text.
*   `src/CasesChart.tsx`: Logic and layout for Russian case endings.
*   `src/MotionVerbsChart.tsx` & `src/MotionVerbsPrepositionsChart.tsx`: Visualizations for movement verbs.
*   `src/PronounChart.tsx`: Declension tables for pronouns.
*   `src/LearnTeachChart.tsx`: Guidance on using "to learn" and "to teach" verbs.
*   `src/index.css`: Tailwind CSS imports and global styles.
*   `src/main.tsx`: Application entry point.
*   `vite.config.ts`: Vite configuration.

## Development

### Prerequisites

*   Node.js (v18+ recommended)
*   npm
*   gh CLI (for repository management)

### Commands

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Start Development Server:**
    ```bash
    npm run dev
    ```

*   **Build for Production:**
    ```bash
    npm run build
    ```

*   **Linting:**
    ```bash
    npm run lint
    ```

## Source Control

*   **Repository:** `https://github.com/bacarnelutti/russian`
*   **Workflow:** Always push to GitHub after every major update of the code.

## Coding Conventions

*   **Components:** Functional components with hooks are used throughout.
*   **Styling:** Utility-first CSS with Tailwind.
*   **State:** Local state is used for simple toggles, but `ChartContext` is preferred for shared state like expanding/collapsing all chart nodes.
*   **Animations:** `AnimatePresence` and `motion` components from `framer-motion` are used for entry/exit animations.
