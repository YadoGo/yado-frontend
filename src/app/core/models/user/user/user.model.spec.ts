import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    const user: User = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      username: 'uniqueusername',
      firstName: 'Ephraim',
      lastName: 'Thistlebottom',
      email: 'ephraim@example.com',
      password: 'securepassword123',
    };
    expect(user).toBeTruthy();
  });

  it('should have valid properties', () => {
    const user: User = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      username: 'uniqueusername',
      firstName: 'Ephraim',
      lastName: 'Thistlebottom',
      email: 'ephraim@example.com',
      password: 'securepassword123',
    };
    expect(user.id).toBe('123e4567-e89b-12d3-a456-426614174000');
    expect(user.username).toBe('uniqueusername');
    expect(user.firstName).toBe('Ephraim');
    expect(user.lastName).toBe('Thistlebottom');
    expect(user.email).toBe('ephraim@example.com');
    expect(user.password).toBe('securepassword123');
  });

  it('should have valid types for properties', () => {
    const user: User = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      username: 'uniqueusername',
      firstName: 'Ephraim',
      lastName: 'Thistlebottom',
      email: 'ephraim@example.com',
      password: 'securepassword123',
    };
    expect(typeof user.id).toBe('string');
    expect(typeof user.username).toBe('string');
    expect(typeof user.firstName).toBe('string');
    expect(typeof user.lastName).toBe('string');
    expect(typeof user.email).toBe('string');
    expect(typeof user.password).toBe('string');
  });

  it('should allow optional imageProfile property', () => {
    const user: User = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      username: 'uniqueusername',
      firstName: 'Ephraim',
      lastName: 'Thistlebottom',
      email: 'ephraim@example.com',
      password: 'securepassword123',
      imageProfile: 'profile.jpg',
    };
    expect(user.imageProfile).toBe('profile.jpg');
  });
});
