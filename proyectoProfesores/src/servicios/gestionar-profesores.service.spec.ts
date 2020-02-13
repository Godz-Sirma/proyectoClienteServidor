import { TestBed } from '@angular/core/testing';

import { GestionarProfesoresService } from './gestionar-profesores.service';

describe('GestionarProfesoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarProfesoresService = TestBed.get(GestionarProfesoresService);
    expect(service).toBeTruthy();
  });
});
