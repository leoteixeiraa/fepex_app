import { TestBed } from '@angular/core/testing';

import { NovasideiasService } from './novasideias.service';

describe('NovasideiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovasideiasService = TestBed.get(NovasideiasService);
    expect(service).toBeTruthy();
  });
});
