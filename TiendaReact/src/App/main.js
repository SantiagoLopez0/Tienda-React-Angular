import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './home.jsx';
import Usuarios from './usuarios.jsx';
import Lenguajes from './lenguajes.jsx';

//ReactDOM.render(<App />, document.getElementById('app'));

const routing = (
    <BrowserRouter>
        <Route path= '/' component= {App} />
        <Route exact path='/' component= {Home} />
        <Route path='/home' component= {Home} />
        <Route path= '/usuarios' component= {Usuarios} />
        <Route path= '/lenguajes' component= {Lenguajes} />
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('app'));