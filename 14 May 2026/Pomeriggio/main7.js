// Dichiarazioni di variabili

let name = "Davide" // String
const age = 34 // Number
let active = true // Boolean

//  Tipi speciali

let undefinedValue // Undefined > genera sempre errores
let emptyValue = null // Null

let message = "Ciao, mi chiamo " + name + " ed ho " + age + " anni."

console.log(message)

// Questi qui in alto, questi dati, vengono definiti "dati primitivi", variabili primitive (String, Number, Boolean, Undefined, Null, Symbol, Bigint)
// Sono tutti predefiniti nel sistema.
// Poi ci sono i tipi non primitivi, qui di seguito, ovvero gli elementi finiti dall'utente.

// Array & Oggetto (tipo Object)

let numers = [1, 2, 3]

let person = {
  name: "Gianni",
  age: 30,
}

console.log(person)

// Oggetti e dati primitivi sono le due principali categorie di JS

// JS è case sensitive
