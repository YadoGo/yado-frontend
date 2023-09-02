import { User } from '../user/user.model';

export interface UserLoginResponse {
  user: User;
  token: string;
}
