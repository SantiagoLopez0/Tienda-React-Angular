import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends React.Component{
    render(){
        return(
        <Router>
           <Route exact path="/" component={Login} />
           <Route path="/about" component={Tienda} />
       </Router>

        );
    }
}

export default App;
