import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card-component',
  imports: [],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {
  // Inzializzo gli input Signals

  nameSignal = input<string>('');
  priceSignal = input<number>(0);
  availableSignal = input<boolean>(true);
}
