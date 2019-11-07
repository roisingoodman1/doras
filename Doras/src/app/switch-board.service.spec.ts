import { TestBed } from '@angular/core/testing';

import { SwitchBoardService } from './switch-board.service';

describe('SwitchBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwitchBoardService = TestBed.get(SwitchBoardService);
    expect(service).toBeTruthy();
  });
});
