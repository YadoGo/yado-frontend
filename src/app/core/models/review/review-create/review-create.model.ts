export interface ReviewCreate {
  qualification: number;
  positiveComment: string;
  negativeComment: string;
  userId: string;
  hotelId: string;
}
