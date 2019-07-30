import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  sendDatosLogin(user, pass){
    const datos = {
      userJson : JSON.stringify(user),
      passJson : JSON.stringify(pass)
    }
    return this.http.post('/usuarios/login', datos);
  }
}
