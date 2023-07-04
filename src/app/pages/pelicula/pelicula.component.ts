import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  trendingMovie:any=[];
  listMovieAction:any=[];
  listMovieAdventure:any=[];
  listMovieAnimation:any=[];
  listMovieComedy:any=[];
  listMovieDocumentary:any=[];
  listMovieScience:any=[];
  listMovieThriller:any=[];


  constructor(private movieService:MovieApiService ){}

  ngOnInit():void{
    this.trendingData();
    this.movieAction();
    this.movieAdventure();
    this.movieAnimation();
    this.movieComedy();
    this.movieDocumentary();
    this.movieScience();
    this.movieThriller();
  }


  trendingData(){
    this.movieService.bannerApiData().subscribe((res) =>{
      this.trendingMovie = res.results;
    })
  }

  movieAction(){ 
    this.movieService.fetchActionMovies().subscribe((res) =>{
        this.listMovieAction = res.results;
    })
  }

  movieAdventure(){
    this.movieService.fetchAdventureMovies().subscribe((res) =>{
      this.listMovieAdventure = res.results;
    })
  }

  movieAnimation(){
    this.movieService.fetchAnimationMovies().subscribe((res) =>{
        this.listMovieAnimation = res.results;
    })
  }

  movieComedy(){
    this.movieService.fetchComedyMovies().subscribe((res) =>{
        this.listMovieComedy = res.results;
    })
  } 

  movieDocumentary(){
    this.movieService.fetchDocumentaryMovies().subscribe((res) =>{
        this.listMovieDocumentary = res.results;
    })
  }

  movieScience(){
    this.movieService.fetchScienceMovies().subscribe((res) =>{
        this.listMovieScience = res.results;
    })
  }

  movieThriller(){
    this.movieService.fetchThrillerMovies().subscribe((res) =>{
        this.listMovieThriller = res.results;
    })
  }
}

