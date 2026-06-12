import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: string[] = ['Mela', 'Pera', 'Formaggio'];

  addItem(item: string): void {
    this.items.push(item);
  }

  getItem(): string[] {
    return [...this.items];
  }

  updateAllList(newList: string[]) {
    this.items = newList;
  }
}
