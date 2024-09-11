import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulComponent } from './formul.component';

describe('FormulComponent', () => {
  let component: FormulComponent;
  let fixture: ComponentFixture<FormulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
