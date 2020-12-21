import { TestBed } from '@angular/core/testing';

import { CalcAdultoService } from './calc-adulto.service';

describe('CalcAdultoService', () => {
  let service: CalcAdultoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcAdultoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
