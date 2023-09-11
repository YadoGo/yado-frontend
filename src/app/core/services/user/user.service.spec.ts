import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { UserDetails } from '@core/models/user/user-details/user-details.model';
import { environment } from '@environments/environment';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should update user via PUT request', () => {
    const mockUser: UserDetails = {
      id: '1',
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
      imageProfile: '',
      username: 'johndoe',
    };

    userService.updateUser(mockUser).subscribe((updatedUser) => {
      expect(updatedUser).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiUrl}/api/users/${mockUser.id}`,
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.headers.get('Authorization')).toBeTruthy();
    req.flush(mockUser);
  });

  it('should delete user via DELETE request', () => {
    const userId = '1';

    userService.deleteUser(userId).subscribe(() => {
      console.log('OK');
    });

    const req = httpTestingController.expectOne(
      `${environment.apiUrl}/api/users/${userId}`,
    );
    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('Authorization')).toBeTruthy();
    req.flush({});
  });
});
