// Definisco una costante che contiene il nome della chiave usata in localStorage
// In questo modo evito di riscrivere la stringa "giocattoliNegozio" più volte nel codice

const STORAGE_KEY = "giocattoliNegozio"

// Dichiaro una funzione che serve a recuperare i giocattoli salvati nel browser

console.log(localStorage.getItem(STORAGE_KEY)) // Console.log dimostrativo su browser del contenirore (etichettato) STORAGE_KEY

function getToys() {
  // Leggo da localStorage il valore associato alla chiave STORAGE_KEY
  // localStorage restituisce una stringa oppure null se non trova nulla

  const toysJSON = localStorage.getItem(STORAGE_KEY)

  // Utilizzo l'operatore ternario
  // Se toysJSON esiste, lo trasformo da stringa JSON in array JavaScript con JSON.parse()
  // Se invece non esiste ancora niente, restituisco un array vuoto (controllo)

  return toysJSON ? JSON.parse(toysJSON) : []
}

// Dichiaro una funzione che serve a salvare l'array dei giocattoli nel browser

function saveToys(toys) {
  // Converto l'array JavaScript in stringa JSON usando JSON.stringify()
  // e lo salvo in localStorage con la chiave STORAGE_KEY

  localStorage.setItem(STORAGE_KEY, JSON.stringify(toys))
}

// Dichiaro una funzione che viene eseguita quando il form viene inviato

function addToy(event) {
  // Blocca il refresh della pagina che sarebbe automaticamente fatto, se no

  event.preventDefault()

  // Inizializzo variabili per il recupero dei vari campi del form

  const nome = document.getElementById("nome").value.trim()
  const categoria = document.getElementById("categoria").value
  const prezzo = document.getElementById("prezzo").value
  const eta = document.getElementById("eta").value.trim()
  const disponibile = document.getElementById("disponibile").checked

  // Creo un nuovo oggetto JavaScript che rappresenta il giocattolo inserito nel form (Struttura uguale a JSON, altrimenti non funziona)

  const nuovoGiocattolo = {
    nome: nome,
    categoria: categoria,
    prezzo: prezzo,
    etaConsigliata: eta,
    disponibile: disponibile,
  }

  // Richiamo la funzione getToys() per recuperare l'elenco attuale dei giocattoli salvati

  const toys = getToys()
  // Aggiungo il nuovo elemento all'interno dell'array degli elementi

  toys.push(nuovoGiocattolo)

  // Salvo l'array aggiornato
  saveToys(toys)

  // Inizializzo variabile con cui vado a richiamre l'elemento HTML per mostrare il messaggio di avvenuto salvataggio

  const messaggio = document.getElementById("messaggio")
  messaggio.textContent = "Giocattolo salvato correttamente."

  // Resetto i campi del form, una volta finito tutto

  document.getElementById("toyForm").reset()
}

// Inizializzo funzione per mostrare la lista di giocattoli nella pagina dedicata

function showToyList() {
  // Inizializzo funzione che richiama l'Id toyList nella pagina della lista dei giocattoli

  const toyList = document.getElementById("toyList")

  // Grazie a controllo eseguito tramite IA, ho aggiunto la seguente riga di codice che: verifica che toyList non sia null, ovvero vuoto. Se lo fosse, darebbe un errore
  // Grazie al controllo ed al return, se la condizione dovesse risultare null (vuoto), blocca la funzione e, con il secondo condizionale più a basso, mostra un messaggio all'utnete

  if (!toyList) return

  // Richiamo la funzione getToys() per recuperare l'elenco attuale dei giocattoli salvati

  const toys = getToys()

  // Eseguo un check per verificare che l'array non sia vuoto, se lo è, manipolo il DOM aggiungendo un messaggio di errore per l'utente

  if (toys.length === 0) {
    toyList.innerHTML = '<p class="emptyMessage">Nessun giocattolo salvato.</p>'
    return
  }

  // Svuoto il contenitore toyLIst prima di inseire altri elementi

  toyList.innerHTML = ""

  // Ciclo l'array di giocattoli e per ciascuno di loro manipolo il DOM creando dinamicamente una Card

  // Passo come parametri l'oggetto "toy" che conterrà tutte le proprietà (nome, categoria, prezzo, età consigliata, se disponibile) e l'index dell'array (solo per numerazione che parte da 0 - meramente grafica come scelta)

  toys.forEach((toy, index) => {
    // Inizializzo variabile per creazione di un Div (Card dinamica del singolo gioco aggiunto)
    const toyCard = document.createElement("div")

    // Aggiungo un classe CSS alla card

    toyCard.classList.add("toyItem")

    // Definisco la struttura della card ed i suoi campi dinamici utilizzando l'annotazione ${} per il dinamismo

    toyCard.innerHTML = `
      <h3>${index + 1}. ${toy.nome}</h3>
      <p><strong>Categoria:</strong> ${toy.categoria}</p>
      <p><strong>Prezzo:</strong> € ${toy.prezzo}</p>
      <p><strong>Età consigliata:</strong> ${toy.etaConsigliata}</p>
      <p><strong>Disponibilità:</strong> ${toy.disponibile ? "Disponibile" : "Non disponibile"}</p>
    `

    // Qui sopra utilizzo un operatore ternario per mostrare un messaggio o l'altro in base alla condizione > la prima si definisce "THRUTY", sarà quindi corrispondente ad un check true; la seconda sarà sempre "FALSY" sarà quindi corrispondente ad un checkbox false

    // Infine aggiungo la card al div dell'HTML

    toyList.appendChild(toyCard)

    // Ho aggiunto un console.log per vedere da browser se l'oggetto venisse visualizzato correttamente

    console.log(toy)
  })
}

// Inizializzo funzione che mostra il riepilogo dei giocattoli salvati

function showSummary() {
  // Recupero dal DOM il contenitore HTML con id summary

  const summary = document.getElementById("summary")

  // Se il contenitore non esiste, interrompo la funzione per evitare errori

  if (!summary) return

  // Recupero l'array dei giocattoli salvati nel localStorage

  const toys = getToys()

  // Controllo se l'array è vuoto

  if (toys.length === 0) {
    // Se non ci sono dati, mostro un messaggio all'interno del div summary

    summary.innerHTML =
      '<p class="emptyMessage">Nessun dato disponibile per il riepilogo.</p>'
    return
  }

  // Calcolo il numero totale dei giocattoli salvati

  const totaleGiocattoli = toys.length

  // Creo un array con le categorie senza duplicati
  // map() estrae tutte le categorie
  // Set rimuove i duplicati
  // [...] trasforma il Set in un array normale

  const categorie = [...new Set(toys.map((toy) => toy.categoria))]

  // Calcolo il prezzo medio
  // reduce() somma tutti i prezzi partendo da 0
  // poi divido la somma totale per il numero dei giocattoli

  const prezzoMedio =
    toys.reduce((tot, toy) => tot + toy.prezzo, 0) / totaleGiocattoli

  // Creo un array con i soli nomi dei giocattoli non disponibili
  // filter() seleziona i giocattoli non disponibili
  // map() prende solo il nome di ciascun giocattolo

  const nonDisponibili = toys
    .filter((toy) => !toy.disponibile)
    .map((toy) => toy.nome)

  // Inserisco nel div summary il riepilogo finale

  summary.innerHTML = `
    <p><strong>Numero totale di giocattoli:</strong> ${totaleGiocattoli}</p>
    <p><strong>Categorie disponibili:</strong> ${categorie.join(", ")}</p>
    <p><strong>Prezzo medio:</strong> € ${prezzoMedio.toFixed(2)}</p>
    <p><strong>Prodotti non disponibili:</strong> ${
      nonDisponibili.length
        ? nonDisponibili.join(", ")
        : "Nessun prodotto non disponibile"
    }</p>
  `
}

// Inizializzo funzione che all'avvio della pagina (grazie a "DOMContentLoaded" )

document.addEventListener("DOMContentLoaded", () => {
  // Recupero dal DOM il form con id toyForm

  const toyForm = document.getElementById("toyForm")

  // Controllo se il form esiste nella pagina corrente

  if (toyForm) {
    // Se il form esiste, ascolto l'evento submit e lo collego alla funzione addToy
    // Quando l'utente clicca sul pulsante invia, viene eseguita la funzione addToy()

    toyForm.addEventListener("submit", addToy)
  }

  // Chiamo la funzione che inizializza l'elenco dei giocattoli salvati
  // Funziona solo sulla pagina che contiene il Div con id toyList

  showToyList()

  // Chiamo la funzione che visualizza il riepilogo dei dati
  // Funziona solo sulla pagina che contiene il Div con id summary

  showSummary()
})
