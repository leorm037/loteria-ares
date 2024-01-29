import { Bolao } from './bolao.internface';

export interface Apostador {
  id: number;
  bolao: Bolao;
  nome: string;
  email: string;
  celular: string;
  pago: boolean;
  cotas: number;
  createdAt: Date;
  updatedAt: Date;
}
