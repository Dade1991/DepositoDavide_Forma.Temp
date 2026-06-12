import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  // Inizializzo le variabili per contentere i dati

  private _username = signal<string>('guest');
  private _darkTheme = signal<boolean>(false);

  // Inizializzo altre due variabili dove potere accedere ai dati private

  readonly username = this._username.asReadonly();
  readonly darkTheme = this._darkTheme.asReadonly();

  // Inizializzo una funzione per settare uno username tramite input HTML

  setUsername(name: string): void {
    this._username.set(name);
  }

  // Inizializzo una funzione per settare un tema dark o light (controlla internamente quale sia il tema corrente e apporrà l'opposto di quello corrente)

  toggleTheme(): void {
    this._darkTheme.update((actualTheme) => {
      return !actualTheme;
    });
  }
}
