import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

 private baseurl = "https://api.themoviedb.org/3";
 private apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  constructor(private http: HttpClient) { }

  //bannerApiData
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
  }

  // trendingMovieApiData

  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/week?api_key=${this.apikey}`)
  }

  //getSearchMovie

  getSearchMovie(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data}`);
  }

  // getMovieDetails

  getMovieDetails(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  //getMovieVideo

  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`);
  }

  //getMovieCredit

  getMovieCredit(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  //fetchActionMovies ACTION

  fetchActionMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

    //fetchActionMovies Adventure

  fetchAdventureMovies():Observable<any>{
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

      //fetchActionMovies ANIMATION

  fetchAnimationMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

    //fetchActionMovies COMEDY 

  fetchComedyMovies():Observable<any>{
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

      //fetchActionMovies DOCUMENTARY

  fetchDocumentaryMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

    //fetchActionMovies SCIENCE-FICTION

  fetchScienceMovies():Observable<any>{
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

      //fetchActionMovies THRILLER

  fetchThrillerMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
}
