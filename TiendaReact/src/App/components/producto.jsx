import React from 'react';
import { Route, Redirect, Link } from "react-router-dom";
import Navbar from './navbar.jsx';
import request from 'superagent';


class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            producto: []
        };
    }

    componentDidMount(){
      const { nombre } = this.props.match.params

      request.get('http://localhost:3000/api/productos/')
      .end((err, res) => {
        const response = JSON.parse(res.text);
        for(let key in response){
          if(response[key].nombre == nombre){
            this.setState({producto: response[key]});
            console.log(this.state.producto);
          }
        }
      })
    }

    render(){
        return(
          <div className="row containerCard">
            <div className="container">
              <Navbar />
              <div className="col s12 card horizontal">
                <div className="divider"></div>
                  <div className="card-image" >
                    <img src={this.state.producto.url} alt={this.state.producto.nombre} />
                  </div>
                  <div className="card-stacked">
                    <div className="card-title">
                      <h2>{this.state.producto.nombre}</h2>
                    </div>
                    <div className="card-content">
                      <span>{this.state.producto.descripcion}</span>
                      <br />
                      <span><strong>Precio: </strong><span className="contenidoDB">${this.state.producto.precio}</span></span>
                      <br />
                      <span><strong>Unidades disponibles: </strong><span className="contenidoDB">{this.state.producto.cantidadDisponible}</span></span>
                    </div>
                    <div className="card-action">
                      <Link to="/tienda">Volver</Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      )
  }
}

export default Product;
