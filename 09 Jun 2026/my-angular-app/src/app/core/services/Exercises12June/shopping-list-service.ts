import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  // in Angular: quando più componenti devono lavorare sugli stessi dati, il service evita duplicazioni, confusione e passaggi inutili di informazioni (padre/figlio > padre/figlio > etc. simile a Redux, se vogliamo...!)

  // Questo service sarà il punto centrale dei dati della nostra lista

  // Concetto > invece di salvare gli items dentro un singolo componente, li salviamo qui dentro, così più componenti possono:

  // - leggere gli stessi dati
  // - modificarli
  // - restare sincronizzati automaticamente

  // È il concetto di "sorgente unica di verità"

  // ==========

  // Inzializzo il ns "contenitore" dove salveremo i nostri items (Service, fungerà da magazzino di tutti i dati di tutti i componenti: invece di salvare la lista dentro un solo componente, la mettiamo in un servizio condiviso così entrambi i componenti potranno leggere e modificare la stessa sorgente di "verità")

  // "private" significa che nessun componente esterno può accedervi direttamente

  // Questa è una scelta molto utile perché:

  // - impedisce modifiche casuali dall'esterno
  // - ci obbliga a passare dai metodi del service
  // - centralizza la logica in un solo punto

  // _items è una signal scrivibile (WritableSignal)
  // signal([]) crea uno stato reattivo

  private _items = signal<string[]>([]);

  // Inizializzo un'altra variabile che mi permetterà di accedere per la lettura ad _items

  // items è la versione "pubblica" della signal.

  // asReadonly() crea una signal leggibile ma non modificabile dai componenti

  // Quindi da un componente potremo fare: this.shoppingListService.items()

  // ma non potremo fare:
  // this.shoppingListService.items.set(...)
  // this.shoppingListService.items.update(...)

  // Questo protegge i dati private

  readonly items = this._items.asReadonly();

  // ==========

  // Inizializziamo una funzione per l'aggiunta di un item all'array degli items
  // Usiamo update() perché con le signal non dobbiamo modificare direttamente l'array esistente con push()
  // Dobbiamo restituire un nuovo array

  addItem(productName: string): void {
    // Eseguo un trim() per rimuovere eventuali spazi vuoti

    const trimProductName = productName.trim();

    // Se trim() risulterà false, ritorniamo niente

    if (!trimProductName) {
      return;

      // Altrimenti, eseguiamo l'update() sulla signal privata
      // update() serve perché con le signal è buona pratica non modificare direttamente l'array esistente con push() ma restituiamo un nuovo array che comprenderà i valori vecchi e nuovi (appena inserito)
    } else {
      this._items.update((currentItem) => [...currentItem, trimProductName]);
    }
  }

  // Inizializziamo una funzione per la rimozione di un item tramite bottone integrato all'elemento

  // Anche qui usiamo update() e restituiamo un nuovo array
  // filter() filtra tutti gli elementi tranne quello con l'indice da eliminare

  removeItem(itemIndex: number): void {
    this._items.update((currentItems) => {
      return currentItems.filter((item, ind) => {
        return ind !== itemIndex;
      });
    });
  }
}

// NB:

// _items = stato interno, modificabile solo dal service

// items = stato pubblico, leggibile dai componenti ma non alterabile direttamente
