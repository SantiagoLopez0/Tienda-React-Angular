import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private carrito: any[] = [];
  private numClick = 0;

  constructor() { }

  getCarrito(){
    return this.carrito;
  }

  setCarrito(param: any[]){
    return this.carrito.push(param);
  }

  getNumProd(){
    return this.numClick;
  }

  setNumProd(){
    this.numClick = this.numClick+1;
  }

  resetNumProd(){
    this.numClick = 0;
  }

  resetCarrito(){
    return this.carrito = [];
  }
}
