import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
    providedIn: 'root'
})

export class HttpService {
  constructor(private http: HttpClient) {}

  URL_API = 'http://localhost:3000/api/users';

  getUsers() {
    return this.http.get(this.URL_API);
  }

  loginUser(user, pass){
    return this.http.post(this.URL_API+'/login', {user: user, pass: pass});
  }


}
