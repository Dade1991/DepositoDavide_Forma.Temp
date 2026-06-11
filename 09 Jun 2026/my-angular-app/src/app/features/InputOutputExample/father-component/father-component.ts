import { Component } from '@angular/core';
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
}
