import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-father-component',
  imports: [ChildComponent],
  templateUrl: './father-component.html',
  styleUrl: './father-component.css',
})
export class FatherComponent {
  counter: number = 0;

  onCounterChange(newValue: number): void {
    this.counter = newValue;
  }

  // migliore sintassi per input ed output - RISPETTO A QUELLA SOPRA (minuscole!!)

  counterSignal = signal<number>(0);

  onCounterChanged(newValue: number): void {
    this.counter = newValue;
  }

  onCounterChangedSignal(newValue: number): void {
    this.counterSignal.set(newValue);
  }
}
