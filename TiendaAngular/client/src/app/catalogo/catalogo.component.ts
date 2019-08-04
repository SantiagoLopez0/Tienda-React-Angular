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
  constructor(private productoService: ProductoHttpService, private router: Router) { }

  ngOnInit() {
    const prod = this.productoService.getProd();
    prod.subscribe((prodData: any[]) => {
      this.productos = prodData;
    })
  }

  onChange(value){
    console.log(value);
  }

}
