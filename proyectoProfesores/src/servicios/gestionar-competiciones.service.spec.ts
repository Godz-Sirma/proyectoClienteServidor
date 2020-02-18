import { TestBed } from '@angular/core/testing';

import { GestionarCompeticionesService } from './gestionar-competiciones.service';

describe('GestionarCompeticionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarCompeticionesService = TestBed.get(GestionarCompeticionesService);
    expect(service).toBeTruthy();
  });
});
