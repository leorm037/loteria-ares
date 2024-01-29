export interface Loteria {
  id: number;
  nome: string;
  slug: string;
  api: string;
  logo: string;
  dezenas: Array<number>;
  premiar: Array<number>;
  marcar: Array<number>;
  createdAt: Date;
  updatedAt: Date;
}
