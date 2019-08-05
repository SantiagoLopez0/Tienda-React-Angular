import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  titulo = 'La Bodega';
  barraNav : object[];

  constructor(private router: Router, private http: HttpService) { }

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
        this.http.logoutUser().subscribe((res: HttpResponse<any>) => {
          let respuesta = res.status;
          if(respuesta.toString() == 'logout'){
            this.router.navigate(['']);
            alert("Chao");
          }
        })
    }else if(idTarget == "catalogo"){
      this.router.navigate(['/home']);
    }else{
      this.onShopping();
    }
  }

  onShopping(){
    this.router.navigate(['/carrito']);
  }

}
