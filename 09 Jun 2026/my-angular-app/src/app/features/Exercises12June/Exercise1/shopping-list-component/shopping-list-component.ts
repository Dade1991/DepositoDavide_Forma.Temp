import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../../../../core/services/Exercises12June/shopping-list-service';

@Component({
  selector: 'app-shopping-list-component',
  imports: [],
  templateUrl: './shopping-list-component.html',
  styleUrl: './shopping-list-component.css',
})
export class ShoppingListComponent {
  // inject(ShoppingListService) ci fornirà il riferimento al service condiviso
  // Aggiungiamo proctected (accessibile a questo componente ed il suo template) e readonly (per leggere i valori senza poterli modificare)

  protected readonly shoppingListService: ShoppingListService = inject(ShoppingListService);

  // Inzializzo una funzione che al click nel template, richiamerà il metodo removeItem (presente nel service)

  onRemoveItem(itemIndex: number): void {
    this.shoppingListService.removeItem(itemIndex);
  }
}
