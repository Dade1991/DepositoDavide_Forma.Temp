import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from "./features/base-component/base-component";
import { TitleComponent } from "./features/title-component/title-component";
import { ParagraphComponent } from "./features/paragraph-component/paragraph-component";
import { ImageComponent } from "./features/image-component/image-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaseComponent, TitleComponent, ParagraphComponent, ImageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
