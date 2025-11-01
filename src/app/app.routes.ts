import { Routes } from '@angular/router';
import { DetallePersonaje } from './pages/detalle-personaje/detalle-personaje';

export const routes: Routes = [
  { path: 'detalle-personaje', component: DetallePersonaje },
  // ruta por defecto cuando ponga la / que muestre detalle
  { path: '', redirectTo: 'detalle-personaje', pathMatch: 'full' },
];
