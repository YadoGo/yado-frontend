import { Review } from './review.model';

describe('Review', () => {
  it('should create an instance', () => {
    const review: Review = {
      id: '1',
      qualification: 4,
      positiveComment: 'Great hotel!',
      negativeComment: 'No complaints',
      date: new Date(),
      userId: 'user123',
      hotelId: 'hotel456',
    };
    expect(review).toBeTruthy();
  });

  it('should have valid properties', () => {
    const review: Review = {
      id: '1',
      qualification: 4,
      positiveComment: 'Great hotel!',
      negativeComment: 'No complaints',
      date: new Date(),
      userId: 'user123',
      hotelId: 'hotel456',
    };
    expect(review.id).toBe('1');
    expect(review.qualification).toBe(4);
    expect(review.positiveComment).toBe('Great hotel!');
    expect(review.negativeComment).toBe('No complaints');
    expect(review.date instanceof Date).toBeTruthy();
    expect(review.userId).toBe('user123');
    expect(review.hotelId).toBe('hotel456');
  });

  it('should have valid types for properties', () => {
    const review: Review = {
      id: '1',
      qualification: 4,
      positiveComment: 'Great hotel!',
      negativeComment: 'No complaints',
      date: new Date(),
      userId: 'user123',
      hotelId: 'hotel456',
    };
    expect(typeof review.id).toBe('string');
    expect(typeof review.qualification).toBe('number');
    expect(typeof review.positiveComment).toBe('string');
    expect(typeof review.negativeComment).toBe('string');
    expect(review.date instanceof Date).toBeTruthy();
    expect(typeof review.userId).toBe('string');
    expect(typeof review.hotelId).toBe('string');
  });
});
