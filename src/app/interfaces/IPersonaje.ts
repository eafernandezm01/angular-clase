export enum TIPO_PESONAJE{
    mago,
    guerrero,
    arquero,
    druida
}

export interface IPersonaje{
    nombre: string;
    nivel: number;
    tipo: TIPO_PESONAJE;
    habilidad?: string[];
    vida: number
}