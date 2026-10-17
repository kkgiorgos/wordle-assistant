# Wordle Assistant — Offline Wordle Solver

Local-first helper for solving Wordle. No server, no tracking — everything runs in your browser.

## Use

1. Open `index.html` directly in a browser (`file://` works, no build needed), or serve it over HTTP (see Docker / Install on phone).
2. Type your Wordle guess with a physical keyboard or the on-screen keyboard. The **Current attempt** panel scores the word live as you type (same worst-case / average / bits stats as the recommendations, plus a dictionary prefix count while the word is incomplete) and keeps showing it until you analyze.
3. Click a tile to cycle `miss (gray) → present (yellow) → correct (green)` to match Wordle's feedback.
4. Press **Analyze position** (auto-runs on load, or press Enter). Repeat after each guess. When no words match the position, recommendations are hidden until you fix the tiles.
5. Press **USE** on a suggestion to drop it into the next row, or click any word in the field list.
6. **Undo word** clears the current row. **New game** resets the board.

Red row = not in dictionary. Change it to see stats again.

## Docker

```sh
docker build -t wordle-assistant .
docker run --rm -p 8080:80 wordle-assistant
# or
docker compose up --build
```

Then open `http://localhost:8080`. Same static files as `file://`, just served over HTTP.

## Install on phone (PWA)

Serve the site over HTTP(S) first (Docker above, or any static file server). The first visit must be connected so the browser can install the service worker and cache the app; after that, the installed PWA runs without internet. `file://` still works offline, but browsers only install PWAs from a secure context (`https://` or `http://localhost`).

1. Open the app on your phone’s browser (HTTPS required for Android installation).
2. Use the browser menu → **Install app** / **Add to Home Screen**.
3. Launch **Wordle Assistant** from the home-screen icon — it opens full-screen and keeps working offline after the first connected visit (the service worker caches the shell, solver, icons, and dictionary).

**Same Wi‑Fi as your PC:** run Docker, then open `http://<your-pc-lan-ip>:8080` on the phone. iOS Add to Home Screen works over plain HTTP; Android’s full install prompt needs HTTPS or `localhost` (e.g. `adb reverse tcp:8080 tcp:8080`, then open `http://localhost:8080` on the phone).

## What it does

- **Solver:** possible-solution count, live **Current attempt** score for the word being typed (worst-case / average-case / bits, computed instantly against the current field), 3 suggested guesses (worst-case / average-case / most information in bits, hidden when nothing matches), and a clickable candidate list (first 300 shown).
- **Solver details:** exact Wordle feedback (duplicate-letter safe) in `worker.js`, runs in a Web Worker so the UI stays responsive. Every allowed guess from `words.txt` (~14.8k) is treated as a possible solution — there is no separate predefined answer list. Opening recommendations are precomputed in `precomputed.js` (`seria / lares / tares`) and served instantly with no worker run; the worker only runs once you enter a guess.
- **Offline + private:** static `HTML/CSS/JS + txt`, works from `file://` down to 380px width. No data leaves your device. Installable as a PWA when served over HTTP(S). System fonts only (no network), Catppuccin Mocha (dark) + Latte (light) via your OS setting with a manual light/dark toggle (starts with your OS setting), sky (Mocha) / maroon (Latte) accent for the primary action only, 44px+ touch targets, visible focus, reduced-motion respected.
