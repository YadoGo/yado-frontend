import { UserDetails } from './user-details.model';

describe('UserDetails', () => {
  it('should create an instance', () => {
    const userDetails: UserDetails = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'Johnson',
      imageProfile: 'alice.jpg',
      username: 'alicej',
    };
    expect(userDetails).toBeTruthy();
  });

  it('should have valid properties', () => {
    const userDetails: UserDetails = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'Johnson',
      imageProfile: 'alice.jpg',
      username: 'alicej',
    };
    expect(userDetails.id).toBe('123e4567-e89b-12d3-a456-426614174000');
    expect(userDetails.email).toBe('alice@example.com');
    expect(userDetails.firstName).toBe('Alice');
    expect(userDetails.lastName).toBe('Johnson');
    expect(userDetails.imageProfile).toBe('alice.jpg');
    expect(userDetails.username).toBe('alicej');
  });

  it('should have valid types for properties', () => {
    const userDetails: UserDetails = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'Johnson',
      imageProfile: 'alice.jpg',
      username: 'alicej',
    };
    expect(typeof userDetails.id).toBe('string');
    expect(typeof userDetails.email).toBe('string');
    expect(typeof userDetails.firstName).toBe('string');
    expect(typeof userDetails.lastName).toBe('string');
    expect(typeof userDetails.imageProfile).toBe('string');
    expect(typeof userDetails.username).toBe('string');
  });
});
