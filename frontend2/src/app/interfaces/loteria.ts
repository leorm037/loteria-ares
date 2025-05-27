export interface Loteria {
    id: number;
    nome: string;
    uuid: string;
    api_url: string;
    slug_url: string;
    aposta: string;
    dezenas: string;
    created_at: Date;
    updated_at?: Date;
}
