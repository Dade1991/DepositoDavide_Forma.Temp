import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driven-form-component',
  imports: [FormsModule],
  templateUrl: './driven-form-component.html',
  styleUrl: './driven-form-component.css',
})
export class DrivenFormComponent {
  user = {
    name: '',
    email: '',
    age: '',
  };

  submitted: boolean = true;

  onSubmit(): void {
    this.submitted = true;
  }
}
