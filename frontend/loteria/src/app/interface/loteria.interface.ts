export interface Loteria {
  id: string;
  nome: string;
  slug: string;
  api: string;
  dezenas: Array<number>;
  premiar: Array<number>;
  marcar: Array<number>;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
