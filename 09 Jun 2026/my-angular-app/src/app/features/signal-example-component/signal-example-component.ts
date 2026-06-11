import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal-example-component',
  imports: [],
  templateUrl: './signal-example-component.html',
  styleUrl: './signal-example-component.css',
})
export class SignalExampleComponent {
  // Written Signal

  counter = signal(0);

  increment(): void {
    // this.counter.set(this.counter() + 1);
    this.counter.update((value) => value + 1);
  }
  decrement(): void {
    this.counter.set(this.counter() - 1);
    // this.counter.update((value) => value - 1);
  }

  reset(): void {
    this.counter.set(0);
  }

  // Computed Signal

  double = computed(() => {
    return this.counter() * 2;
  });

  // Effect Signal

  nome = signal('Davide');

  logRighe: string[] = [];

  private _log = effect(() => {
    const riga = `contatore = ${this.counter} | nome= ${this.nome}`;
    this.logRighe = [riga, ...this.logRighe].slice(5);
  });

  updateNome(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.nome.set(input.value);
  }

  saluto = computed(() => 'Ciao, ' + this.nome() + '!');
}
