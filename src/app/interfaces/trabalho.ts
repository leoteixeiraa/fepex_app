export interface Trabalho {
    id?: string;
    title?: string;
    authors?: string;
    description?: string;
    category?: string;
    advisors?: string; //orientadores
    local?: string;
    observation?: string;
    createdAt?: number;
    userId?: string;
}
