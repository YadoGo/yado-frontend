export interface DecodedJwtToken {
  email: string;
  Id: string;
  role: string;
  nbf: number;
  exp: number;
  iat: number;
}
