import { Loteria } from "./loteria.interface";

export interface Concurso {
  id: number;
  numero: number;
  apuracao: Date;
  rateio: Array<string>;
  local: string;
  municipio: string;
  uf: string;
  loteria: Loteria;
  dezenas: Array<number>;
  createdAt: Date;
  updatedAt: Date;
}
