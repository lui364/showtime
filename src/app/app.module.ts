import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieApiService } from './services/movie-api.service';
import { HeaderComponent } from './pages/header/header.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { ListaComponent } from './pages/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    HeaderComponent,
    PeliculaComponent,
    ResultadoComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
