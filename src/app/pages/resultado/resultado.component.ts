import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  nameMovie = "";
  searchResult:any;
  constructor(private movieService:MovieApiService,private route: ActivatedRoute){}


  ngOnInit():void{
    this.getNameMovie();
  }

  getNameMovie(){
    this.route.queryParams.subscribe((res:ParamMap) =>{
        this.nameMovie = res['movie'];
        this.getMovie();
    })
  }

  getMovie(){
    this.movieService.getSearchMovie(this.nameMovie).subscribe((res) =>{
        this.searchResult = res.results;
    })
  }
}
