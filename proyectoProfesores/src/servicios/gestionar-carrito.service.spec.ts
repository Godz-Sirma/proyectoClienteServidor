import { TestBed } from '@angular/core/testing';

import { GestionarCarritoService } from './gestionar-carrito.service';

describe('GestionarCarritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarCarritoService = TestBed.get(GestionarCarritoService);
    expect(service).toBeTruthy();
  });
});
