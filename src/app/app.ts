import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './comun/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Eva Angelina';

  claseDe = '2º DAM';
}
