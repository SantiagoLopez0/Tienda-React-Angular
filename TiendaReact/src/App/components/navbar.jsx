import React from 'react';
import { Route, Redirect, Link } from "react-router-dom";

class Navbar extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      titulo: 'La Bodega',
    }
  }

    render(){
        return(
          <nav>
            <div className="nav-wrapper blue lighten-5">
              <span className="brand-logo black-text">{this.state.titulo}</span>
              <OptionsNavbar />
              <span id='carritoProd' className="black-text numClick">{this.props.cont}</span>
            </div>
          </nav>
        );
    }
}

function OptionsNavbar(){
  let barraNav= [
    {
      nombre: 'cerrar sesión',
      iconName: 'exit_to_app',
      redirect: '/'
    },
    {
      nombre: 'carrito',
      iconName: 'shopping_cart',
      redirect: '/carrito'
    },
    {
      nombre: 'catalogo',
      iconName: 'apps',
      redirect: '/tienda'
    }
  ]

  const listItems = barraNav.map((item)=>
      <li key={item.nombre}><Link to={item.redirect} title={item.nombre}> <i className="material-icons black-text">{item.iconName}</i></Link></li>
  );


  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">{listItems}</ul>
  );

}

export default Navbar;
