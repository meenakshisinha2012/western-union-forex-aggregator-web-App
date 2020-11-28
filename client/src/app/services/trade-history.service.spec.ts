import { TestBed } from '@angular/core/testing';

import { TradeHistoryService } from './trade-history.service';

describe('TradeHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TradeHistoryService = TestBed.get(TradeHistoryService);
    expect(service).toBeTruthy();
  });
});
