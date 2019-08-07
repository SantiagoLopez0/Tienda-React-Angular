import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';

import { CarritoService } from '../carrito.service';
import { ProductoHttpService } from '../producto-http.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  private productos: any[] = [];
  private precioTotal = 0;
  private carritoVacio = false;
  constructor(private productoService: ProductoHttpService, private router: Router, private carrito: CarritoService) {}

  ngOnInit() {
    if(this.carrito.getCarrito().length == 0){
      alert('No tienes productos en el carrito.');
      this.carritoVacio = true;
      //this.router.navigate(['/home']);
    }else{
      this.getInfoProd();
      this.carritoVacio = false;
    }
  }
  
  getInfoProd(){
    let carrito = this.carrito.getCarrito();
    const prod = this.productoService.getProd();

    prod.subscribe((prodData: any[]) => {
      for(let key in prodData){
        for(let keyC in carrito){
          if(prodData[key].nombre == carrito[keyC].nombre){
            let carritoDef = {
              nombre: prodData[key].nombre,
              url: prodData[key].url,
              cantidadSelec: carrito[keyC].cantidadSelec,
              cantidadRestante: prodData[key].cantidadDisponible-carrito[keyC].cantidadSelec,
              precio: prodData[key].precio*carrito[keyC].cantidadSelec
            }
            this.precioTotal = this.precioTotal+carritoDef.precio;
            this.productos.push(carritoDef);
          }
        }
      }
      console.log(this.precioTotal);
    })
    //console.log(this.productos);
  }

  cancelarCompra(){
    this.router.navigate(['/home']);
    //this.resetCarrito();
    this.carrito.resetCarrito();
    this.carrito.resetNumProd();
  }

  hacerCompra(){
      for(let key in this.productos){
        const nombre = this.productos[key].nombre;
        const cantidadRes = this.productos[key].cantidadRestante;
        this.productoService.updateProd(nombre, cantidadRes)
        .subscribe((res: HttpResponse<any>) => {
          let respuesta = res.status;
          if(respuesta.toString() == 'actualizado'){
            alert('Compra realizada con exito');
            this.router.navigate(['/home']);
            this.carrito.resetCarrito();
            this.carrito.resetNumProd();
          }else{
            alert(respuesta);
          }
        })
      }
  }

}
