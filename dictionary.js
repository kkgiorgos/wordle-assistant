const properNames = new Set([
  'aaron', 'alice', 'angus', 'annie', 'bruce', 'camus', 'clara', 'david',
  'diana', 'elvis', 'emily', 'george', 'henry', 'jason', 'jesse', 'john',
  'joseph', 'karen', 'kevin', 'laura', 'lucas', 'mabel', 'maria', 'martha',
  'michael', 'natalie', 'oliver', 'oscar', 'pablo', 'robert', 'rossa',
  'sarah', 'simon', 'sophia', 'steven', 'susan', 'thomas', 'tyler'
]);

// These words are also names, but their ordinary dictionary meaning makes
// them valid answers.
const wordsWithNonNameMeanings = new Set(['frank', 'peter']);

function isNormalInflection(word, dictionary) {
  if (word.endsWith('es') && dictionary.has(word.slice(0, -2))) return true;
  if (word.endsWith('s') && dictionary.has(word.slice(0, -1))) return true;
  if (word.endsWith('ed') && dictionary.has(word.slice(0, -2))) return true;
  if (word.endsWith('d') && dictionary.has(word.slice(0, -1))) return true;
  return false;
}

function generateSolutions(availableWords, baseWords = availableWords) {
  const words = [...new Set(availableWords)]
    .map(word => word.trim().toLowerCase())
    .filter(word => /^[a-z]{5}$/.test(word));
  const dictionary = new Set(baseWords.map(word => word.trim().toLowerCase()));

  return words.filter(word =>
    (!properNames.has(word) || wordsWithNonNameMeanings.has(word)) &&
    !isNormalInflection(word, dictionary)
  );
}

if (typeof module !== 'undefined') {
  module.exports = { generateSolutions, isNormalInflection };
}
