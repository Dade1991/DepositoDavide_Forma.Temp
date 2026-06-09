import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from "./features/base-component/base-component";
import { TitleComponent } from "./features/title-component/title-component";
import { ParagraphComponent } from "./features/paragraph-component/paragraph-component";
import { ImageComponent } from "./features/image-component/image-component";
import { BindingComponent } from "./features/binding-component/binding-component";
import { ProductCardComponent } from "./features/AfternoonExercise/product-card-component/product-card-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaseComponent, TitleComponent, ParagraphComponent, ImageComponent, BindingComponent, ProductCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
