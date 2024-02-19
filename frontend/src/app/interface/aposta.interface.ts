import { Bolao } from './bolao.internface';

export interface Aposta {
  id: number;
  bolao: Bolao;
  dezenas: number[];
  acerto: number;
  conferido: boolean;
  createdAt: Date;
  updatedAt: Date;
}
