import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaAlterarComponent } from './loteria-alterar.component';

describe('LoteriaAlterarComponent', () => {
  let component: LoteriaAlterarComponent;
  let fixture: ComponentFixture<LoteriaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteriaAlterarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteriaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
