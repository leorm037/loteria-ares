import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoAlterarComponent } from './bolao-alterar.component';

describe('BolaoAlterarComponent', () => {
  let component: BolaoAlterarComponent;
  let fixture: ComponentFixture<BolaoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoAlterarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolaoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
