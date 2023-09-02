export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imageProfile?: string;
  roleId: number;
}
