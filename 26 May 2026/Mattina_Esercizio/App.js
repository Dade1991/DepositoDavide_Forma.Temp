// Inizializzo http

const http = require("http")

// Collegamento (import) con la pagina dedicata alle funzioni

const gestioneTesto = require("./GestioneTesto")

// Crea il server

const server = http.createServer((req, res) => {
  // Imposto l'url sul quale intervenire

  const url = new URL(req.url, "http://localhost:3000")

  // Inizializzo varibili con cui definisco i parametri di ricerca nell'url

  let text = "FullStack"
  let word = "l"

  // Imposta il tipo di contenuto della risposta

  res.writeHead(200, { "Content-Type": "text/plain" })

  if (!text || !word) {
    res.end("end")
    return
  }

  // Inizializzo varibiali dove salvo l'import esterno

  let textToMaiusc = gestioneTesto.textToMaiusc(text)
  let textCounterCharacters = gestioneTesto.textCounterCharacters(text)
  let textContainsLetter = gestioneTesto.textContainsLetter(text, word)

  // Inizializzo variabile per risposta utente

  let results =
    "Original Text: " +
    text +
    "\n" +
    "Text to capital: " +
    textToMaiusc +
    "\n" +
    "Number of words into text: " +
    textCounterCharacters +
    "\n" +
    'Text contains the letter "' +
    word +
    '": ' +
    textContainsLetter

  // Invia il testo al browser

  res.end(results)
})

// Avvia il server sulla porta 3000

server.listen(3000, () => {
  console.log(
    "Questo è un console.log: Server avviato su http://localhost:3000",
  )
})
