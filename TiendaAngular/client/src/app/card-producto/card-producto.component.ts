import { Component, OnInit } from '@angular/core';
import { ProductoHttpService } from '../producto-http.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  private productos : any[] = [];

  constructor(private productoService: ProductoHttpService, private router: Router) { }

  ngOnInit() {
    const prod = this.productoService.getProd();
    prod.subscribe((prodData: any[]) => {
      this.productos = prodData;
    })
  }
}
