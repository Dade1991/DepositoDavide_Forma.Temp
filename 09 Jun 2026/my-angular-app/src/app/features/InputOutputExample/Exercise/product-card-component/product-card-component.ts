import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card-component',
  imports: [],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {
  // Inzializzo gli input Signals

  // input() crea un INPUT REATTIVO (Signal) che riceve dati dal parent (Padre)

  // Inizializzo stringa vuota

  nameSignal = input<string>('');

  // Inizializzo numero a 0

  priceSignal = input<number>(0);

  // Inizializzo boolean a false

  availableSignal = input<boolean>(false);
}

// NB: i SIGNALS devono essere richiamati come funzioni, non come variabili
