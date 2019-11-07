import { TestBed } from '@angular/core/testing';

import { TableSlideNumberService } from './table-slide-number.service';

describe('TableSlideNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableSlideNumberService = TestBed.get(TableSlideNumberService);
    expect(service).toBeTruthy();
  });
});
