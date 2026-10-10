# Wordle Assistant — Offline Wordle Solver

Local-first helper for solving Wordle. No server, no tracking — everything runs in your browser.

## Use

1. Open `index.html` directly in a browser (`file://` works, no build needed).
2. Type your Wordle guess with a physical keyboard or the on-screen keyboard.
3. Click a tile to cycle `miss (gray) → present (yellow) → correct (green)` to match Wordle's feedback.
4. Press **Analyze position** (auto-runs on load, or press Enter). Repeat after each guess.
5. Press **USE** on a suggestion to drop it into the next row, or click any word in the field list.
6. **Undo word** clears the current row. **New game** resets the board.

Red row = not in dictionary. Change it to see stats again.

## What it does

- **Solver:** possible-solution count, 3 suggested guesses (worst-case / average-case / most information in bits), and a clickable candidate list (first 300 shown).
- **Solver details:** exact Wordle feedback (duplicate-letter safe) in `worker.js`, runs in a Web Worker so the UI stays responsive. Every allowed guess from `words.txt` (~14.8k) is treated as a possible solution — there is no separate predefined answer list. Opening recommendations are precomputed in `precomputed.js` (`seria / lares / tares`) and served instantly with no worker run; the worker only runs once you enter a guess.
- **Offline + private:** static `HTML/CSS/JS + txt`, works from `file://` down to 380px width. No data leaves your device. System fonts only (no network), Catppuccin Mocha (dark) + Latte (light) via your OS setting with a manual light/dark toggle (starts with your OS setting), sky (Mocha) / maroon (Latte) accent for the primary action only, 44px+ touch targets, visible focus, reduced-motion respected.
