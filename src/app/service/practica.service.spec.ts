import { TestBed } from '@angular/core/testing';

import { PracticaService } from './practica.service';

describe('PracticaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracticaService = TestBed.get(PracticaService);
    expect(service).toBeTruthy();
  });
});
