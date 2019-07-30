import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  titulo = 'La Bodega';
  barraNav : object[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.barraNav= [
      {
        nombre: 'cerrar sesión',
        iconName: 'exit_to_app',
      },
      {
        nombre: 'carrito',
        iconName: 'shopping_cart',
      },
      {
        nombre: 'catalogo',
        iconName: 'apps',
      }
    ]
  }

  onEvent(idTarget: string){
    if(idTarget == "cerrar sesión"){
        this.router.navigate(['']);
        alert("Chao");
    }else{
      alert("Otro");
    }
  }

  onShopping(){
    alert("Carrito");
  }

  onHome(){
    this.router.navigate(['home']);
  }

}
