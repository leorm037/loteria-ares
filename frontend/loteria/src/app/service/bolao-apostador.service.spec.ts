import { TestBed } from '@angular/core/testing';

import { BolaoApostadorService } from './bolao-apostador.service';

describe('BolaoApostadorService', () => {
  let service: BolaoApostadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolaoApostadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
