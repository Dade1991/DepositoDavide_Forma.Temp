// Il Convertitore di Stringhe Asincrono
// Obiettivo didattico: Assimilare i meccanismi di scomposizione temporale e astrazione sintattica mediante l'uso sequenziale di Callback, Promise e costrutti Async/Await.

// Specifiche di implementazione richieste:

// CALLBACK ================================================================================================

// 1. Sviluppare una routine denominata invertiStringaAsincrona(testo, callback). L'applicazione deve impostare un timer asincrono (setTimeout) con un delay di 1500ms in background. Al completamento, deve convertire la stringa in caratteri maiuscoli ed iniettarla come argomento della callback. Verificare l'esecuzione in console.

//

// Inizializzo la funzione che riceverà come parametri (argomenti):
// - testo ("Hello world 1")
// - callback (Si occuperò di trasformare il testo passato come argomento in MAIUSCOLO)

function invertiStringaAsincronaCALLBACK(text, callback) {
  // Aggiungo un log per controllare cosa stiamo leggendo a questo punto della funzione:
  // - testo: viene passato normalmente, non è ancora trasformato
  // - callback: giustamente non è ancora stata richiamata e ci arriva un messaggio di errore da console "anonymous"

  // Ascolto che dati arrivano a questo punto con un log

  console.log(text, callback)

  // Simulo un ritardo di 1.5 secondi nella risposta

  setTimeout(() => {
    // Inizializzo una variabile dove salvo l'operazione di trasformazione del testo

    const result = text.toUpperCase()

    // Ora passo la varibile result alla callback che la restituisce traformata

    callback(result)
  }, 1500)
}

// Invoco la funzione passandole i parametri:
// - testo
// - callback: ovvero la funzione di trasformazione del testo

invertiStringaAsincronaCALLBACK("Hello world 1", (result) => {
  // restituisco un log con result

  console.log("CALLBACK result:", result)
})

// PROMISE ================================================================================================

// 2. Effettuare il refactoring della funzione: rimuovere il parametro callback e forzare la funzione a restituire un'istanza di Promise. Qualora il parametro testo risulti essere una stringa vuota, la promessa deve invocare immediatamente il reject() distribuendo una stringa descrittiva di errore.

//

// Inizializzo la funzione che riceverà come parametro:
// - testo ("Hello world 2")

function invertiStringaAsincronaPROMISE(text) {
  // Indico il ritorno di una nuova Promise in risposta (che avrà come parametri i suoi risultati di Resolve o Rejecte)

  // Ascolto che dati arrivano a questo punto con un log

  console.log(
    "Ogni TEXT degli es. 2, 3 & 4, passerranno per questa funzione di Promise per essere trasformata e gestita:",
    text,
  )

  return new Promise((resolve, reject) => {
    // Eseguo una comparazione
    // Se il testo è vuoto:

    if (text === "") {
      // Gestisco l'errore della Promise che sarà quindi Reject e mostrera il messaggio relativo in console

      reject("PROMISE Error: text input field cannot be empty.")

      // Se c'è una stringa di testo:
    } else {
      // Simulo un ritardo con SetTimeout di 1.5 secondi

      setTimeout(() => {
        // Inizializzo una varibile result2 per creare un contenitore dove salvare il risultato della traformazione del testo in MAIUSCOLO

        const result2 = text.toUpperCase()

        // La Promise viene risolta e ritorno il valore di result2
        resolve(result2)

        // ritorno il log di result2

        return console.log("PROMISE result:", result2)
      }, 1500)
    }
  })
}

invertiStringaAsincronaPROMISE("Hello world 2")

// THEN & CATCH ================================================================================================

// 3. Consumare la Promise generata implementando dapprima la sintassi a catena con i metodi nativi .then() e .catch().

//

// richiamo la funzione di PROMISE e le passo un nuovo parametro "Hello world 3"

invertiStringaAsincronaPROMISE("Hello world 3")
  // il Then aspetterà l'arrivo della Promise, che farà le sue operazioni di trasformazione, e restituirà il risultato di tale operazione, stampando con log

  .then((result3) => {
    console.log("THEN & CATCH (PROMISE) result:", result3)
  })

  // il Catch catturerà l'eventuale errore generato nella Promise e lo gestirà catturandolo e mostrando l'errore all'utente

  .catch((error) => {
    console.log("THEN & CATCH (PROMISE) Error:", error)
  })

// ASYNC & AWAIT ================================================================================================

// 4. Creare un blocco funzionale separato marcato come async ed eseguire l'estrazione lineare del medesimo valore tramite l'operatore await racchiuso dentro un blocco di controllo try...catch.

//

// Inizializziamo una funzione ASYNC e le passiamo un parametro Text

async function invertiStringaAsincronaASYNCandAWAIT(text) {
  // Ascolto che dati arrivano a questo punto con un log

  console.log("ASYNC & AWAIT (PROMISE): received text:", text)

  // Utilizzo il Try per accogliere i risultati della Promise e restuirli

  try {
    // Inizializzo una variabile che aspetta il risultato della Promise

    const result4 = await invertiStringaAsincronaPROMISE(text)

    // Stampo e ritorno

    console.log("ASYNC & AWAIT (PROMISE) result:", result4)
    return result4

    // Utilizzo il Catch per cattuare l'eventuale errore che si sarà generato nella Promise e mostro un messaggio all'utente e lancio un errore
  } catch (error) {
    console.log("ASYNC & AWAIT (PROMISE) error:", error)
    throw error
  }
}

// Invocazione della funzione Async/Await

invertiStringaAsincronaASYNCandAWAIT("Hello world 4")
