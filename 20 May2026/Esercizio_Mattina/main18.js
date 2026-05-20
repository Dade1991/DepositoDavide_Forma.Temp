// COme primo step, identifico e recupero gli elementi che vorrei rendere dinamici sul documento html

let input = document.getElementById("textInput")
let addButton = document.getElementById("addBtn")
let clearButton = document.getElementById("clearBtn")
let list = document.getElementById("itemList")
let counter = document.getElementById("counter")

// Definiamo le funzionalità che serviranno per la manipolazione del DOM

// Contatore

function updateCounter() {
  counter.textContent = "Items in the list: " + list.children.length
}

// Verifica di duplicati nella lista (cicla la lista degli elementi <li> e li controlla (modificando anche il case sensitive))

function isDuplicate(text) {
  let listItems = list.getElementsByTagName("li")

  for (let i = 0; i < listItems.length; i++) {
    let itemText = listItems[i].firstChild.textContent
    if (itemText.toLowerCase() === text.toLowerCase()) {
      return true
    }
  }

  return false
}

// Aggiungiamo un elemento nella lista

function addItem() {
  let text = input.value.trim()

  // Se l'input testo è vuoto, manda un alert all'utente. Blocca eventuali comportamenti errati del programma

  if (text === "") {
    alert("The input field cannot be empty.")
    return
  }

  // Evocazione della funzione di controllo duplicati: manda un alert all'utente

  if (isDuplicate(text)) {
    alert("This item is already in the list.")
    return
  }

  // Di seguito diamo istruzioni su quali nuovi elementi html devono essere creati.
  // Possiamo intervenire su diversi parametri: tipo di tag, aggiungere testo, classi, stili, etc.

  // In questo caso creiamo un <li> che al suo interno conterrà uno <span> che riporta il testo inserito ed un <button> per poter eliminare quello specifico <li>

  let newItem = document.createElement("li")
  let itemText = document.createElement("span")
  itemText.textContent = text

  let deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete"
  deleteButton.classList.add("delete-btn")

  // Il bottone appena inserito, rimuove il singolo elemento selezionato e ritriggera il counter che verificherà nuovamente la sua linghezza ed aggiornerà il totale degli elementi inseriti

  deleteButton.addEventListener("click", function () {
    newItem.remove()
    updateCounter()
  })

  newItem.appendChild(itemText)
  newItem.appendChild(deleteButton)
  list.appendChild(newItem)

  input.value = ""
  updateCounter()
}

addButton.addEventListener("click", addItem)

// Questa funzionalità serve esclusivamente per "ascoltare" l'evento della tastiera alla pressione del tasto "enter" per inserire il testo nell'input field senza dover cliccare sul bottone

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem()
  }
})

// In ultimo, questa funzione "ascolta" se il bottone che svuota la lista ed aggiorna il counter, viene cliccato, triggerato.
// Quando questo viene premuto, l'evento si attiva e svuota la lista "" ed aggiorna il counter riciclando la sua lunghezza (che sarà per forza di cose 0)

clearButton.addEventListener("click", function () {
  list.innerHTML = ""
  updateCounter()
})
