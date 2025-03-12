import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoListarComponent } from './concurso-listar.component';

describe('ConcursoListarComponent', () => {
  let component: ConcursoListarComponent;
  let fixture: ComponentFixture<ConcursoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcursoListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcursoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
