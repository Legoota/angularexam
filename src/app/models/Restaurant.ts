import { Eval } from "./Eval";

export interface Restaurant {
    id: number;
    name: string;
    address: string;
    evals: Eval[];
}