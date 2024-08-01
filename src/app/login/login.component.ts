import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message!: string;

  constructor(public authService: AuthService, public router: Router){ this.setMessage()}
  login(){
    this.authService.login();
    this.setMessage()
    
    this.authService.IsAuthenticated().then((isauthenticated) => {
      if(isauthenticated){
        let redirectUrl = this.authService.redirectUrl 
        ? this.router.parseUrl(this.authService.redirectUrl): '/admin';
        this.router.navigateByUrl(redirectUrl);
      }
    })
  }
  logout(){
    this.authService.logout();
    this.setMessage();

  }

  setMessage(){
    this.message='logged ';

    this.authService.IsAuthenticated().then((isAuthenticated: Boolean)=>{
      if(isAuthenticated){
        this.message+='in';
      }else{
        this.message+='out';
      }
    })
  }
}
