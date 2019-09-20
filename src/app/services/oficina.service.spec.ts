import { TestBed } from '@angular/core/testing';

import { OficinaService } from './oficina.service';

describe('OficinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OficinaService = TestBed.get(OficinaService);
    expect(service).toBeTruthy();
  });
});
