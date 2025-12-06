import { Routes } from '@angular/router';
import { DetallePersonaje } from './pages/detalle-personaje/detalle-personaje';
import { Padre } from './pages/padre/padre';

export const routes: Routes = [
  { path: 'detalle-personaje', component: DetallePersonaje },
  { path: 'padre', component: Padre },

  // ruta por defecto cuando ponga la / que muestre detalle
  { path: '', redirectTo: 'padre', pathMatch: 'full' }
];
