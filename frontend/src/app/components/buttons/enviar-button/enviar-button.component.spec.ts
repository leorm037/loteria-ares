import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarButtonComponent } from './enviar-button.component';

describe('EnviarButtonComponent', () => {
  let component: EnviarButtonComponent;
  let fixture: ComponentFixture<EnviarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnviarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
