import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostaButtonComponent } from './aposta-button.component';

describe('ApostaButtonComponent', () => {
  let component: ApostaButtonComponent;
  let fixture: ComponentFixture<ApostaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApostaButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApostaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
