import React from 'react';
import { Route, Redirect, Link } from "react-router-dom";
import request from 'superagent';
import Tienda from './catalogo.jsx'


class Login extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        valueUser: '',
        valuePass: '',
        login: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      if(event.target.id == 'user'){
        this.setState({valueUser: event.target.value});
      }else{
        this.setState({valuePass: event.target.value});
      }
    }

    handleSubmit(event) {
      event.preventDefault();
      request.post('http://localhost:3000/api/users/login')
      .send({ user: this.state.valueUser, pass: this.state.valuePass })
      .end((err, res) => {
          const response = JSON.parse(res.text).status;
          if(response == 'Validado'){
            //<Route exact path="/" render={() => ( <Redirect to="/tienda"/> )  }/>
            //<Redirect to={{pathname: "/tienda"}} />;
            this.setState({login: true});
            alert(response);
          }else if(response == 'Contraseña incorrecta'){
            document.getElementById('labelUser').style.display = 'none';
            document.getElementById('labelPass').style.display = 'flex';
          }else if(response == 'Usuario no registrado'){
            document.getElementById('labelUser').style.display = 'flex';
            document.getElementById('labelPass').style.display = 'none';

          }
          if(err != null){
            console.log(err);
          }
      });

    }

    render(){
        if (this.state.login){
          return <Redirect to='/tienda'/>
        }
        return(
          <div className="row mainContainer">
            <div className="col s5 loginContainer center-align">
              <div className="loginTitle">Inicio de Sesión</div>
              <div className="fields-Container">
                <form className="" action="index.html" method="post" onSubmit={this.handleSubmit}>
                  <input className="inputLogin" type="text" id="user" value={this.state.valueUser} onChange={this.handleChange} placeholder="Usuario..."/>
                  <label className="alertMessage" id="labelUser">Usuario no registrado</label>
                  <input className="inputLogin" type="password" id="pass" value={this.state.valueUSer} onChange={this.handleChange} placeholder="Contraseña..."/>
                  <label className="alertMessage" id="labelPass">Contraseña incorrecta</label>

                  <button type="submit" className="button loginButton">Ingresar</button>
                </form>
              </div>
            </div>
          </div>
        );
        }
}

export default Login;
