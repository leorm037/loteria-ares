import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarButtonComponent } from './entrar-button.component';

describe('EntrarButtonComponent', () => {
  let component: EntrarButtonComponent;
  let fixture: ComponentFixture<EntrarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrarButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
