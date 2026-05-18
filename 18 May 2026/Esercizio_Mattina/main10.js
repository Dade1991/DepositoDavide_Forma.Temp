// Esercizio UNO

const prompt = require("prompt-sync")()

let menuChoice = ""
let extra = ""

menuChoice = prompt(
  "Choose a main dish from pasta, pizza & burger. Insert here your selection:",
)

switch (menuChoice) {
  case "pasta":
    console.log("You have chosen: Pasta")
    extra = prompt("Insert here an extra dressing:")

    console.log(`Your order consist of: Pasta, with ` + extra + ` topping.`)

    break

  case "pizza":
    console.log("You have chosen: Pizza")
    extra = prompt("Insert here an extra dressing:")

    console.log(`Your order consist of: Pizza, with ` + extra + ` topping.`)

    break

  case "burger":
    console.log("You have chosen: Burger")
    extra = prompt("Insert here an extra dressing:")

    console.log(`Your order consist of: Burger, with ` + extra + ` topping.`)

    break

  default:
    console.log("Not a valid selection")
}

// Esercizio DUE

let role1 = ""
let role2 = ""
let role3 = ""

role1 = prompt("Insert first Role: ")
role2 = prompt("Insert second Role: ")
role3 = prompt("Insert third Role: ")

switch (role1) {
  case "player":
    console.log("Player: can play the game.")
    break

  case "moderator":
    console.log("Moderator: can manage reports.")
    break

  case "admin":
    console.log("Admin: full permissions.")
    break

  default:
    console.log("Unknown role.")
}

switch (role2) {
  case "player":
    console.log("Player: can play the game.")
    break

  case "moderator":
    console.log("Moderator: can manage reports.")
    break

  case "admin":
    console.log("Admin: full permissions.")
    break

  default:
    console.log("Unknown role.")
}

switch (role3) {
  case "player":
    console.log("Player: can play the game.")
    break

  case "moderator":
    console.log("Moderator: can manage reports.")
    break

  case "admin":
    console.log("Admin: full permissions.")
    break

  default:
    console.log("Unknown role.")
}

if (
  (role1 === "player" || role2 === "player" || role3 === "player") &&
  (role1 === "moderator" || role2 === "moderator" || role3 === "moderator")
) {
  console.log("You are both Player and Moderator")
}

if (role1 === "admin" || role2 === "admin" || role3 === "admin") {
  console.log("You are an admin")
}
