import { Component, Input } from '@angular/core';
import { TOPE_VIDA, IPersonaje } from '../../interfaces/IPersonaje';

@Component({
  selector: 'app-personaje',
  imports: [],
  templateUrl: './personaje.html',
  styleUrl: './personaje.css'
})
export class Personaje {

  topeVida:number = TOPE_VIDA;

  @Input()
  personaje!: IPersonaje;

  constructor() {}

  resucitar(): void {
    this.personaje.vida = TOPE_VIDA;
  }

  matar(): void {
    this.personaje.vida = 0;
  }

  hacerPupa(): void {
    const pupa = Math.round(Math.random() * (TOPE_VIDA / 2));
    if (this.personaje.vida - pupa < 0) this.matar();
    else this.personaje.vida -= pupa;
  }


  getClassVida(): string {
    const { vida } = this.personaje;

    if (vida === 0) return 'rojo';
    if (vida > 0 && vida <= 25) return 'naranja';
    if (vida > 25 && vida <= 50) return 'amarillo';
    if (vida > 50 && vida <= 75) return 'verde-claro';
    return 'verde-oscuro';
  }

  sanar (): void {
    const cura = Math.round(Math.random() * (TOPE_VIDA / 2));
    if (this.personaje.vida + cura <  TOPE_VIDA)
        this.personaje.vida += cura;
    else this.resucitar();
  }
}
