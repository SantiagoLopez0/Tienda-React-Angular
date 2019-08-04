import { Component, OnInit } from '@angular/core';
import { ProductoHttpService } from '../producto-http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  private producto: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoHttpService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getInfoProd();
  }

  getInfoProd(): void {
    const name = this.route.snapshot.paramMap.get('nombre');
    const getProd = this.productoService.getOneProd(name);

    getProd.subscribe((prodData: any[]) => {
      this.producto = prodData;
    })
  }

  goBack(){
    this.location.back();
  }

}
