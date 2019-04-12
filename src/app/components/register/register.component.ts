import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {


  public userEmail:String="";
  public userPassword:String="";
  public userName:String="";

  constructor(private router:Router) { }

  ngOnInit() {
  }


  public onSubmit(data){

     this.userEmail="";
     this.userPassword="";

      for (let controls in data.controls){
       
        if(controls.indexOf('fullname')>-1){
          this.userName=data.controls[controls]['value'];
        }
        if(controls.indexOf('email')>-1){
          this.userEmail=data.controls[controls]['value'];
        }
        if(controls.indexOf('password')>-1){
          this.userPassword=data.controls[controls]['value'];
        } 
      }
      sessionStorage.setItem(this.userEmail.toUpperCase(),JSON.stringify({'password':this.userPassword,'name':this.userName}));
      sessionStorage.setItem("userName",this.userName.toString());
      this.router.navigateByUrl('/homepage');
  }
}
