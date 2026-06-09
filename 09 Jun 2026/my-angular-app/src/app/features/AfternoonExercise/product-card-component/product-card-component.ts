import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card-component',
  imports: [FormsModule],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {

// =====

name: string = "Zaino da montagna"
brand: string = "AlpinePro"
price: number = 89.90
discount: number = 0.20
stock: number = 10
imageUrl: string = "https://picsum.photos/300/200"
tags: string[] = ["outdoor", "sport", "waterproof"]
available: boolean = true

// =====

purchase(): void {
  if (this.stock > 0) {
    this.stock--
  }
  this.available = this.stock > 0
  }

finalPrice(): number {
  return +
  (this.price - (this.price * this.discount)).toFixed(2)
  }

}
