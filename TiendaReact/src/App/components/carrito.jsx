import React from 'react';
import CrearCardProducto from './cardProducto.jsx';
import Navbar from './navbar.jsx';
import { Route, Redirect, Link } from "react-router-dom";
import request from 'superagent';

class Carrito extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      listaCarro: [],
      precioTotal: 0,
      backToHome: false
    }

    this.cancelarCompra = this.cancelarCompra.bind(this);
    this.hacerCompra = this.hacerCompra.bind(this);
  }

  componentDidMount(){
    let localSt = JSON.parse(localStorage.getItem('carroTemp'));
    //this.setState({listaCarro: localSt});
    let carrito = [];
    request.get('http://localhost:3000/api/productos/')
    .end((err, res) => {
      const response = JSON.parse(res.text);
      for(let key in response){
        for(let keyC in localSt){
          if(response[key].nombre == localSt[keyC].nombre){
            let carritoDef = {
              nombre: response[key].nombre,
              url: response[key].url,
              cantidadSelec: localSt[keyC].cantidadSelec,
              cantidadRestante: response[key].cantidadDisponible-localSt[keyC].cantidadSelec,
              precio: response[key].precio*localSt[keyC].cantidadSelec
            }
            carrito.push(carritoDef);
            this.setState((state)=>{
              return {
                precioTotal: state.precioTotal+carritoDef.precio
              };
            });
          }
        }
      }
      this.setState({listaCarro: carrito})
      console.log(this.state.precioTotal);
    })

  }

  cancelarCompra(){
    this.setState({listaCarro: [], precioTotal: 0, backToHome: true});
    localStorage.setItem('carroTemp', JSON.stringify([]));
    alert('Compra cancelada');
  }

  hacerCompra(){
    let carro = this.state.listaCarro;
    for(let key in carro){
      const nombre = carro[key].nombre;
      const cantidadRes = carro[key].cantidadRestante;
      request.post('http://localhost:3000/api/productos/update')
      .send({ nombre: nombre, cantidad: cantidadRes })
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
        let respuesta = res.status;
        if(respuesta.toString() == 200){
          alert('Compra realizada con exito');
          this.setState({listaCarro: [], precioTotal: 0, backToHome: true});
          localStorage.setItem('carroTemp', JSON.stringify([]));
        }else{
          alert(respuesta);
        }
      })
    }
  }

  render(){
    if (this.state.backToHome){
      return <Redirect to='/tienda'/>
    }
    return(
      <div className="row mainContainer">
        <div className="container">
          <Navbar />
          <div className="col s12 card">
            <div className="card-title">
              <h3>Carrito de Compras</h3>
            </div>
            <div className="" >
              <div className="col s6">
                <ListProductos productos={this.state.listaCarro}/>
              </div>
            </div>
            <div className="col s6">
              <div className="card-content">
                <h5>Precio Total: ${this.state.precioTotal}</h5>
              </div>
              <div className="btnGroup">
                <a onClick={this.cancelarCompra} className="btn blue lighten-4">Cancelar</a>
                <a onClick={this.hacerCompra} className="btn blue lighten-4">Pagar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function ListProductos(props){
  let productos = props.productos;

  const listProd = productos.map((item)=>
    <li className="collection-item avatar" key={item.nombre}>
      <img src={item.url} alt={item.nombre} className="circle" />
      <span className="title">{item.nombre}</span>
      <p>
        <span>Nombre: <span className="contSpan">{item.nombre}</span></span>
        <br />
        <span>Cantidad: <span className="contSpan">{item.cantidadSelec}</span></span>
        <br />
        <span>Precio: <span className="contSpan">${item.precio}</span></span>
      </p>
    </li>
  );
  return (
    <ul className="collection">{listProd}</ul>
  );

}

export default Carrito;
