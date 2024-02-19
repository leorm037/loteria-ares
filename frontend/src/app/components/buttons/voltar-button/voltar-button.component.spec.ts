import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltarButtonComponent } from './voltar-button.component';

describe('VoltarButtonComponent', () => {
  let component: VoltarButtonComponent;
  let fixture: ComponentFixture<VoltarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoltarButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoltarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
