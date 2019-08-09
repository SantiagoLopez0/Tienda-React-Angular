import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            mensaje1: 'Plantillas para Reahjct.js',
            mensaje2: 'Titulo del compomente hijo2xd'
        };
    }
    render(){
        return(
            <div>
                <h1>{this.state.mensaje1} </h1>
            </div>
            );
        }
}

export default App;
