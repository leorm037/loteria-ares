import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarButtonComponent } from './alterar-button.component';

describe('AlterarButtonComponent', () => {
  let component: AlterarButtonComponent;
  let fixture: ComponentFixture<AlterarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlterarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
