# Wordle Scout — Offline Wordle Solver

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

- **Position snapshot:** possible solutions remaining, locked greens, known yellows, excluded letters.
- **Suggested guesses (3):**
  - Best worst-case (minimizes max remaining)
  - Best average-case (minimizes expected remaining)
  - Most information (max entropy, in bits)
- **Available solutions:** filtered candidate list (first 300 shown), click to play.
- **Letter frequency:** top 8 letters across remaining candidates with % coverage.
- **Solver details:** exact Wordle feedback (duplicate-letter safe) in `worker.js`, runs in a Web Worker so the UI stays responsive. Solution list excludes proper names and simple plurals/inflections (see `dictionary.js`); ~2.3k solutions / ~14.8k allowed guesses.
- **Offline + private:** static `HTML/CSS/JS + txt`, works from `file://` down to 380px width. No data leaves your device. System fonts only (no network), light + dark via your OS setting, 44px+ touch targets, visible focus, reduced-motion respected.
