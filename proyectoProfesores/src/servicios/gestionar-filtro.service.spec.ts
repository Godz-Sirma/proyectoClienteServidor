import { TestBed } from '@angular/core/testing';

import { GestionarFiltroService } from './gestionar-filtro.service';

describe('GestionarFiltroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarFiltroService = TestBed.get(GestionarFiltroService);
    expect(service).toBeTruthy();
  });
});
