// Precomputed recommendations for the empty board (no guesses yet).
// Generated from words.txt (14855 allowed guesses, also used as the candidate pool)
// with worker.js analyze({words, guesses: []}).
// Regenerate with:
//   node -e "const fs=require('fs');const words=[...new Set(fs.readFileSync('words.txt','utf8').split(/\s+/).filter(w=>/^[a-z]{5}$/.test(w)))];const src=fs.readFileSync('worker.js','utf8').split('self.onmessage')[0];const r=new Function('words','guesses',src+';return analyze({words,guesses});')(words,[]);fs.writeFileSync('precomputed.js','// Precomputed recommendations for the empty board (no guesses yet).\n// Generated from words.txt ('+words.length+' allowed guesses, also used as the candidate pool)\n// with worker.js analyze({words, guesses: []}).\nconst PRECOMPUTED_INITIAL_RECOMMENDATIONS = '+JSON.stringify(r.recommendations,null,2)+';\n');"
// Served statically via <script src="precomputed.js"> so the first paint is
// instant (no ~4min worker run over the full word list) and works offline from file://.
const PRECOMPUTED_INITIAL_RECOMMENDATIONS = [
  {
    "word": "seria",
    "worst": 862,
    "average": 367.2334567485695,
    "entropy": 5.988829301629282,
    "inField": true
  },
  {
    "word": "lares",
    "worst": 1001,
    "average": 341.4708179064288,
    "entropy": 6.11479378387518,
    "inField": true
  },
  {
    "word": "tares",
    "worst": 1022,
    "average": 357.6614607876136,
    "entropy": 6.159376455792683,
    "inField": true
  }
];
