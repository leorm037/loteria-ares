import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoAlterarComponent } from './concurso-alterar.component';

describe('ConcursoAlterarComponent', () => {
  let component: ConcursoAlterarComponent;
  let fixture: ComponentFixture<ConcursoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcursoAlterarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcursoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
