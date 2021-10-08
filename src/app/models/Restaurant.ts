import { Eval } from "./Eval";

export interface Restaurant {
    id: number;
    nom: string;
    adresse: string;
    evaluations: Eval[];
}