import { TestBed } from '@angular/core/testing';

import { SextaService } from './sexta.service';

describe('SextaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SextaService = TestBed.get(SextaService);
    expect(service).toBeTruthy();
  });
});
