# AGENTS.md — Wordle Assistant

This is an offline-first Wordle solver static site. Prioritize polishing the solver: UX, performance, and correctness.

## Stack & Constraints
- Current: vanilla static `index.html` + `styles.css` + `app.js` + `worker.js` + `dictionary.js` + `words.txt` / `solutions.txt`. No build, no npm.
- Modern tooling is allowed if useful (npm, Vite, linters, minimal test runner), but do not require it for core use.
- Offline-first required: must work opened via `file://` with no network and no data leaving device.
- Keep Web Worker (`worker.js`) working from static files. Avoid dependencies that break `file://` or require a server.
- Responsive: must stay usable down to 380px width (see media queries in `styles.css`).

## Repo Map
- `index.html`: app shell, board / keyboard / insights panels.
- `app.js`: game state, rendering, `requestAnalysis()` via Worker.
- `worker.js`: `feedback(guess, answer)`, `analyze({words, solutions, guesses})`, candidate filtering + recommendations.
- `dictionary.js`: generates solutions list (`generateSolutions`).
- `styles.css`: all styling, mobile breakpoints at 800px / 480px / 380px.
- `words.txt`, `solutions.txt`: dictionaries.

## Code Style
- Readable refactor is preferred: okay to split dense one-liners, extract helpers, rename for clarity.
- Keep diffs focused. Match existing naming (`render*`, `keyPress`, `candidates`, `recommendations`).
- No auto-formatters unless asked. Don't reformat entire files for style only.
- Vanilla JS, no framework unless user approves. Keep ES version compatible with modern evergreen browsers.

## Verification
- No test framework currently. Lightweight tests are welcome when valuable.
- Priority: UI smoke test — `app.js` renders board/keyboard/suggestions without errors.
- When touching solver logic, also sanity-check `feedback()` / `analyze()` with `node -e` or a small script (duplicate-letter handling is the edge case).
- When touching dictionaries, validate `words.txt` filtering (`/^[a-z]{5}$/`) and solution generation.
- Manual check: open `index.html` via `file://`, type a word, cycle tiles, run Analyze, Use suggestion, Undo, New game. Note mobile 380px layout if CSS touched.
- Explain how to manually verify in the final summary.

## Git Workflow
- Auto-commit significant changes without asking, using Conventional Commits (`feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `test:`, `chore:`).
- Significant = user-visible feature, bug fix, solver correctness, or structural refactor. Do not commit for trivial / WIP / typo-only edits — leave those uncommitted.
- Don't commit too often: batch related edits into one commit per task.
- Never push unless explicitly asked. Never force-push. Check `git status` / `git diff` before committing.

## Working Agreement
- Default to edits over new files. Confirm before adding new top-level files beyond tests or tooling config.
- Keep offline + local-first guarantees in every change.
- `README.md` is concise and user-facing (usage + capabilities). Any significant change must update it to keep it accurate — same commit as the change.
