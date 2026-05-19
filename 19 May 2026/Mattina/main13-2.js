// Try catch:

try {
  let risultato = 10 / 0

  console.log(risultato)
} catch (errore) {
  console.log("Si è verificato un errore")
}

// Finally

try {
  console.log("Esecuzione...")
} catch (errore) {
  console.log("Errore")
} finally {
  console.log("Operazione terminata")
}

// Finally

function controllaEta(eta) {
  if (eta < 18) {
    throw new Error("Utente minorenne")
  }

  return "Accesso consentito"
}

try {
  console.log(controllaEta(16))
} catch (e) {
  console.log(e.message)
}

// Object

// Creazione oggetto

let persona = {
  nome: "Mario",
  eta: 30,
}

// Accesso proprietà

console.log(persona.nome) // Mario

console.log(persona["eta"]) // 30

console.log(persona.eta) // da capire

// Modifica proprietà

persona.eta = 31

console.log(persona)

// Aggiunta proprietà

persona.citta = "Milano"

console.log(persona)

// Rimozione proprietà

delete persona.citta

console.log(persona)

// Metodi utili

let chiavi = Object.keys(persona) // ["nome", "eta"] // KEYS > estrapola le chiavi dell'oggetto

let valori = Object.values(persona) // ["Mario", 31] // VALUES > estrapola i valori dell'oggetto

let entries = Object.entries(persona) // [["nome","Mario"],["eta",31]] // ENTRIES > estrapola le chiavi ed i valori dell'oggetto
