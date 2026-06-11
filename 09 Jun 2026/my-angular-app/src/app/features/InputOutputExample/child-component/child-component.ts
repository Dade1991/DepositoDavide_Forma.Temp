import { HighlightsDirectives } from './../../MorningExercise/Directives/highlights-directives';
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  @Input() childCounter: number = 0;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  increment(): void {
    this.counterChange.emit(++this.childCounter);
  }

  decrement(): void {
    this.counterChange.emit(--this.childCounter);
  }

  // migliore sintassi per input ed output - RISPETTO A QUELLA SOPRA (minuscole!!)

  childCounterSignal = input<number>(0);
  counterChangeSignal = output<number>();

  incrementSignal(): void {
    this.counterChangeSignal.emit(this.childCounterSignal() + 1);
  }

  HighlightsDirectivescrementSignal(): void {
    this.counterChangeSignal.emit(this.childCounterSignal() - 1);
  }
}
