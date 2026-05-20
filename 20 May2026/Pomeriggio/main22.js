// Identifico gli elementi dell'html che salvo in variabili

let btnLoading = document.getElementById("btnLoading")
let output = document.getElementById("output")

// Funzione per il recupero dei dati degli utenti

function getUserData() {
  // Ritorna una nuova promessa (risolta > ok OPPURE rigettata > non ok)
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false // per simulare errore, cambiare a TRUE

      if (error) {
        // Se finisce nella casisitica di errore, verrà restituito un nuovo errore
        reject(new Error("Error has occured during loading. Please try again."))
      } else {
        // Se finisce nella casistica positiva, verrà restituito il payload dal DB (simulato in questo caso)
        resolve({
          name: "Marione",
          surname: "Rossi",
          role: "Full-Stack Developer",
          isActive: true,
        })
      }
    }, 2000)
  })
}

// Inizializziamo la funzione asincrona (che rende anche getUserData asincrona in quanto al suo interno e con una promise) che gestisce il caricamento dei dati

async function loadUserData() {
  // Quando parte la funzione viene subito fornito un messaggio all'utente che gli comunica che "sta cercando" (o meglio, recuperando!)

  output.textContent = "Loading on-going... please wait!"

  // Aggiungo lo stile CSS per lo stato di "loading"
  output.classList.add("loading")

  // Rimuovo gli eventuali stili CSS di successo o di errore
  output.classList.remove("success", "error")

  try {
    // Attendo il completamento della Promise

    let user = await getUserData()

    // Se la Promise è andata a buon fine, verrà modificato il <p> in html in accordo ai dati richiesti
    // ${} serve per rendere una parte html dinamica, con logica JS al suo interno

    output.innerHTML = `
    Nome: ${user.name} <br>
    Surname: ${user.surname}<br>
    Role: ${user.role}<br>
    Is active: ${user.isActive}
    `

    // Rimuovo lo stile CSS per lo stato di "loading"

    output.classList.remove("loading")

    // Aggiungo lo stile CSS per lo stato di "successo"

    output.classList.add("success")
  } catch (error) {
    // Mostro il messaggio che ho compilato nella funzione di Promise e lo restituisco all'utente

    output.textContent = error.message

    // Rimuovo lo stile CSS per lo stato di "loading"

    output.classList.remove("loading")

    // Aggiungo lo stile CSS per lo stato di "errore"

    output.classList.add("error")
  }
}

// btnLoading ascolterà l'evento quando triggerato ed avvierà la funzione asincrona che avvierà la funzione di Promise

btnLoading.addEventListener("click", loadUserData)
