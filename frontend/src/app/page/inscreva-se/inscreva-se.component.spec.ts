import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrevaSeComponent } from './inscreva-se.component';

describe('InscrevaSeComponent', () => {
  let component: InscrevaSeComponent;
  let fixture: ComponentFixture<InscrevaSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscrevaSeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscrevaSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
