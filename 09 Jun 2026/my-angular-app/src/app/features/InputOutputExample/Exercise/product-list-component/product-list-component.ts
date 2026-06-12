import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card-component/product-card-component';

@Component({
  selector: 'app-product-list-component',
  imports: [ProductCardComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  // Inzializzo Array di prodotti con coppie chiave/valore (tipo file JSON)
  productsArray = [
    { name: `Ibanez`, price: 450, available: true },
    { name: `LesPaul`, price: 900, available: false },
    { name: `Schecter`, price: 1100, available: true },
  ];
}
