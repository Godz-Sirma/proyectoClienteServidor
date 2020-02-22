import { TestBed } from '@angular/core/testing';

import { GestionarActividadesService } from './gestionar-actividades.service';

describe('GestionarActividadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarActividadesService = TestBed.get(GestionarActividadesService);
    expect(service).toBeTruthy();
  });
});
