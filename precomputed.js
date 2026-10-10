// Precomputed recommendations for the empty board (no guesses yet).
// Generated from words.txt (14855 allowed guesses) + solutions.txt (2309 solutions)
// with worker.js analyze({words, solutions, guesses: []}).
// Regenerate with:
//   node -e "const fs=require('fs');const words=[...new Set(fs.readFileSync('words.txt','utf8').split(/\s+/).filter(w=>/^[a-z]{5}$/.test(w)))];const solutions=[...new Set(fs.readFileSync('solutions.txt','utf8').split(/\s+/).filter(w=>/^[a-z]{5}$/.test(w)))].filter(w=>words.includes(w));const src=fs.readFileSync('worker.js','utf8').split('self.onmessage')[0];const r=new Function('words','solutions','guesses',src+';return analyze({words,solutions,guesses});')(words,solutions,[]);fs.writeFileSync('precomputed.js','// Precomputed recommendations for the empty board (no guesses yet).\n// Generated from words.txt ('+words.length+' allowed guesses) + solutions.txt ('+solutions.length+' solutions)\n// with worker.js analyze({words, solutions, guesses: []}).\nconst PRECOMPUTED_INITIAL_RECOMMENDATIONS = '+JSON.stringify(r.recommendations,null,2)+';\n');"
// Served statically via <script src="precomputed.js"> so the first paint is
// instant (no ~13s worker run) and works offline from file://.
const PRECOMPUTED_INITIAL_RECOMMENDATIONS = [
  {
    "word": "olate",
    "worst": 160,
    "average": 69.49112169770463,
    "entropy": 5.666389530263747,
    "inField": false
  },
  {
    "word": "roate",
    "worst": 194,
    "average": 60.13209181463837,
    "entropy": 5.8848563137320085,
    "inField": false
  },
  {
    "word": "tarse",
    "worst": 226,
    "average": 65.72845387613685,
    "entropy": 5.948974509955521,
    "inField": false
  }
];
