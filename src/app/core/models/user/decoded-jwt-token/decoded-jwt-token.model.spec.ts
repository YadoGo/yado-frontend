import { DecodedJwtToken } from './decoded-jwt-token.model';

describe('DecodedJwtToken', () => {
  it('should create an instance', () => {
    const decodedToken: DecodedJwtToken = {
      email: 'test@example.com',
      Id: '12345',
      role: 'User',
      nbf: 1626252626,
      exp: 1626256226,
      iat: 1626252626,
    };
    expect(decodedToken).toBeTruthy();
  });

  it('should have valid properties', () => {
    const decodedToken: DecodedJwtToken = {
      email: 'test@example.com',
      Id: '12345',
      role: 'User',
      nbf: 1626252626,
      exp: 1626256226,
      iat: 1626252626,
    };
    expect(decodedToken.email).toBe('test@example.com');
    expect(decodedToken.Id).toBe('12345');
    expect(decodedToken.role).toBe('User');
    expect(decodedToken.nbf).toBe(1626252626);
    expect(decodedToken.exp).toBe(1626256226);
    expect(decodedToken.iat).toBe(1626252626);
  });

  it('should have valid types for properties', () => {
    const decodedToken: DecodedJwtToken = {
      email: 'test@example.com',
      Id: '12345',
      role: 'User',
      nbf: 1626252626,
      exp: 1626256226,
      iat: 1626252626,
    };
    expect(typeof decodedToken.email).toBe('string');
    expect(typeof decodedToken.Id).toBe('string');
    expect(typeof decodedToken.role).toBe('string');
    expect(typeof decodedToken.nbf).toBe('number');
    expect(typeof decodedToken.exp).toBe('number');
    expect(typeof decodedToken.iat).toBe('number');
  });
});
