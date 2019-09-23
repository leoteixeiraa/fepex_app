import { TestBed } from '@angular/core/testing';

import { CulturalSextaService } from './cultural-sexta.service';

describe('CulturalSextaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CulturalSextaService = TestBed.get(CulturalSextaService);
    expect(service).toBeTruthy();
  });
});
