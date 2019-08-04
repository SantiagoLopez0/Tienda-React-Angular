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
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInfoProd();
  }

  getInfoProd() {
    const name = this.route.snapshot.paramMap.get('nombre');
    const getProd = this.productoService.getProd();

    getProd.subscribe((prodData: any[]) => {
      let aux : any[] = [];
      for(let key in prodData){
        if(prodData[key].nombre == name){
          this.producto = prodData[key];
        }
      }
    })
  return this.producto;
}

}
