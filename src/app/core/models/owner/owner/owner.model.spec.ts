import { Owner } from './owner.model';

describe('Owner', () => {
  it('should create an instance', () => {
    const owner: Owner = {
      id: '01234567-89ab-cdef-0123-456789abcdef',
      userId: 'user123',
      hotelId: 'hotel456',
    };

    expect(owner).toBeTruthy();
  });

  it('should have a valid id property', () => {
    const owner: Owner = {
      id: '01234567-89ab-cdef-0123-456789abcdef',
      userId: 'user123',
      hotelId: 'hotel456',
    };

    const guidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    expect(owner.id).toBeTruthy();
    expect(typeof owner.id).toBe('string');
    expect(owner.id).toMatch(guidRegex);
  });

  it('should have a userId property', () => {
    const owner: Owner = {
      id: '01234567-89ab-cdef-0123-456789abcdef',
      userId: 'user123',
      hotelId: 'hotel456',
    };

    expect(owner.userId).toBeTruthy();
    expect(typeof owner.userId).toBe('string');
  });

  it('should have a hotelId property', () => {
    const owner: Owner = {
      id: '01234567-89ab-cdef-0123-456789abcdef',
      userId: 'user123',
      hotelId: 'hotel456',
    };

    expect(owner.hotelId).toBeTruthy();
    expect(typeof owner.hotelId).toBe('string');
  });
});
