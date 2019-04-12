import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html'
})
export class TopPanelComponent implements OnInit {

  
  public username = sessionStorage.getItem('userName');
  constructor(private router:Router) { }

  ngOnInit() {}



  public logout(){
    sessionStorage.removeItem('userName');
    this.router.navigateByUrl('/');
  }
}
