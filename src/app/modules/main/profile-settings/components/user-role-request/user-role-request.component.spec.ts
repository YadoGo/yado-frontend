import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleRequestComponent } from './user-role-request.component';

describe('UserRoleRequestComponent', () => {
  let component: UserRoleRequestComponent;
  let fixture: ComponentFixture<UserRoleRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRoleRequestComponent],
    });
    fixture = TestBed.createComponent(UserRoleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
