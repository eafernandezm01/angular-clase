import { Component } from '@angular/core';
import { Hijo } from "../../hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  listDescendientes: string[] = ['Sara', 'Ángel', 'David', 'Silvia'];

  listLlamadas: string[]=[];


  procesarLlamada (event: string){
    this.listLlamadas.push (event);
  }
}
