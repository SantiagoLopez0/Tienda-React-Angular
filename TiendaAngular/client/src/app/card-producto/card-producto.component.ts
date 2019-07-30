import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  productos : object[];

  constructor() { }

  ngOnInit() {
    this.productos = [
      {
        nombre: 'Aguacate',
        url: '../../assets/aguacate.jpg',
        precio: 5,
        unidadesDisponibles: 30
      },
      {
        nombre: 'Ajo',
        url: '../../assets/ajo.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Almendras',
        url: '../../assets/almendras.jpg',
        precio: 7,
        unidadesDisponibles: 25
      },
      {
        nombre: 'Arandanos',
        url: '../../assets/arandanos.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Brocoli',
        url: '../../assets/brocoli.png',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Calabaza',
        url: '../../assets/calabaza.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Canela',
        url: '../../assets/canela.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Cebolla',
        url: '../../assets/cebolla.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Fresa',
        url: '../../assets/fresa.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Kiwi',
        url: '../../assets/kiwi.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Limon',
        url: '../../assets/limon.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Lychee',
        url: '../../assets/lychee.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Maiz',
        url: '../../assets/maiz.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Manzana',
        url: '../../assets/manzana.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Naranja',
        url: '../../assets/naranja.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Papa',
        url: '../../assets/papa.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Pasta',
        url: '../../assets/pasta.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Pimienta',
        url: '../../assets/pimienta.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Repollo',
        url: '../../assets/repollo.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Tomate',
        url: '../../assets/tomate.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },
      {
        nombre: 'Zanahoria',
        url: '../../assets/zanahoria.jpg',
        precio: 1,
        unidadesDisponibles: 40
      },

    ]
  }

}
