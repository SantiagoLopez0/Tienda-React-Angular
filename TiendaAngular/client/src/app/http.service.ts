import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';




@Injectable({
    providedIn: 'root'
})

export class HttpService {
  selectedUser: User;
  users: User[];

  constructor(private http: HttpClient) {
    this.selectedUser = new User();
  }

  URL_API = 'http://localhost:3000/api/users';

  getUsers() {
    return this.http.get(this.URL_API);
  }

  loginUser(user, pass){
    return this.http.post(this.URL_API+'/login', {user: user, pass: pass});
  }


}
