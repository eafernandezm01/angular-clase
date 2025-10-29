export const TOPE_VIDA: number = 100;

export enum TIPO_PESONAJE {
  mago = 'Mago',
  guerrero = 'Guerrero',
  arquero = 'Arquero',
  druida = 'Druida',
}

export interface IPersonaje {
  nombre: string;
  nivel: number;
  tipo: TIPO_PESONAJE;
  habilidad?: string[];
  vida: number;
  imagen: string;
}
