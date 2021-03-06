import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpService } from '../http.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers: [ HttpService ]
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup;
  userNull = false;
  incorrectPassword = false;

  constructor(private router: Router, private httpService: HttpService) {}

  ngOnInit() {
    this.miFormulario = new FormGroup({
      'user': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  onLogin(){
    let user = this.miFormulario.value.user;
    let password = this.miFormulario.value.password;
    this.validateLogin(user, password);
  }

  validateLogin(user: any, pass: any){
    this.httpService.loginUser(user, pass)
    .subscribe(
      (res: HttpResponse<any>) => {
        
        let respuesta = res.status;
        if(respuesta.toString() == 'Validado'){
          this.router.navigate(['home']);
        }else if(respuesta.toString() == 'Contraseña incorrecta'){
          console.log(respuesta);
          this.incorrectPassword = true;
          this.userNull = false;
        }else if(respuesta.toString() == 'Usuario no registrado'){
          console.log(respuesta);
          this.userNull = true;
        }
      })
  }

}
