import { UserDetails } from '@core/models/user';

export interface Review {
  id: string;
  qualification: number;
  positiveComment: string;
  negativeComment: string;
  date: Date;
  userId: string;
  hotelId: string;
  user: UserDetails;
}
