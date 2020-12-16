import { TestBed } from '@angular/core/testing';

import { CalcCriancaService } from './calc-crianca.service';

describe('CalcCriancaService', () => {
  let service: CalcCriancaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcCriancaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
