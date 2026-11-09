import { Routes } from '@angular/router';
import { Directivas } from './components/directivas/directivas';
import { Operaciones } from './components/operaciones/operaciones';
import { Home } from './components/home/home';

export const routes: Routes = [

  {path: '', redirectTo:'/home', pathMatch:'full'},

  {path: 'home', component: Home},
  {path: 'operaciones', component: Operaciones},
  {path: 'directivas', component: Directivas}
];
