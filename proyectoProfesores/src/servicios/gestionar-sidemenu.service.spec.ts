import { TestBed } from '@angular/core/testing';

import { GestionarSidemenuService } from './gestionar-sidemenu.service';

describe('GestionarSidemenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionarSidemenuService = TestBed.get(GestionarSidemenuService);
    expect(service).toBeTruthy();
  });
});
