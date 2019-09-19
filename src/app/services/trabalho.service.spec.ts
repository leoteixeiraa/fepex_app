import { TestBed } from '@angular/core/testing';

import { TrabalhoService } from './trabalho.service';

describe('TrabalhoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrabalhoService = TestBed.get(TrabalhoService);
    expect(service).toBeTruthy();
  });
});
