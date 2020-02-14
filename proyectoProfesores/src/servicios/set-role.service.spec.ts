import { TestBed } from '@angular/core/testing';

import { SetRoleService } from './set-role.service';

describe('SetRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetRoleService = TestBed.get(SetRoleService);
    expect(service).toBeTruthy();
  });
});
