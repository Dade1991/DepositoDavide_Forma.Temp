// Condizioni - IF

let eta = 18

if (eta >= 18) {
  console.log("Maggiorenne")
} else {
  console.log("Minorenne")
}

// Più condizioni - ELSE IF
// Utilizzato per avere più condizioni e non solo due (else if)

let voto = 75

if (voto >= 90) {
  console.log("Ottimo")
} else if (voto >= 60) {
  console.log("Sufficiente")
} else {
  console.log("Insufficiente")
}

// Condizioni - BOOLEAN

let eta2 = 20

let patente = true

let abbonamento = false

// Condizione con AND (&&)
// Entrambe le condizioni devono essere vere

if (eta2 >= 18 && patente === true) {
  console.log("Puoi guidare l'auto.")
}

// Condizione con OR (||)
// Basta che una delle condizioni sia vera

if (eta2 < 18 || abbonamento === true) {
  console.log("Hai uno sconto speciale.")
}

// Condizione con NOT (!)
// Inverte il valore booleano

if (!abbonamento) {
  console.log("Non hai un abbonamento attivo.")
}

// Condizione più complessa (Controlla che sia maggiorenne e con la patente O abbonato, darà accesso se la viene soddisfatta almeno una delle due condizioni e, per la prima al suo interno, entrambe)

if ((eta2 >= 18 && patente) || abbonamento) {
  console.log("Accesso consentito.")
} else {
  console.log("Accesso negato.")
}

// Condizioni - SWITCH

let giorno = 2

switch (giorno) {
  case 1:
    console.log("Lunedì")

    break

  case 2:
    console.log("Martedì")

    break

  case 3:
    console.log("Mercoledì")

    break

  default:
    console.log("Giorno non valido")
}

// Condizioni - Fall-through (senza break)

let valore = 2

switch (valore) {
  case 1:
    console.log("Uno")

  case 2:
    console.log("Due")

  case 3:
    console.log("Tre")

    break
}

// Condizioni - Casi multipli (stesso risultato)

let giorno = 6

switch (giorno) {
  case 6:
  case 7:
    console.log("Weekend")

    break

  default:
    console.log("Giorno lavorativo")
}
