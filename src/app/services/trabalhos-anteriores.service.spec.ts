import { TestBed } from '@angular/core/testing';

import { TrabalhosAnterioresService } from './trabalhos-anteriores.service';

describe('TrabalhosAnterioresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrabalhosAnterioresService = TestBed.get(TrabalhosAnterioresService);
    expect(service).toBeTruthy();
  });
});
