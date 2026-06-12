import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from '../../../../core/services/Exercises12June/shopping-list-service';

@Component({
  selector: 'app-add-item-component',
  imports: [FormsModule],
  templateUrl: './add-item-component.html',
  styleUrl: './add-item-component.css',
})
export class AddItemComponent {
  // Inizializzo variabile privata dove inject(ShoppingListService) ci fornirà il riferimento al service condiviso

  private shoppingListService: ShoppingListService = inject(ShoppingListService);

  // Inizializzo variabile per l'input utente a vuota (all'inzio sarà vuota)

  productName = '';

  // Inizializzo una funzione che al click, richiamerà il metodo addItem (presente nel service che eseguirà anche i controlli)

  onAddItem(): void {
    this.shoppingListService.addItem(this.productName);

    // Reinizializzo la variabile productName per l'input utente a vuota (eseguo un reset del campo sostanzialmente)

    this.productName = '';
  }
}
