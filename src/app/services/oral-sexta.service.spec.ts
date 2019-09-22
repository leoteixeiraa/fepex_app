import { TestBed } from '@angular/core/testing';

import { OralSextaService } from './oral-sexta.service';

describe('OralSextaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OralSextaService = TestBed.get(OralSextaService);
    expect(service).toBeTruthy();
  });
});
