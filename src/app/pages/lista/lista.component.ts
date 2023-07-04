import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  trendingMovie:any=[];
  listMovieAction:any=[];
 


  constructor(private movieService:MovieApiService ){}

  ngOnInit():void{
    this.trendingData();
    this.movieAction();
  }


  trendingData(){
    this.movieService.trendingMovieApiData().subscribe((res) =>{
      this.trendingMovie = res.results;
    })
  }

  movieAction(){ 
    this.movieService.fetchActionMovies().subscribe((res) =>{
        this.listMovieAction = res.results;
    })
  }

}
