export interface Oficina {
    id?: string;
    title?: string;
    date?: string;
    authors?: string;
    description?: string;
    short_description?: string;
    time_start?: string;
    time_end?: string;
    vacancies?: string; //vagas
    status?: string;
    picture?: string;
    advisors?: string; //orientadores
    local?: string;
    observation?: string;
    subscribed?: string;
    createdAt?: number;
    userId?: string;
}
