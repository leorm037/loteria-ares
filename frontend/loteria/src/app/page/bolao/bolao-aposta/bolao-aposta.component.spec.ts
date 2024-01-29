import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoApostaComponent } from './bolao-aposta.component';

describe('BolaoApostaComponent', () => {
  let component: BolaoApostaComponent;
  let fixture: ComponentFixture<BolaoApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoApostaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolaoApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
