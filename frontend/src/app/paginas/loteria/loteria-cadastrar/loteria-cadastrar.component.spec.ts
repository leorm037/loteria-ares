import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaCadastrarComponent } from './loteria-cadastrar.component';

describe('LoteriaCadastrarComponent', () => {
  let component: LoteriaCadastrarComponent;
  let fixture: ComponentFixture<LoteriaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteriaCadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteriaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
