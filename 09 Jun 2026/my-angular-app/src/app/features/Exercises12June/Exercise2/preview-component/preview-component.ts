import { Component, inject } from '@angular/core';
import { UserPreferencesService } from './../../../../core/services/Exercises12June/user-preferences-service';

@Component({
  selector: 'app-preview-component',
  imports: [],
  templateUrl: './preview-component.html',
  styleUrl: './preview-component.css',
})
export class PreviewComponent {
  // Richiamo il service e, con l'injection, richiamo i dati per la trasposizione della parte grafica da passare al template HTML

  userPreferencesService: UserPreferencesService = inject(UserPreferencesService);
}
