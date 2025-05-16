export interface Loteria {
    id: string;
    nome: string;
    apiUrl: string;
    slugUrl: string;
    apostas: Array<number>;
    dezenas: Array<number>;
    createdAt: string,
    updatedAt: string
}