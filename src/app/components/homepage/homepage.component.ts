import { Component, OnInit } from '@angular/core';
import { ReadJsonService } from 'src/app/services/read-json.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  public movieList=[];
  searchText: any;
  orderby: any;
  OrderType: any;
  p: any;

  constructor(private readJsonService:ReadJsonService,private router:Router) { }

  ngOnInit() {
    this.readMovieData();
    this.checkLogin();
  }

 
  private readMovieData(){
    this.readJsonService.getJSON().subscribe(data => {
      console.log(data);
        this.movieList = data.movies;
    });
  }

  public setStarRating(id){
    var temp = document.getElementById(id.split('|')[0]+'rating');
    temp.innerHTML="<p class='card-text'>You have rated "+id.split('|')[1]+" stars</p>";
  }

  public checkLogin(){
    if(!sessionStorage.getItem('userName')){
      this.router.navigateByUrl('/');
    }
  }
}
