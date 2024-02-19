import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoApostadorNovoComponent } from './bolao-apostador-novo.component';

describe('BolaoApostadorNovoComponent', () => {
  let component: BolaoApostadorNovoComponent;
  let fixture: ComponentFixture<BolaoApostadorNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoApostadorNovoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolaoApostadorNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
