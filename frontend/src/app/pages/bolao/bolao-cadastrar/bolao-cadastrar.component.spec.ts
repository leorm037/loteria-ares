import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoCadastrarComponent } from './bolao-cadastrar.component';

describe('BolaoCadastrarComponent', () => {
  let component: BolaoCadastrarComponent;
  let fixture: ComponentFixture<BolaoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoCadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolaoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
