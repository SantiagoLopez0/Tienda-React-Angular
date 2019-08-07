import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
//import { CardProductoComponent } from '../card-producto/card-producto.component';
import { ProductoComponent } from '../producto/producto.component';

import { CarritoService } from '../carrito.service';
import { ProductoHttpService } from '../producto-http.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  private productos : any[] = [];
  private noProduct: Boolean = false;
  constructor(private productoService: ProductoHttpService,
    private router: Router,
    private carrito: CarritoService) { }

  ngOnInit() {
    this.getProductos();
    console.log(this.carrito.getCarrito())
  }

  agregarProd(valueCantidad, valueNombre){
    let producto: any = {
      nombre: valueNombre,
      cantidadSelec: valueCantidad
    }
    this.carrito.setCarrito(producto);
    this.carrito.setNumProd();
    //console.log(this.carrito.getCarrito());
  }

  onChange(value){
    let param = value.toLowerCase();
    let aux: any[] = [];
    if(param != ''){
      for(let key in this.productos){
        let nombreProd = this.productos[key].nombre.toLowerCase();
        if(nombreProd.indexOf(param) !== -1){
          aux.push(this.productos[key]);
        }
      }
      if(aux.length == 0){
        this.noProduct = true;
        console.log('Producto no encontrado');
      }
      this.productos = aux;
    }else{
      this.getProductos();
      this.noProduct = false;
    }
    return aux;
  }

  getProductos(){
    const prod = this.productoService.getProd();
    prod.subscribe((prodData: any[]) => {
      this.productos = prodData;
    })
  }
}
