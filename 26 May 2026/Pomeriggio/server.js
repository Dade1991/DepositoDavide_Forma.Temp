// Da qui avvio tutto

// Inzializzo una variabile per l'import del modulo con la funzione showMessage

const { showMessage, showFileInfo } = require(`./messages`)

// Inzializzo una variabile per l'import del modulo con la funzione showFileInfo

// Qui evoco la funzione showMessage indicando quali dei file dovrà mostrare con i relativi paths

showMessage(`./message.txt`)
showMessage(`./Index.html`)
showMessage(`./config.json`)
showMessage(`./README.md`)
// ---------------
showFileInfo(`./message.txt`)
showFileInfo(`./Index.html`)
showFileInfo(`./config.json`)
showFileInfo(`./README.md`)
