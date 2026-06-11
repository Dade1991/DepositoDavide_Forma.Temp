import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from './father-component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
