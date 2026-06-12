import { Component } from '@angular/core';
import { StarRatingComponent } from '../star-rating-component/star-rating-component';

@Component({
  selector: 'app-feedback-component',
  imports: [StarRatingComponent],
  templateUrl: './feedback-component.html',
  styleUrl: './feedback-component.css',
})
export class FeedbackComponent {
  // Inizializzo variabile dei voti con valore iniziale a 0 perchè l'utnente non ha ancora dato nessun voto

  vote = 0;

  // Inizializzo funzione che cattura il voto e lo imposta come nuovo "vote"

  onVote(vote: number) {
    this.vote = vote;
  }
}
