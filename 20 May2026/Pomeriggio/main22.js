// Identifico gli elementi dell'html che salvo in variabili

let btnLoading = document.getElementById("btnLoading")
let output = document.getElementById("output")

function getUserData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false // per simulare errore, cambiare a TRUE

      if (error) {
        reject(new Error("Error has occured during loading. Please try again."))
      } else {
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

async function loadUserData() {
  output.textContent = "Loading on-going... please wait!"
  output.classList.add("loading")
  output.classList.remove("success", "error")

  try {
    let user = await getUserData()

    output.innerHTML = `
    Nome: ${user.name} <br>
    Surname: ${user.surname}<br>
    Role: ${user.role}<br>
    Is active: ${user.isActive}
    `

    output.classList.remove("loading")
    output.classList.add("success")
  } catch (error) {
    output.textContent = error.message

    output.classList.remove("loading")
    output.classList.add("error")
  }
}

btnLoading.addEventListener("click", loadUserData)
