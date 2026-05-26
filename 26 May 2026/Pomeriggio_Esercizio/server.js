const http = require(`http`) // Importo modulo HTTP per creazione server con Node.js

const fs = require(`fs`) // Importo modulo FS per lettura file HTML

const path = require(`path`) // Importo modulo PATH per costruzione percorsi corretti

const prompt = require("prompt-sync")() // Creo prompt per insirire dati da terminale

const port = 3000 // Inizializzo porta in una variabile

const selection = prompt(
  "Scegli una pagina: a = Home, b = Creatore, c = Calcolatrice: ",
)
  .trim()
  .toLowerCase() // Leggo il valore scritto da terminale

let chosenSelection = `` // Inizializzo una variabile vuota che conterrà il nome del file da inviare

// Se l'utente seleziona `a` ==> reindirizzo in /home

if (selection === `a`) {
  chosenSelection = `home.html`

  // Se l'utente seleziona `b` ==> reindirizzo in /creatorInfos
} else if (selection === `b`) {
  chosenSelection = `creatorInfos.html`

  // Se l'utente seleziona `c` ==> reindirizzo in /calculator
} else if (selection === `c`) {
  chosenSelection = `calculator.html`

  // Altrimenti, se non si avvera nulla di quanto sopra o l'utente inserisce un'altra lettera ==> reindirizzo in /home
} else {
  chosenSelection = `home.html`
}

// Inizializzo il server

const server = http.createServer((req, res) => {
  // Costruisco il percorso completo del file da leggere
  // __dirname rappresenta la cartella in cui si trova questo file server.js
  // path.join unisce correttamente cartella + nome file

  const filePath = path.join(__dirname, chosenSelection)

  // Leggo il file HTML scelto
  // 'utf8' serve per leggere il contenuto come testo

  fs.readFile(filePath, `utf8`, (error, data) => {
    // Se c'è un errore durante la lettura del file, lancio errore per l'utente

    if (error) {
      // Risultato chiamata e che tipo di risposta alla chiamata

      res.writeHead(500, { "Content-Type": "text/html" })
      res.end(`<h1>500 - Internal server error</h1>`)
      return

      // Altrimenti, fornisco risposta positiva 200 dal server e mostro i dati all'utente
    } else {
      // Risultato chiamata e che tipo di risposta alla chiamata

      res.writeHead(200, { "Content-Type": "text/html" })
      res.end(data)
    }
  })
})

// Inizializzo Server

server.listen(port, () => {
  console.log(`Server succesfully started on http://localhost:${port}`)
})
