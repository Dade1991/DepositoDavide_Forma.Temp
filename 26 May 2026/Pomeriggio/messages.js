// Importo il modulo built-in fs di Node.js.
// Serve per lavorare con il file system: leggere, scrivere, cancellare file, ecc.

const fs = require(`fs`)

// Importo il modulo path, utile per creare percorsi corretti
// in modo indipendente dal sistema operativo.

const path = require(`path`)

// Definisco la funzione richiesta dall'esercizio.
// Riceve come parametro il nome del file da leggere.

function showMessage(fileName) {
  // fs.readFile legge il contenuto del file in modo asincrono.
  // Parametri:
  // - percorso del file
  // - codifica del testo
  // - funzione callback eseguita quando la lettura è terminata

  fs.readFile(fileName, `utf8`, (error, content) => {
    // Se c'è un error, lo mostro e interrompo la funzione.

    if (error) {
      console.error(`Error retring the file: ${fileName}`, error.message)
      return
    }

    // Se tutto va bene, stampo nel terminale il contenuto letto.

    console.log(`File content: ${fileName}`)
    console.log(content)
  })
}

// Mostra alcune informazioni su un file:
// - se esiste
// - dimensione in byte
// - se è un file vero e proprio
// - se è una cartella

function showFileInfo(fileName) {
  const fullPath = path.join(__dirname, fileName)

  // stat recupera le informazioni del file/cartella.

  fs.stat(fullPath, (error, stats) => {
    if (error) {
      console.error(`Error retring the file: ${fileName}`, error.message)
      return
    } else {
      console.log(`Info about file: ${fileName}`)
      console.log(`File dimension:`, stats.size, ` byte`)
      console.log(`It is a file? `, stats.isFile())
      console.log(`It is a folder? `, stats.isDirectory())
    }
  })
}

// Esporto la funzione, così potrà essere usata in server.js.
// Con module.exports rendo disponibile all'esterno ciò che voglio esportare.

module.exports = { showMessage, showFileInfo }
