import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-traffic-light-component',
  imports: [],
  templateUrl: './traffic-light-component.html',
  styleUrl: './traffic-light-component.css',
})
export class TrafficLightComponent {
  // Dichiaro un signal che contiene tutti gli stati (classi da applicare) del semaforo (valore iniziale `red`)
  trafficLightColors = signal<`red` | `yellow` | `green`>(`red`);

  // Al click del pulsante:
  updateColor(): void {
    const actualState = this.trafficLightColors();

    // Leggo valore attuale di signal e switcho in ordine: red > yellow > green > riparte
    if (actualState === `red`) {
      this.trafficLightColors.set(`green`);
    } else if (actualState === `green`) {
      this.trafficLightColors.set(`yellow`);
    } else {
      this.trafficLightColors.set(`red`);
    }
  }
}
