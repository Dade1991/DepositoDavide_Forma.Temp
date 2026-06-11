import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-price-component',
  imports: [],
  templateUrl: './price-component.html',
  styleUrl: './price-component.css',
})
export class PriceComponent {
  // Inizializzo signal a valore iniziale 100 (netto)

  netPrice = signal(100);

  // Inizializzo signal a valore iniziale 22 (iva)

  ratePrice = signal(22);

  // INizializzo un singnal computed che si occuperà di calcolare il valore del prezzo lordo

  grossPrice = computed(() => {
    return this.netPrice() * (1 + this.ratePrice() / 100); // 1 + ( 22/100 ) = 1,22 per calcolo matematico
  });

  // Inizializzo funzione per ascoltare l'evento di change (input di HTML) e lo imposto come nuovo valore di netPrice che mi restituirà il calcolo dell'iva con il nuovo valore inserito

  priceChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Devo inizializzare una nuova varibile per castare il valore di input da String a Number
    const newValue = Number(input.value);
    this.netPrice.set(newValue);
  }
}
