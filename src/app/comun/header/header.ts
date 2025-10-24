import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  miNombre: string = 'Eva';


  getFecha (): string {
    return new Date().toDateString();
  }
}
