import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostadorButtonComponent } from './apostador-button.component';

describe('ApostadorButtonComponent', () => {
  let component: ApostadorButtonComponent;
  let fixture: ComponentFixture<ApostadorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApostadorButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApostadorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
