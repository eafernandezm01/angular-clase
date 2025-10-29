import { Component } from '@angular/core';
import { IPersonaje, TIPO_PESONAJE, TOPE_VIDA } from '../../interfaces/IPersonaje';

@Component({
  selector: 'app-detalle-personaje',
  imports: [],
  templateUrl: './detalle-personaje.html',
  styleUrl: './detalle-personaje.css',
})
export class DetallePersonaje {
  personaje: IPersonaje = {
    nombre: 'Gandalf',
    nivel: 70,
    tipo: TIPO_PESONAJE.mago,
    vida: 0,
    imagen: './gandalf.png',
  };

  constructor() {}

  resucitar(): void {
    this.personaje.vida = TOPE_VIDA;
  }

  matar(): void {
    this.personaje.vida = 0;
  }

  hacerPupa (): void{
    const pupa = Math.round(Math.random()*(TOPE_VIDA/2));
    if (this.personaje.vida - pupa < 0)
      this.matar();
    else
      this.personaje.vida-=pupa
  } 
}
