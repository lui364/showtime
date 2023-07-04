import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

constructor(private router:Router){}

  buscar(movie:any){
    this.router.navigate(['/resultado'],{
        queryParams:{movie:movie}
    })
  }
}
