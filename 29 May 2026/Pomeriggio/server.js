// Le API REST del Negozio di Videogiochi
// Obiettivo didattico: Configurazione sistematica di un'architettura server Express.js, gestione formale degli endpoint di instradamento e serializzazione di payload in formato JSON.

// Specifiche di implementazione richieste:

// 1. Inizializzare un ambiente Node.js coerente mediante il comando npm init -y ed installare la dipendenza di Express.js. Strutturare il punto di ingresso configurando il server in ascolto sulla porta di rete 5000.

// 2. Dichiarare a livello di codice un array globale immutabile denominato videogiochi contenente oggetti semistrutturati hardcoded (ciascuno provvisto dei campi: id numerico, titolo stringa e piattaforma stringa).

// 3. Implementare l'endpoint con metodo GET /api/giochi. La funzione deve restituire lo status HTTP 200 unito all'intero array serializzato in formato JSON.

// 4. Implementare l'endpoint dinamico con metodo GET /api/giochi/:id. La callback deve estrarre il parametro dall'URL (req.params.id), effettuare una scansione filtrata dell'array tramite il metodo nativo .find() e restituire il singolo oggetto individuato. Qualora l'ID non corrisponda a nessun elemento, forzare l'invio dello status HTTP 404 accoppiato a un payload JSON strutturato: { errore: "Risorsa non individuata nel sistema" }.

// =========================================================================================

// ====================================== CONFIG

// Importo la libreria Express nel progetto
// l'espressione `require` mi serve per caricare il modulo installato con npm

const express = require(`express`)

// Creo l'applicazione Express: da questo momento `app` repperesenta il server da configurare

const app = express()

// Inizializzo una variabile alla quale assegno il numero di porta che mi posso richiamare a piacere con `PORT`

require(`dotenv`).config()

const PORT = process.env.PORT || 5000

// ====================================== JSON

// Ora creo un array dove inserirò degli oggetti (coppia chiave-valore, come un JSON che qui viene simulato

const videogamesContainer = [
  { id: 1, title: `Metal Gear Solid IV`, platform: `PS3`, hasOnline: true },
  { id: 2, title: `Destiny`, platform: [`PS4`, `Xbox X`], hasOnline: true },
  {
    id: 3,
    title: `Apex Legends`,
    platform: [`PS4`, `Xbox X`, `PS5`, `Xbox Series X`],
    hasOnline: true,
  },
  {
    id: 4,
    title: `Starfield`,
    platform: [`PS5`, `Xbox Series X`],
    hasOnline: true,
  },
  {
    id: 5,
    title: `Fallout 76`,
    platform: [`PS4`, `Xbox X`, `PS5`, `Xbox Series X`],
    hasOnline: true,
  },
  {
    id: 6,
    title: `Pokemon Emerald Version`,
    platform: `Gameboy`,
    hasOnline: false,
  },
]

// ====================================== APIs

// ========= GET === /api/videogames

// Interrogo il server sull'endPoint `/api/videogames` per recuperare tutta la lista di videogame

app.get(`/api/videogames`, (req, res) => {
  // rispondo con status 200 - OK e restituisco tutti i videogame

  res.status(200).json(videogamesContainer)
})

// ========= GET ===  /api/videogames/:id

// Interrogo il server sull'endPoint `/api/videogames/:id` per recuperare un videogame specifico tramite l'id (in modo dinamico)

app.get(`/api/videogames/:id`, (req, res) => {
  // Inizializzo una costante dove `catturo` l'id grazie a req.params.id

  const videogameID = req.params.id

  // Inizializzo una costante dove verifico che l'id passato dall'endPoint sia uguale ad almeno un id nell'array

  const foundedVideogame = videogamesContainer.find((videogame) => {
    videogame.id === videogameID
  })

  // Se non viene trovato, lancio errore (sia di stato 404 che un messaggio di errore)

  if (!foundedVideogame) {
    return res.status(404).json({ error: `Game not found` })

    // Se viene trovato, restituisco status 200 - OK ed il gioco singolo trovato
  } else {
    res.status(200).json(foundedVideogame)
  }
  // Rispondo con status
  res.status()
})

// ====================================== SERVER STARTER

// Abbiamo detto che `app` rappresenta il server, perciò lo richiamiamo e lo avviamo (lo mettiamo in ascolto sulla rete) grazie al meotodo `.listen()` al cui interno inseriamo la porta (o la costante configurata equivalente)

app.listen(PORT, () => {
  // Per conferma dell'avvenuto avvio del server, console.log

  console.log(`Server has started on http://localhost:${PORT}`)
})

// PER LANCIARE CHIAMATE API DA TERMINALE

// ========== (GET) ==========

// curl http://localhost:5000/api/videogames

// ========== (GET - include anche gli headers `-i`) ==========

// curl -i http://localhost:5000/api/videogames

// ========== (POST - include anche gli headers `-i`) ==========

// curl -i -X POST http://localhost:5000/api/videogames -H "Content-Type: application/json" -d '{"title": "Elden Ring", "platform": "PC"}'

// alternativa

// curl -i --json '{"title": "Pokemon Emerald Version", "platform": "PS4"}' http://localhost:5000/api/videogames
