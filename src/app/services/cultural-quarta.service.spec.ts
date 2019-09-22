import { TestBed } from '@angular/core/testing';

import { CulturalQuartaService } from './cultural-quarta.service';

describe('CulturalQuartaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CulturalQuartaService = TestBed.get(CulturalQuartaService);
    expect(service).toBeTruthy();
  });
});
