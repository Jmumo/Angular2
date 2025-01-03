import { interval } from "rxjs";

export interface Ticket{
    id : string;
    title: string;
    request: string;
    status: 'open' | 'closed'
}