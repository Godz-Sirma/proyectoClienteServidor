import { TestBed } from '@angular/core/testing';

import { GestionarClasesProfeService } from './gestionar-clases-profe.service';

describe('GestionarClasesProfeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarClasesProfeService = TestBed.get(GestionarClasesProfeService);
    expect(service).toBeTruthy();
  });
});
