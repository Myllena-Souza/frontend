import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsenhaComponent } from './logsenha.component';

describe('LogsenhaComponent', () => {
  let component: LogsenhaComponent;
  let fixture: ComponentFixture<LogsenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogsenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogsenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
