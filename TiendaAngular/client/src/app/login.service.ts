import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpService } from './http.service'

@Injectable()

export class LoginService {

    constructor(private httpService: HttpService){}

    validateLogin(user, pass){
      this.httpService.sendDatosLogin({user: user}, {pass: pass})
      .subscribe(
        (data: HttpResponse<any>) => console.log(data)
      )
    }

}
