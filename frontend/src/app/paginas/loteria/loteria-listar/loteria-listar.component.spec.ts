import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaListarComponent } from './loteria-listar.component';

describe('LoteriaListarComponent', () => {
  let component: LoteriaListarComponent;
  let fixture: ComponentFixture<LoteriaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteriaListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteriaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
