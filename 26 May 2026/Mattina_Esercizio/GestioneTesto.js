// Funzione per trasformare testo in maiuscolo

function textToMaiusc(text) {
  let textToUpper = text.toUpperCase()
  return textToUpper
}

// Funzione per contare lettere di una parola

function textCounterCharacters(text) {
  let textCounterCharacters = text.length
  return textCounterCharacters
}

// Funzione per controllare che la parola contenga una lettera determinata

function textContainsLetter(text, word) {
  let textContainsLetter = text.toLowerCase().includes(word.toLowerCase())
}

// Predispongo l'export delle 3 funzioni

module.exports = {
  textToMaiusc,
  textCounterCharacters,
  textContainsLetter,
}
