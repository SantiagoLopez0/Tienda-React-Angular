import React from 'react';
import Navbar from './navbar.jsx';
import { Route, Redirect, Link } from "react-router-dom";
import request from 'superagent';
import CrearCardProducto from './cardProducto.jsx'

class Tienda extends React.Component{
  constructor(){
    super();
    this.state = {
      productos: [],
      carrito: []
    }

    this.changeBrowser = this.changeBrowser.bind(this);
  }

  componentDidMount() {

    request.get('http://localhost:3000/api/productos/')
    .end((err, res) => {
      const response = JSON.parse(res.text);
      this.setState({productos: response});
      console.log(this.state.productos);
    })
  }

  componentWillUnmount() {

  }

  changeBrowser(input){
    let inputValue = input.target.value;
    let inputLower = inputValue.toLowerCase();
    let productos = this.state.productos;

    let aux = [];
    if(inputLower != ''){
      for(let key in productos){
        let nombreProd = productos[key].nombre.toLowerCase();
        if(nombreProd.indexOf(inputLower) !== -1){
          aux.push(productos[key]);
        }
      }
      if(aux.length == 0){
        this.setState({productos: []});
        document.getElementById('noProd').style.display = 'block';
        console.log('Producto no encontrado');
      }else {
        this.setState({productos: aux});
        //console.log(aux);
      }
    }else{
      document.getElementById('noProd').style.display = 'none';
      this.componentDidMount();
    }

  }

  agregarproducto(){

  }

    render(){
        return(
          <div className="container">
            <Navbar />
            <div className=" col s12 card catalogo">
              <div className="car-title">
                <span>Catálogo de Productos</span>
                <input type="text" className="black-text left-align buscador" id="formulario" onKeyUp={this.changeBrowser} placeholder="Busca un producto..." />
              </div>
              <div className="divider"></div>
              <div className="contenedorProducto">

                  <CrearCardProducto producto={this.state.productos} agregarProd={this.agregarproducto}/>

              </div>
              <div style={{display: 'none'}} id="noProd"><h4>Producto no encontrado</h4></div>
            </div>
          </div>
        );
    }
}


export default Tienda;
