import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirButtonComponent } from './excluir-button.component';

describe('ExcluirButtonComponent', () => {
  let component: ExcluirButtonComponent;
  let fixture: ComponentFixture<ExcluirButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
