import React from 'react';
import { Route, Redirect, Link } from "react-router-dom";

class CrearCardProducto extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      carrito: []
    }
    this.agregarproducto = this.agregarproducto.bind(this);
  }

  agregarproducto(producto){
    this.state.carrito.push(producto)
    console.log(this.state.carrito);
  }

  render(){
    let productos = this.props.producto;
    let carro = [];
    let agregar = (nombre) =>{
      let cantidadSelec = document.getElementById(`${'selec'}${nombre}`).value;
      let producto = {
        nombre: nombre,
        cantidadSelec: cantidadSelec
      }
      this.agregarproducto(producto);
    }

    const listProd = productos.map((item)=>

    <div className="col s3 card cardPr" key={item.nombre}>

          <div className="card-image" >
            <img src={item.url} alt={item.nombre} />
          </div>
          <div className="card-content">
            <span className="card-title titleProd">{item.nombre}</span>
            <span><strong>Precio: </strong><span className="contenidoSpan">${item.precio}</span></span>
            <br />
            <span><strong>Unidades disponibles: </strong><span className="contenidoSpan">{item.cantidadDisponible}</span></span>
          </div>
          <div className="card-action">
            <Link to={`${'/producto'}/${item.nombre}`}>Ver más</Link>
            <a id="btnAdd" onClick={() => agregar(item.nombre)}>Añadir</a>
            <input className="black-text" type="number" id={`${'selec'}${item.nombre}`} min="1" max={item.cantidadDisponible} defaultValue="1" />
          </div>
    </div>

    );
    return listProd;
  }
}

export default CrearCardProducto;
