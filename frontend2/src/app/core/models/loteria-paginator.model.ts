import { Loteria } from "./loteria.model";

export interface LoteriaPaginator {
    first: number|null,
    prev: number|null,
    next: number|null,
    last: number|null,
    pages: number|null,
    items: number|null,
    data: Loteria[]
}