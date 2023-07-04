import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movieDetailsResults:any;
  trendingMovie:any=[];
  movieVideo:any;
  movieCast:any;
  icon = "fa-sharp fa-solid fa-plus";
  constructor(private movieService:MovieApiService, private route: ActivatedRoute, private router : Router){}

  ngOnInit():void{
    let getParamId = this.route.snapshot.paramMap.get('id');

    this.getMovie(getParamId);
    this.trendingData();
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
    
  }
  
 

  getMovie(id:any){
    this.movieService.getMovieDetails(id).subscribe((res) =>{
        this.movieDetailsResults = res;
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
    });

    
    })
  }


  getMovieLocal(id:any){
    this.movieService.getMovieDetails(id).subscribe((res) =>{
        this.movieDetailsResults = res;
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
    });
    })
  }

  trendingData(){
    this.movieService.bannerApiData().subscribe((res) =>{
      this.trendingMovie = res.results;
    })
  }

  agregar(){
    this.icon = "fa-solid fa-check";
  }

  getVideo(id:any){
    this.movieService.getMovieVideo(id).subscribe((res) =>{
      res.results.forEach((element:any) => {
          if (element.type =="Trailer") {
              this.movieVideo = element.key;
          }
      });
    })
  }

  getMovieCast(id:any){
    this.movieService.getMovieCredit(id).subscribe((res) =>{
      this.movieCast = res.cast;
    })
  }
}
