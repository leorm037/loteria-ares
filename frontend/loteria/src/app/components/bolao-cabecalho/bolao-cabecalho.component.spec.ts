import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoCabecalhoComponent } from './bolao-cabecalho.component';

describe('BolaoCabecalhoComponent', () => {
  let component: BolaoCabecalhoComponent;
  let fixture: ComponentFixture<BolaoCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoCabecalhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolaoCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
