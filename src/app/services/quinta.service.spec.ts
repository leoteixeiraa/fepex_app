import { TestBed } from '@angular/core/testing';

import { QuintaService } from './quinta.service';

describe('QuintaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuintaService = TestBed.get(QuintaService);
    expect(service).toBeTruthy();
  });
});
