import { Concurso } from './concurso.interface';
import { Apostador } from './apostador.interface';
import { Aposta } from './aposta.interface';

export interface Bolao {
  id: number;
  nome: string;
  concurso: Concurso;
  conferido: boolean;
  apostadores: Apostador[];
  apostas: Aposta[];
  cotaValor: number;
  createdAt: Date;
  updatedAt: Date;
}
