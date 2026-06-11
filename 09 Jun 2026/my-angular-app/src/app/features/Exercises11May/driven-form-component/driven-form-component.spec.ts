import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenFormComponent } from './driven-form-component';

describe('DrivenFormComponent', () => {
  let component: DrivenFormComponent;
  let fixture: ComponentFixture<DrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrivenFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrivenFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
