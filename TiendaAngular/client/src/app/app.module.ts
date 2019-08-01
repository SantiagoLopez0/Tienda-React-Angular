import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: CatalogoComponent },
  { path: 'carrito', component: CarritoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CatalogoComponent,
    CardProductoComponent,
    ProductoComponent,
    CarritoComponent
  ],
  imports: [
    RouterModule.forRoot(
     appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
