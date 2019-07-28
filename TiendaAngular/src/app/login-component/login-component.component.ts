import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  loginVerify = true;

  constructor() { }

  ngOnInit() {
  }

  onLogin(user, password){
    alert(user);
    alert(password);
    !this.loginVerify;
  }

  onLog(){
    alert('Si se pudo el condicionaaaaaal');
  }

}
