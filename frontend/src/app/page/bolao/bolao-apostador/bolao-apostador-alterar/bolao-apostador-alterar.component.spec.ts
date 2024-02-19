import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoApostadorAlterarComponent } from './bolao-apostador-alterar.component';

describe('BolaoApostadorAlterarComponent', () => {
  let component: BolaoApostadorAlterarComponent;
  let fixture: ComponentFixture<BolaoApostadorAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoApostadorAlterarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolaoApostadorAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
