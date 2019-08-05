import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
//import { CardProductoComponent } from '../card-producto/card-producto.component';
import { ProductoComponent } from '../producto/producto.component';
import { ProductoHttpService } from '../producto-http.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  private productos : any[] = [];
  private noProduct: Boolean = false;
  constructor(private productoService: ProductoHttpService, private router: Router) { }

  ngOnInit() {
    this.getProductos();
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
