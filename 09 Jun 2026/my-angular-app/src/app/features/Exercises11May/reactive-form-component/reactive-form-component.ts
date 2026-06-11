import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  imports: [ReactiveFormComponent, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './reactive-form-component.html',
  styleUrl: './reactive-form-component.css',
})
export class ReactiveFormComponent {
  contactForm: FormGroup = new FormGroup({
    obj: new FormControl<string>('', Validators.required),
    message: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
    urgency: new FormControl<string>('Low', Validators.required),
  });

  submittedData: any = null;

  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }
    console.log(this.contactForm.value);
    this.submittedData = this.contactForm.value;
    this.contactForm.reset({
      urgency: 'Low',
    });
  }

  get messageCtrl() {
    return this.contactForm.get('message');
  }
}
