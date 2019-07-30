import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  onLogin(user, password){
    alert(user);
    alert(password);
    if(user != ""){
      this.loginService.validateLogin(user, password);


    }
  }

}
