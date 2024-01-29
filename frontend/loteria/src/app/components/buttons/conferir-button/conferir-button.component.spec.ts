import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferirButtonComponent } from './conferir-button.component';

describe('ConferirButtonComponent', () => {
  let component: ConferirButtonComponent;
  let fixture: ComponentFixture<ConferirButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferirButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConferirButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
