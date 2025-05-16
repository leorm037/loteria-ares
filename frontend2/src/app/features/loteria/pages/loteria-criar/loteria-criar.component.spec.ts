import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaCriarComponent } from './loteria-criar.component';

describe('LoteriaCriarComponent', () => {
  let component: LoteriaCriarComponent;
  let fixture: ComponentFixture<LoteriaCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteriaCriarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteriaCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
