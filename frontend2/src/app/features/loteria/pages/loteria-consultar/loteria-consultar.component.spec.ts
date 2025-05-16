import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaConsultarComponent } from './loteria-consultar.component';

describe('LoteriaConsultarComponent', () => {
  let component: LoteriaConsultarComponent;
  let fixture: ComponentFixture<LoteriaConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteriaConsultarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteriaConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
