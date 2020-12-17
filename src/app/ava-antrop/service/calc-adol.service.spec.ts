import { TestBed } from '@angular/core/testing';

import { CalcAdolService } from './calc-adol.service';

describe('CalcAdolService', () => {
  let service: CalcAdolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcAdolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
