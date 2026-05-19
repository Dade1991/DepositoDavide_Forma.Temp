const prompt = require("prompt-sync")()

// Inizializzo array per le parole

let wordsContainer = []

// Inizializzo funzione che controlla se la parola inserita sia valida (non sia altro che stringa, lettere, non null o casistiche simili)

function validWord(word) {
  if (word === null) return false // Controlla che non sia null/vuoto

  let cleanWord = word.trim() // Elimina gli spazi vuoti

  if (cleanWord === "") {
    // Verifica se non sia una stringa vuota
    return false
  } else {
    // Se passa i controlli sopra, true e prosegue
    return true
  }
}

// Inizializzo funzione per il conteggio delle parole inserite all'interno dell'array che le contiene

function findHowManyWords(wordsContainer) {
  return wordsContainer.length
}

// Inizializzo funzione per il conteggio della parola più lunga

function findLongestWord(wordsContainer) {
  if (wordsContainer.length === 0)
    // Se l'array è vuoto ritorna un messaggio di avviso all'utente (gestione errori)
    return "No words insert. Try again."

  // Inizialmente, consideriamo che la prima parola diventerà anche la piu lunga

  let longestWord = wordsContainer[0]

  // Cicliamo l'array partendo dal secondo elemento (1)

  for (let i = 1; i < wordsContainer.length; i++) {
    // Se la parola attuale è piu lunga di quella salvata nella variabile in posizione 0, aggioniamo quella variabile
    if (wordsContainer[i].length > longestWord.length) {
      longestWord = wordsContainer[i]
    }
  }

  // Restituiamo la parola più lunga trovata

  return longestWord
}

// Inizializzo funzione per il conteggio della parola più lunga

function findShortestWord(wordsContainer) {
  if (wordsContainer.length === 0)
    // Se l'array è vuoto ritorna un messaggio di avviso all'utente (gestione errori)
    return "No words insert. Try again."

  // Inizialmente, consideriamo che la prima parola diventerà anche la piu corta

  let shortestWord = wordsContainer[0]

  // Cicliamo l'array partendo dal secondo elemento (1)

  for (let i = 1; i < wordsContainer.length; i++) {
    // Se la parola attuale è piu corta di quella salvata nella variabile in posizione 0, aggioniamo quella variabile
    if (wordsContainer[i].length < shortestWord.length) {
      shortestWord = wordsContainer[i]
    }
  }

  // Restituiamo la parola più corta trovata

  return shortestWord
}

// Inizializzo funzione che trova se una parola inizia con una vocale

function findInitialVowels(wordsContainer) {
  // Inizializzo una variabile che conterà quante parole iniziano con una vocale. Partirà da 0
  let counter = 0

  // Inizializzo array di riferimento per le vocali

  let vowels = ["a", "e", "i", "o", "u"]

  // Cicliamo l'array delle parole tramite indicizzazione [i] e, una volta indicizzato, isoliamo il focus sulla parte iniziale di ogni indice [0] che corrisponderà alla prima lettera

  for (let i = 0; i < wordsContainer.length; i++) {
    let firstLetter = wordsContainer[i][0].toLowerCase()

    // Se la parola include una vocale come lettera di iniziale, incrementerà di 1 il counter
    if (vowels.includes(firstLetter)) {
      counter++
    }
  }

  // Restiuiamo il conteggio

  return counter
}

// Inizializzo funzione per trasformare tutte le parole in UPPERCASE

function transfromInUpperCase(wordsContainer) {
  // Salvo le parole trasformate in uppercase in un nuovo array
  let upperCaseWords = []

  for (let i = 0; i < wordsContainer.length; i++) {
    upperCaseWords.push(wordsContainer[i].toUpperCase())
  }

  console.log("The tranformed words are into this array: " + upperCaseWords)
  return upperCaseWords
}

// Inizializzo funzione per avvio del programma
