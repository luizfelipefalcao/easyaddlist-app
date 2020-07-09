import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { Main } from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    //Se tem usuario logado, direcione para '/'
    if (firebase.getCurrent()) { 
      return this.props.history.push("/");
    }

  }

  entrar(e) {
    e.preventDefault();
   
    this.login();
  }

  login = async () => {
    const { email, password } = this.state;

    try { //Trata o login conforme o que digitado pelo usuario
      await firebase.login(email, password).catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert("Este usuario não existe!");
        } else {
          alert("Codigo de erro:" + error.code);
          return null;
        }
      });


    } catch (error) {
      alert(error.message);
    }

    window.location.reload();
  };

  render() {
    return (
      <Main>
        ...
      </Main>
    );
  }
}
export default withRouter(Login);
