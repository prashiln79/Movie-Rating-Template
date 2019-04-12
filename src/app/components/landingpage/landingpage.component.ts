import { Component, OnInit } from '@angular/core';
import { ReadJsonService } from 'src/app/services/read-json.service';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html'
})
export class LandingpageComponent implements OnInit {

  public movieList=[];
  constructor(private readJsonService:ReadJsonService) { }

  ngOnInit() {
    this.readMovieData();
    sessionStorage.removeItem('userName');
  }


  private readMovieData(){
    this.readJsonService.getJSON().subscribe(data => {
      console.log(data);
      this.movieList = data.movies;
  });
  }
}
