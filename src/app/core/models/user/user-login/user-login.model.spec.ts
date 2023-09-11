import { UserLogin } from './user-login.model';

describe('UserLogin', () => {
  it('should create an instance', () => {
    const userLogin: UserLogin = {
      email: 'alice@example.com',
      password: 'password123!',
    };
    expect(userLogin).toBeTruthy();
  });

  it('should have valid properties', () => {
    const userLogin: UserLogin = {
      email: 'alice@example.com',
      password: 'password123!',
    };
    expect(userLogin.email).toBe('alice@example.com');
    expect(userLogin.password).toBe('password123!');
  });

  it('should have valid types for properties', () => {
    const userLogin: UserLogin = {
      email: 'alice@example.com',
      password: 'password123!',
    };
    expect(typeof userLogin.email).toBe('string');
    expect(typeof userLogin.password).toBe('string');
  });
});
