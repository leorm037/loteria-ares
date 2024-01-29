import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoApostaAlterarComponent } from './bolao-aposta-alterar.component';

describe('BolaoApostaAlterarComponent', () => {
  let component: BolaoApostaAlterarComponent;
  let fixture: ComponentFixture<BolaoApostaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoApostaAlterarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolaoApostaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
