import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarButtonComponent } from './salvar-button.component';

describe('SalvarButtonComponent', () => {
  let component: SalvarButtonComponent;
  let fixture: ComponentFixture<SalvarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalvarButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalvarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
