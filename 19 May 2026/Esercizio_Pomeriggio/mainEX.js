// 1. Rubrica semplice
// Crea un array di contatti, dove ogni contatto ha name, phone, email.
// Scrivi funzioni per:

// - stampare tutti i contatti;

// - cercare un contatto per nome;

// - aggiungere un nuovo contatto;

// - contare quanti contatti ci sono in totale.

let contacts = [
  {
    name: "Clara",
    phone: 33933322266,
    email: "claretta@amour.com",
  },
  {
    name: "Rik",
    phone: 33845454571,
    email: "rik@gmail.com",
  },
  {
    name: "Tiz",
    phone: 32755599900,
    email: "tiz@google.com",
  },
  {
    name: "Mirko",
    phone: 33500334466,
    email: "mirko@gmail.com",
  },
]

function showAllContacts() {
  let allContactDetails = []

  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i]
    console.log(contact)
  }
}

function findByName(nameToFind) {
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i]
    if (contact.name === nameToFind) {
      return contact
    }
  }
  return "Invalid name, please try with another name."
}

function addNewContact(contacts, name, phone, email) {
  if (name === undefined || phone === undefined || email === undefined) {
    return "Missing data."
  }
  let newContact = {
    name: name,
    phone: phone,
    email: email,
  }

  contacts.push(newContact)

  return contacts
}

showAllContacts()
console.log(findByName("Tiz"))
addNewContact(contacts, "Luca", 33123445763, "luchino@boh.net")
showAllContacts()
