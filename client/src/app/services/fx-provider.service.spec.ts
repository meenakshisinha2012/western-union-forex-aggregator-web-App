import { TestBed } from '@angular/core/testing';

import { FxProviderService } from './fx-provider.service';

describe('FxProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FxProviderService = TestBed.get(FxProviderService);
    expect(service).toBeTruthy();
  });
});
