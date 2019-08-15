import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './components/login.jsx'
import Tienda from './components/catalogo.jsx'
import Product from './components/producto.jsx'
import Carrito from './components/carrito.jsx'


//ReactDOM.render(<App />, document.getElementById('app'));

const routing = (
    <BrowserRouter>
        <Route exact path= '/' component= {Login} />
        <Route path='/tienda' component= {Tienda} />
        <Route path='/producto/:nombre' component= {Product} />
        <Route path='/carrito' component= {Carrito} />
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('app'));
