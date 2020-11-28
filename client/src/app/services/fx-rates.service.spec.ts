import { TestBed } from '@angular/core/testing';

import { FxRatesService } from './fx-rates.service';

describe('FxRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FxRatesService = TestBed.get(FxRatesService);
    expect(service).toBeTruthy();
  });
});
