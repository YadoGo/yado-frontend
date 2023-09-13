import { TestBed } from '@angular/core/testing';

import { UserRoleRequestService } from './user-role-request.service';

describe('UserRoleRequestService', () => {
  let service: UserRoleRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRoleRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
