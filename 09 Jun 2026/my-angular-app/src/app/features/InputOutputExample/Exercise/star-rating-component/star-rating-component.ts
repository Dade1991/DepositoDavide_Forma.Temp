import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-star-rating-component',
  imports: [],
  templateUrl: './star-rating-component.html',
  styleUrl: './star-rating-component.css',
})
export class StarRatingComponent {
  // Input Singal: riceve dal componente Padre il num max di stelle da mostrare (max 5)

  maxVote = input<number>(5);

  // Output Signal: invia il numero selezionato al componente Padre

  selectedVote = output<number>();

  // Inizializzo Array delle stars

  starsArray = [1, 2, 3, 4, 5];

  // Inizializzo funzione che si attiverà quando l'utente clicca una stella
  // NB: emit invia il valore al Padre che intercetta l'evento con $event

  chooseVote(vote: number) {
    this.selectedVote.emit(vote);
  }
}
