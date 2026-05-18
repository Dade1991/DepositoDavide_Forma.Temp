// Arrays

let numbers = [1, 2, 3]

// Accesso agli elementi

console.log(numbers[0]) // 1

// Aggiunta elementi

numbers.push(4) // aggiunge in fondo -> [1,2,3,4]

console.log(numbers)

numbers.unshift(0) // aggiunge all'inizio -> [0,1,2,3,4]

console.log(numbers)

// Rimozione elementi

numbers.pop() // rimuove ultimo -> [0,1,2,3]

console.log(numbers)

numbers.shift() // rimuove primo -> [1,2,3]

console.log(numbers)

// Iterazione

numbers.forEach((n) => console.log("I numeri stampati forEach n sono: " + n))

// Trasformazione

let double = numbers.map((n) => n * 2) // [2,4,6]

console.log("Il risultato doppio per ciascun valore (indicizzato) è: " + double)

// Filtro

let majorOne = numbers.filter((n) => n > 1) // [2,3]

console.log("Filtra i numeri desiderati superiori al valore 1: " + majorOne)

// Ricerca

let found = numbers.find((n) => n === 2) // 2

console.log("Ricerca il numero indicato nella parametro: " + found)

// Lunghezza

console.log("La lunghezza tot dell'array è: " + numbers.length) // 3

// Array nei cicli - for-of itera sui valori di strutture iterabili (FOR-OF)

let numbers2 = [10, 20, 30]

for (let value of numbers2) {
  console.log("Valore in array: " + value) // 10, 20, 30
}

let stringEx = ["Ciao", "Sono ", "Dave", 101]

for (let stringResult of stringEx) {
  console.log("Valore in array: " + stringResult) // Ciao Sono Dave
}

// Esempio più esplicativo

let word = "Davide"

for (let singleWord of word) {
  console.log(singleWord) // D, a, v, i, d, e
}

// Array nei cicli - for-in itera sulle proprietà di un oggetto. (FOR-IN)

let person = { name: "Mario", age: 30 }

for (let key in person) {
  console.log("Valore in array: " + key, person[key])
}

// Funzioni

function sum2(a, b) {
  return a + b
}

let result2 = sum2(3, 5)

console.log(result2) // 8

// -------------------------------------

const multiply = function (a, b) {
  return a * b
}

console.log(multiply(4, 2)) // 8

// Funzioni Arrow

const difference = (a, b) => a - b

console.log(difference(10, 3)) // 7

// Parametri & Return

function sayHello(name) {
  return "Hi " + name
}

let message = sayHello("Dave")

console.log(message) // Ciao Dave
