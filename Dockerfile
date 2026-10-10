# Static production image for the Wordle Assistant (offline-first, no build step).
FROM docker.io/library/nginx:alpine

# Static site files only — keeps file:// as the source of truth, container just serves them.
COPY index.html styles.css app.js worker.js dictionary.js precomputed.js words.txt solutions.txt /usr/share/nginx/html/

EXPOSE 80
