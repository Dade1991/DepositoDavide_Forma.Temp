import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-binding-component',
  imports: [FormsModule],
  templateUrl: './binding-component.html',
  styleUrl: './binding-component.css',
})
export class BindingComponent {

  // ===== Interpolation =====
  // (One-Way : .ts > .html)
   username: string = "Davide"
   num: number = 10

  // ===== Property Binding =====
  // (One-Way : .ts > .html)
   imageUrl: string = "https://image.api.playstation.com/vulcan/ap/rnd/202009/2814/GGyEnCkIXoyiVlN9sRHkzUPo.png"
   imageWidth: number = 250

  // ===== Event Binding =====
  // (One-Way : .html > .ts)
  currentMsg: string = "Buongiorno"
  messages: string[] = ["Buongiorno", "Buon Pomeriggio", "Buona Sera", "Buona Notte"]
  index: number = 0

  saluta(): void {
    this.index += 1
      if(this.index >= this.messages.length)
      this.index=0
      this.currentMsg = this.messages[this.index]
  }

  resetUsername(): void {
    this.username=""
  }

  // ===== Two-Way Data Binding =====
  // (Two-Way : .html <-> .ts)

  // Lo verifichiamo direttamente con cio che abbiamo creato sopra

}
