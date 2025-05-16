import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaFormComponent } from './loteria-form.component';

describe('LoteriaFormComponent', () => {
  let component: LoteriaFormComponent;
  let fixture: ComponentFixture<LoteriaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteriaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
