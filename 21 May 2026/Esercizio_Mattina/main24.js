// Inizializzo variabili per elementi da modificare tramite manipolazione del DOM/SCCOM

let zooTitle = document.getElementById("zooTitle")

let description = document.querySelector(".description")

let buttons = document.querySelectorAll("button")

let btnLion = document.getElementById("btnLion")

let btnElephant = document.getElementById("btnElephant")

let btnRemove = document.getElementById("btnRemove")

let btnTheme = document.getElementById("btnTheme")

let animalsList = document.getElementById("animalsList")

// Inizializzo stato iniziale del tema (flase > il tema sarà chiaro e non dark in partenza)

let darkThemeActive = false

// Inizializzo funzione per pulsante di modifica del contenuto HTML

function addingAnimal(name, textDescription, cssClass) {
  // Inizializzo variabile per creazione card

  let card = document.createElement("div")

  // Aggiungo dinamicamente all'elemento appena creato classi (una inserita testualmente e l'altra tramite parametro passato dalla funzione)

  card.classList.add("animalCard", cssClass)

  // Aggiungo all'interno dell'elemento appena creato tags HTML dinamici che prendono i parametri della funzione

  card.innerHTML = `
        <h3>${name}</h3>
        <p>${textDescription}</p>
      `

  // Aggiungiamo all'elemento HTML il figlio appena creato
  animalsList.appendChild(card)

  // Modifica dinamica del contenuto del titolo e della descrizione

  zooTitle.textContent = "Zoo Safari Aggiornato"
  description.textContent =
    "La lista degli animali è stata aggiornata dinamicamente tramite JavaScript."
}

// ----------------- EVENT LISTENER -----------------

// Richiamo la variabile dell'elemento per ID del file html ed aggiungo un eventListener che catturerà il trigger del click ed avvierà la funzione passando i parametri

btnLion.addEventListener("click", function () {
  addingAnimal(
    // Questi sono i parametri da passare ${name}
    "Leone",
    // Questi sono i parametri da passare ${textDescription}
    "Il leone è un grande felino noto come il re della savana.",
    // Questi sono i parametri da passare ${cssClass}
    "lion",
  )
})

btnElephant.addEventListener("click", function () {
  addingAnimal(
    // Questi sono i parametri da passare ${name}
    "Elefante",
    // Questi sono i parametri da passare ${textDescription}
    "L'elefante è un mammifero erbivoro di grandi dimensioni, famoso per la sua proboscide.",
    // Questi sono i parametri da passare ${cssClass}
    "elephant",
  )
})

btnRemove.addEventListener("click", function () {
  // Inizializzo variabile relativa all'elemento HTML con classe aggiunta tramite DOM (animalCard) per modificarlo utlteriormente
  let animalCards = document.querySelectorAll(".animalCard")

  // Gestione di lista vuota

  if (animalCards.length > 0) {
    // Se la condizione è vera (maggiore di zero) rimuove l'ultimo animale della lista

    animalCards[animalCards.length - 1].remove()
    // Aggiorna la descrizione

    description.textContent = "Un animale è stato rimosso dalla lista."
  } else {
    // Se la condizione è falsa (minore di zero) mostra un messaggio per l'utente
    description.textContent = "Non ci sono animali da rimuovere."
  }
})

btnTheme.addEventListener("click", function () {
  // Inizilmente il tema è "false", sfruttiamo l'operatore not per invertire il comportamento e rendere "true" la condizione del tema

  darkThemeActive = !darkThemeActive

  // Toggle funziona in modo binario (acceso/spento, si/no, true/false) perciò possiamo accendere e spegnere quante volte vogliamo il tema aggiungendo momentaneamente all'intero body la class "darkTheme"
  document.body.classList.toggle("darkTheme")
})
