import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimparButtonComponent } from './limpar-button.component';

describe('LimparButtonComponent', () => {
  let component: LimparButtonComponent;
  let fixture: ComponentFixture<LimparButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimparButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LimparButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
