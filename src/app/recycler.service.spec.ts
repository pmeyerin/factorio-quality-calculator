import { TestBed } from '@angular/core/testing';

import { RecyclerService } from './recycler.service';

describe('RecyclerService', () => {
  let service: RecyclerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecyclerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
