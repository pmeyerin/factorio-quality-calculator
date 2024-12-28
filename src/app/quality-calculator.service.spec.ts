import { TestBed } from '@angular/core/testing';

import { QualityCalculatorService } from './quality-calculator.service';

describe('QualityCalculatorService', () => {
  let service: QualityCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
