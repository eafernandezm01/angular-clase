import { Component } from '@angular/core';
import { IPersonaje, TIPO_PESONAJE } from '../../interfaces/IPersonaje';

@Component({
  selector: 'app-detalle-personaje',
  imports: [],
  templateUrl: './detalle-personaje.html',
  styleUrl: './detalle-personaje.css'
})
export class DetallePersonaje {
  
  personaje: IPersonaje = {
    nombre: 'Gandalf',
    nivel: 70,
    tipo: TIPO_PESONAJE.mago,
    vida: 0,
    imagen: './gandalf.png'
  }

  constructor (){
  }


}
