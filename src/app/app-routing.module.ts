import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'pelicula',component:PeliculaComponent},
  {path:'resultado',component:ResultadoComponent},
  {path:'lista',component:ListaComponent},
  {path:'**',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
