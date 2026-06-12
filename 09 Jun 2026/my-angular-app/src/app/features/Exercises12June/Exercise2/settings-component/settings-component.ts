import { UserPreferencesService } from './../../../../core/services/Exercises12June/user-preferences-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-settings-component',
  imports: [],
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css',
})
export class SettingsComponent {
  // inject(UserPreferencesService) ci fornirà il riferimento al service condiviso
  // Aggiungiamo proctected (accessibile a questo componente ed il suo template) e readonly (per leggere i valori senza poterli modificare)

  protected readonly userPreferencesService: UserPreferencesService =
    inject(UserPreferencesService);

  // Inizializzo una funzione che all'evento di input, setterà il nome inserito

  onUsernameinput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.userPreferencesService.setUsername(input.value);
  }

  // Inizializzo una funzione che al clim nel template, richiamerà metodo toogleTheme (presente nel service)
  onToggleTheme(): void {
    this.userPreferencesService.toggleTheme();
  }
}
