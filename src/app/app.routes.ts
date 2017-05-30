/**
 * Created by root on 30/05/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const APP_ROUTES : Routes = [

  { path:'home', component:HomeComponent },
  { path:'buscar', component:BuscarComponent },
  { path:'pelicula', component:PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );
