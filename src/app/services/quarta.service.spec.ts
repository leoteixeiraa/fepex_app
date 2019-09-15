import { TestBed } from '@angular/core/testing';

import { QuartaService } from './quarta.service';

describe('QuartaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuartaService = TestBed.get(QuartaService);
    expect(service).toBeTruthy();
  });
});
