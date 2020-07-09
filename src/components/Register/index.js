import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Main } from './styles';

class Register extends Component {
    render() {
        return(
            <Main>Register</Main>
        );
    }
}

export default withRouter(Register);