import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  @Input()
  nombre!: string;

  @Output()
  llamadaPerdida = new EventEmitter<string>();


  llamarAPapa ():void{
    this.llamadaPerdida.emit (this.nombre);
  }
}
