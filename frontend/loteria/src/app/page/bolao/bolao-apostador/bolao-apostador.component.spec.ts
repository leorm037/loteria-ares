import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoApostadorComponent } from './bolao-apostador.component';

describe('BolaoApostadorComponent', () => {
  let component: BolaoApostadorComponent;
  let fixture: ComponentFixture<BolaoApostadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoApostadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolaoApostadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
