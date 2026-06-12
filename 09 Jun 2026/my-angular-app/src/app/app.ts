import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BaseComponent } from './features/base-component/base-component';
import { TitleComponent } from './features/title-component/title-component';
import { ParagraphComponent } from './features/paragraph-component/paragraph-component';
import { ImageComponent } from './features/image-component/image-component';
import { BindingComponent } from './features/binding-component/binding-component';
import { ProductCardComponent } from './features/AfternoonExercise/product-card-component/product-card-component';
import { DirectivesComponent } from './features/directives-component/directives-component';
import { StudentListComponent } from './features/MorningExercise/student-list-component/student-list-component';
import { RegistrationComponent } from './features/registration-component/registration-component';
import { LoginComponent } from './features/login-component/login-component';
import { DrivenFormComponent } from './features/Exercises11May/driven-form-component/driven-form-component';
import { ReactiveFormComponent } from './features/Exercises11May/reactive-form-component/reactive-form-component';
import { FatherComponent } from './features/InputOutputExample/father-component/father-component';
import { SignalExampleComponent } from './features/signal-example-component/signal-example-component';
import { TrafficLightComponent } from './features/Exercises11May/SignalExe/traffic-light-component/traffic-light-component';
import { PriceComponent } from './features/Exercises11May/SignalExe/price-component/price-component';
import { ProductListComponent } from './features/InputOutputExample/Exercise/product-list-component/product-list-component';
import { FeedbackComponent } from './features/InputOutputExample/Exercise/feedback-component/feedback-component';
import { ItemListComponent } from './features/item-list-component/item-list-component';
import { AddItemComponent } from './features/Exercises12June/Exercise1/add-item-component/add-item-component';
import { ShoppingListComponent } from './features/Exercises12June/Exercise1/shopping-list-component/shopping-list-component';
import { SettingsComponent } from './features/Exercises12June/Exercise2/settings-component/settings-component';
import { PreviewComponent } from './features/Exercises12June/Exercise2/preview-component/preview-component';
import { HomeComponent } from './features/pages/home-component/home-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    BaseComponent,
    TitleComponent,
    ParagraphComponent,
    ImageComponent,
    BindingComponent,
    ProductCardComponent,
    DirectivesComponent,
    StudentListComponent,
    RegistrationComponent,
    LoginComponent,
    DrivenFormComponent,
    ReactiveFormComponent,
    FatherComponent,
    SignalExampleComponent,
    TrafficLightComponent,
    PriceComponent,
    ProductListComponent,
    FeedbackComponent,
    ItemListComponent,
    AddItemComponent,
    ShoppingListComponent,
    SettingsComponent,
    PreviewComponent,
    HomeComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
