import { TestBed } from '@angular/core/testing';

import { CulturalQuintaService } from './cultural-quinta.service';

describe('CulturalQuintaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CulturalQuintaService = TestBed.get(CulturalQuintaService);
    expect(service).toBeTruthy();
  });
});
