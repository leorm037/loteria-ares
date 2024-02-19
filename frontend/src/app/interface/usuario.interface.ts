export interface Usuario {
  id?: number;
  nome?: string;
  celular?: string;
  email: string;
  username?: string;
  roles?: Array<string>;
  senha: string;
  ficarConectado?: boolean;
}
