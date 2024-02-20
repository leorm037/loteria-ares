export interface Usuario {
  id?: number;
  nome?: string;
  celular?: string;
  username?: string;
  roles?: Array<string>;
  exp?: number;
  iat?: number;
  ficarConectado?: boolean;
  senha?: string;
  email: string;
}
