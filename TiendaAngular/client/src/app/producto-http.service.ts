import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoHttpService {

  constructor(private http: HttpClient) { }

  URL_API = 'http://localhost:3000/api/productos/';

  getProd() {
    return this.http.get(this.URL_API);
  }

  getOneProd(name){
    return this.http.get(this.URL_API+ name);
  }

  updateProd(nombre, cantidad) {
    const data = {
      nombre: nombre,
      cantidad: cantidad
    };
    return this.http.post(this.URL_API+'update', data);
  }
}
