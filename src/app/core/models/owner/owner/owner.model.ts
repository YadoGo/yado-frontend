import { Hotel } from '@core/models/hotel';
import { User } from '@core/models/user';

export interface Owner {
  id: string;
  userId: string;
  hotelId: string;
  user: User;
  hotel: Hotel;
}
