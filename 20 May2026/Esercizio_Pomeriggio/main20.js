// Identifico gli elementi dell'html che salvo in variabili

let mainTitle = document.getElementById("mainTitle")

let divContainer = document.getElementById("divContainer")

let btnAdd = document.getElementById("btnAdd")

let btnRemoveLast = document.getElementById("btnRemoveLast")

let btnReset = document.getElementById("btnReset")

let btnStyle = document.getElementById("btnStyle")

let btnHide = document.getElementById("btnHide")

let list = document.getElementById("list")

let inputText = document.getElementById("inputText")

let counter = document.getElementById("counter")

// Inizializzo variabili per gli stili CSS da richiamare comodamente con il nome della variabile appena inizializzata

let initialTitleText = mainTitle.textContent

let initialTitleColor = mainTitle.style.color

let initialDivContainerBG = divContainer.style.backgroundColor

let initialDivContainerFont = divContainer.style.fontSize

let initialListBorder = list.style.border

let initialDivContainerDisplay = divContainer.style.display

// Ora richiamiamo gli elementi identificati grazie a getElementById (o getElementByClassName, tag, etc) e li attribuiamo una funzione che cambierà ciò che indicheremo, rendendo dinamico l'html o CSS grazie alle funzioni js (manipolazione del DOM o SCCOM)

// Aggiorna il counter valutando la lunghezza della lista (Viene triggerato all'inserimento di un nuovo elemento nella lista, quel comando contine anche l'evocazione di questa funzione)

function updateCounter() {
  counter.textContent = "Element inside list: " + list.children.length
}

// Richiamo il btnAdd e gli impongo l'ascolto di un evento al suo click.
// Triggerato il bottone, partirà la funzione

btnAdd.addEventListener("click", function () {
  // Inizializzo la variabile che recupera il contenuto del testo scritto "inputText" tag in HTML: <input>

  let inputValue = inputText.value

  // Controllo per input vuoto con gestione dell'errore ed alert per user

  if (inputValue === "") {
    alert("No element was written. Try again")
    return
  }

  // Ora possiamo creaiamo un nuovo elemento html, <li>

  let newLi = document.createElement("li")
  newLi.textContent = inputValue

  list.appendChild(newLi)
  inputText.value = ""
  updateCounter()
})

// Richiamo l'inputText e gli impongo l'ascolto di un evento alla pressione del tasto "Enter" della tastiera
// Come per il bottone di aggiunta, verrà rievocata la funzione di aggiunta dell'item all'interno della lista di elementi.

inputText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Come se triggerassimo il bottone di aggiunta
    btnAdd.click()
  }
})

// Richiamo il btnRemove e gli impongo l'ascolto di un evento al suo click.
// Triggerato il bottone, partirà la funzione che rimuoverè l'ultimo figlio <li> della lista <ul>
// Ritriggera il counter
// Se l'utente volesse cancellare una list vuota, riceverebbe un alert (gestione errori/comportamenti utente)

btnRemoveLast.addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild)
    updateCounter()
  } else {
    alert("The list is empty. You cannot delete any element.")
  }
})

// Richiamo il btnStyle e gli impongo l'ascolto di un evento al suo click.
// Triggerato il bottone, partirà la funzione che modificherà gli elementi indicati con gli stili preventivamente scelti.

btnStyle.addEventListener("click", function () {
  mainTitle.style.color = "red"
  divContainer.style.fontSize = "2.5rem"
  divContainer.style.backgroundColor = "green"
  list.style.border = "5px dotted purple"
})

// Richiamo il btnReset e gli impongo l'ascolto di un evento al suo click.
// Triggero il bottone, e la funzione andrà a richiamare le variabili iniziali dove avevamo "salvato lo stato" iniziale degli elementi modificati.
// Questi ritornano come originali

btnReset.addEventListener("click", function () {
  mainTitle.textContent = initialTitleText
  mainTitle.color = initialTitleColor
  divContainer.style.fontSize = initialDivContainerFont
  divContainer.style.backgroundColor = initialDivContainerBG
  list.style.border = initialListBorder
})
