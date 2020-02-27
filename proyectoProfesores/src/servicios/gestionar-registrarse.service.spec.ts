import { TestBed } from '@angular/core/testing';

import { GestionarRegistrarseService } from './gestionar-registrarse.service';

describe('GestionarRegistrarseService', () => {
  let service: GestionarRegistrarseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarRegistrarseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
