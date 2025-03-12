import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoCadastrarComponent } from './concurso-cadastrar.component';

describe('ConcursoCadastrarComponent', () => {
  let component: ConcursoCadastrarComponent;
  let fixture: ComponentFixture<ConcursoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcursoCadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcursoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
