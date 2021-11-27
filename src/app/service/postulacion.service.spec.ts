import { TestBed } from '@angular/core/testing';

import { PostulacionService } from './postulacion.service';

describe('PostulacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostulacionService = TestBed.get(PostulacionService);
    expect(service).toBeTruthy();
  });
});
