// const prompt = require("prompt-sync")()

// Inizializzo array con objects (prodotti con chiavi-valori)

let products = [
  {
    name: "pane",
    price: 2,
    quantity: 10,
    brand: "mulino bianco",
  },
  {
    name: "latte",
    price: 1.5,
    quantity: 5,
    brand: "granarolo",
  },
  {
    name: "pasta",
    price: 1.3,
    quantity: 0,
    brand: "barilla",
  },
  {
    name: "biscotti",
    price: 3,
    quantity: 8,
    brand: "mulino bianco",
  },
]

// ------------ FUNZIONI ------------

// Inizializzo funzione che verifica che il prodotto abbia le chiavi-valori richieste da programma (gestione errori)

function isProductValid(product) {
  if (
    product.name === undefined ||
    product.price === undefined ||
    product.quantity === undefined
  ) {
    return false
  } else {
    return true
  }
}

// Inizializzo funzione che calcola la somma dei prezzi dei prodotti nell'array (magazzino)

function warehouseTotPriceAmount(productArray) {
  // Inizializzo un counter di prezzi a 0
  let totPriceSum = 0

  // Ciclo l'array dei prodotti per la sua interezza, controllo che il prodotto sia valido e, se lo è, sommo al prezzo totale tenuto in memoria, l'eventale nuovo prezzo (considenrando la quantità di quell'item)

  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i]
    if (isProductValid(product)) {
      totPriceSum = totPriceSum + product.price * product.quantity
    }
  }

  return totPriceSum
}

// Inizializzo funzione che trova il prodotto con il prezzo piu alto

function findMostExpensiveProduct(productArray) {
  // Inizializzo una variabile che parte con valore null
  let maxPrice = null

  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i]

    if (isProductValid(product)) {
      if (maxPrice === null || product.price > maxPrice.price) {
        maxPrice = product
      }
    }
  }

  return maxPrice
}

// Inizializzo funzione per filtrare gli oggetti con il quantità maggiore di 0

function isProductAvailable(productArray) {
  // Inizializzo un' array che conterrà tutti i prodotti disponibili
  let available = []

  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i]

    if (isProductValid(product) && product.quantity > 0) {
      available.push(product)
    }
  }

  return available
}

// Inizializzo funzione che aggiunge una chiave-valore nuova (product.available: true/false) ciclando l'array dei prodotti ed applicando la nuova chiave-valore a ciascun prodotto

function addPropertyToProduct(productArray) {
  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i]

    if (isProductValid(product)) {
      product.available = product.quantity > 0
    }
  }
}

// Inizializzo funzione che cicla l'array di prodotti, estrapola il nome, e lo pusha in un secondo array contenente solo i nomi dei prodotti

function productName(productArray) {
  let productNameArray = []

  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i]

    if (isProductValid(product)) {
      productNameArray.push(product.name)
    }
  }

  return productNameArray
}

function productBrand(productArray) {
  let brands = []

  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i]

    if (isProductValid(product)) {
      brands.push(product.brand)
    }
  }

  return brands
}

// ----------------------------------

// Controllo che l'array non sia vuoto, se è vuoto stampo un warning (gestione errori), se no stampo il magazzino evocando le funzioni

if (products.length === 0) {
  console.log("Warehouse is empty.")
} else {
  // Evocazioni delle funzioni

  addPropertyToProduct(products)

  let totValue = warehouseTotPriceAmount(products)

  let maximumPrice = findMostExpensiveProduct(products)

  let availble = isProductAvailable(products)

  let itemsName = productName(products)

  let brandsDivision = productBrand(products)

  // Stampe log:

  console.log("Complete warehouse product's list:")
  console.log(products)

  console.log("Warehouse total value:")
  console.log(totValue)

  console.log("Most expensive product value in warehouse:")
  console.log(maximumPrice)

  console.log("Just name of the product in warehouse:")
  console.log(itemsName)

  console.log("Product's brand:")
  console.log(brandsDivision)
}
