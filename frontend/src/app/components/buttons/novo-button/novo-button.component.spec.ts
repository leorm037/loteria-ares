import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoButtonComponent } from './novo-button.component';

describe('NovoButtonComponent', () => {
  let component: NovoButtonComponent;
  let fixture: ComponentFixture<NovoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
