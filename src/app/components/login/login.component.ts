import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public userEmail:String="";
  public userPassword:String="";
  public invalidPassword:boolean =false;
  public invalidEmail:boolean =false;

  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(data){
    
    this.userEmail="";
    this.userPassword="";
    this.invalidPassword =false; 

     for (let controls in data.controls){
       if(controls.indexOf('email')>-1){
         this.userEmail=data.controls[controls]['value'];
       }
       if(controls.indexOf('password')>-1){
         this.userPassword=data.controls[controls]['value'];
       } 
     }

    if (sessionStorage.getItem((this.userEmail).toUpperCase())) {
      let tempUserpwd = JSON.parse(sessionStorage.getItem((this.userEmail).toUpperCase()))['password'];
      sessionStorage.setItem("userName",JSON.parse(sessionStorage.getItem((this.userEmail).toUpperCase()))['name']);
      if (this.userPassword == tempUserpwd) {
        this.router.navigateByUrl('/homepage');
      } else {this.invalidPassword = true;}
    } else {this.invalidEmail = true;}

  }
}
