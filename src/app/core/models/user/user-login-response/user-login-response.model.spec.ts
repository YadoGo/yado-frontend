import { UserLoginResponse } from './user-login-response.model';
import { User } from '../user/user.model';

describe('UserLoginResponse', () => {
  it('should create an instance', () => {
    const user: User = {
      id: '12345',
      username: 'alice',
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice@example.com',
      password: 'Password123!',
    };
    const userLoginResponse: UserLoginResponse = {
      user,
      token: 'mockToken123',
    };
    expect(userLoginResponse).toBeTruthy();
  });

  it('should have valid properties', () => {
    const user: User = {
      id: '12345',
      username: 'alice',
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice@example.com',
      password: 'Password123',
    };
    const userLoginResponse: UserLoginResponse = {
      user,
      token: 'mockToken123',
    };
    expect(userLoginResponse.user).toEqual(user);
    expect(userLoginResponse.token).toBe('mockToken123');
  });

  it('should have valid types for properties', () => {
    const user: User = {
      id: '12345',
      username: 'alice',
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice@example.com',
      password: 'Password123',
    };
    const userLoginResponse: UserLoginResponse = {
      user,
      token: 'mockToken123',
    };
    expect(typeof userLoginResponse.user).toBe('object');
    expect(typeof userLoginResponse.token).toBe('string');
  });
});
