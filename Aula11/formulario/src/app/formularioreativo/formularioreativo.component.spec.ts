import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioreativoComponent } from './formularioreativo.component';

describe('FormularioreativoComponent', () => {
  let component: FormularioreativoComponent;
  let fixture: ComponentFixture<FormularioreativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioreativoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioreativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
