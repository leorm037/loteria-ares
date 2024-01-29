import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoNovoComponent } from './bolao-novo.component';

describe('BolaoNovoComponent', () => {
  let component: BolaoNovoComponent;
  let fixture: ComponentFixture<BolaoNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolaoNovoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolaoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
