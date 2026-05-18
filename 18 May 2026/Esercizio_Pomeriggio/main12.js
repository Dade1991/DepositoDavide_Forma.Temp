const prompt = require("prompt-sync")()

// Inizializzo Array vuoto

let numbers = []

// Inserimento numeri da utente (mentre è vero, ed è sempre vero fino a che non si digita 0 > break, rimane in ascolto di input utenti)

while (true) {
  let userInput = prompt(
    "Insert here a number (digit `0` to terminate program): ",
  )
  let number = Number(userInput)

  // Controllo dell'errore (se non è un numero, gestisce l'errore tornando un messaggio per l'utente e non bloccca il processo di while)

  if (Number.isNaN(number)) {
    console.log("Input not valid, insert a valid number.")

    continue
  }

  // Blocca il processo di while e chiude correttamente il programma

  if (number === 0) {
    console.log("Program closed.")

    break
  }

  // Aggiunge il numero appena inserito nell'array inizializzato all'inizio codice

  numbers.push(number)

  // Stampa numeri inseriti all'interno dell'array fino ad ora

  console.log(numbers)
}

// Inizializzo Arrays vuoti per numeri pari, dispari ed inizializzo varibile per conteggio somma tot numeri dell'array principale (numbers)

let even = []
let odd = []
let sum = 0

// Inizializzo variabili per valori min & max

let min = null
let max = null

// Ciclo il numero appena inserito nell'array numeri e:

// - Sommo tra di loro tutti i numeri nell'array principale (prende il valore della somma precedente ed aggiunge l'ultimo numero inserito, restiuisce la somma inclusa dell'ultimo input)
// - Verifico ed organizzo in array numeri pari
// - Verifico ed organizzo in array numeri dispari
// - Verifico ed modifico valore in varibile numero min
// - Verifico ed modifico valore in varibile numero max

for (number of numbers) {
  // Qui sommo tutti i numeri che aggiungo mano a mano in maniera "automatica"

  sum += number

  // Poi, controllo che i numeri siano o pari o dispari e gli aggiungo ad un array o all'altro.

  if (number % 2 === 0) {
    even.push(number)
  } else {
    odd.push(number)
  }

  // Se non c'è ancora un valore, assegno il primo valore che trovo.
  // Oppure, assegno il numero appena inserito come min se questo stesso è il più piccolo del minimo attuale tra quelli gia presenti. (Quello che tende di più verso valore basso)

  if (min === null || number < min) {
    min = number
  }

  // Se non c'è ancora un valore, assegno il primo valore che trovo.
  // Oppure, assegno il numero appena inserito come max se questo stesso è il più grande del massimo attuale tra quelli gia presenti. (Quello che tende di più verso valore alto)

  if (max === null || number > max) {
    max = number
  }
}

// Stampe totali degli arrays & varibili richieste

console.log("Collected tot numbers: " + numbers)
console.log("Collected even numbers: " + even)
console.log("Collected odd numbers: " + odd)
console.log("Total sum is: " + sum)

if (numbers.length > 0) {
  console.log("Minimum number is: " + min)
  console.log("Maximum number is: " + max)
} else {
  console.log("No number inserted.")
}

// Se volessimo ricercare un indice particolare all'interno dell'array, possiamo utilizzare il nome dell'array e l'indice tra [] del valore che ci serve:

console.log(numbers[3])

// L'extra non l'ho fatto perchè ero ancora a telefono con la municipale :(
