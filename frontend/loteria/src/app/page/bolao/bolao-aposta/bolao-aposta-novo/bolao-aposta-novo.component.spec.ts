import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoApostaNovoComponent } from './bolao-aposta-novo.component';

describe('BolaoApostaNovoComponent', () => {
  let component: BolaoApostaNovoComponent;
  let fixture: ComponentFixture<BolaoApostaNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoApostaNovoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolaoApostaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
