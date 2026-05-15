let valore = 10 // number

// number – rappresenta valori numerici (interi e decimali)

valore = "ciao" // ora è string

// string – rappresenta sequenze di caratteri (testo)

valore = true // ora è boolean

// boolean – rappresenta valori logici: true o false

let x // undefined

// undefined – variabile dichiarata ma non ancora inizializzata

let y = null // null

// null – rappresenta intenzionalmente l’assenza di valore

let id = Symbol("id") // symbol

// symbol – identificatore univoco e immutabile

let grande = 12345678901234567890n // bigint

// bigint – rappresenta numeri molto grandi oltre il limite di number

let globale = "visibile ovunque"

if (true) {
  let locale = "solo nel blocco"

  console.log(globale) // ok

  console.log(locale) // ok
}

// console.log(locale); // Errore

// console.log(a); // Errore: non accessibile prima della dichiarazione

let a = 10

// Con var (comportamento diverso)

console.log(b) // undefined (non errore)

var b = 20

// ----------------- Operatori Logici -----------------

let c = 10

let d = 5

// Operatori aritmetici

let somma = c + d // 15

let differenza = c - d // 5

let prodotto = c * d // 50

let divisione = c / d // 2

// Operatori di confronto

let uguale = c == "10" // true (coercizione)

let strettamenteUguale = c === "10" // false (tipo diverso)

let maggiore = c > d // true

// Operatori logici

let condizione = c > 5 && d < 10 // true

let alternativa = c < 5 || d < 10 // true

let negazione = !(c > d) // false

// Operatori di assegnazione

let z = 10

z += 5 // x = x + 5 -> 15

console.log(somma, uguale, strettamenteUguale, condizione)

const prompt = require("prompt-sync")()

let nome = prompt("Inserisci il tuo nome: ")

console.log("Ciao " + nome)
