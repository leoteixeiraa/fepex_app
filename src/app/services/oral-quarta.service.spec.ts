import { TestBed } from '@angular/core/testing';

import { OralQuartaService } from './oral-quarta.service';

describe('OralQuartaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OralQuartaService = TestBed.get(OralQuartaService);
    expect(service).toBeTruthy();
  });
});
