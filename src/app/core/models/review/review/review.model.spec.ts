import { Review } from './review.model';

describe('Review', () => {
  it('should create an instance', () => {
    const review: Review = {
      id: 'someId',
      qualification: 4.5,
      positiveComment: 'Great experience',
      negativeComment: 'None',
      date: new Date(),
      userId: 'userId',
      hotelId: 'hotelId',
    };

    expect(review).toBeTruthy();
  });
});
