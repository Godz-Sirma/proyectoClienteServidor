import { TestBed } from '@angular/core/testing';

import { GestionarComprarService } from './gestionar-comprar.service';

describe('GestionarComprarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarComprarService = TestBed.get(GestionarComprarService);
    expect(service).toBeTruthy();
  });
});
