import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Head, Logo, MenuOpt, About, Login } from './styles';
import { BsPerson } from 'react-icons/bs';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            logged: ''
        }
    }

    render(){
        return(
            <Head>
                <Logo>EasyAdd</Logo>
                { this.state.logged === ''
                ?
                <MenuOpt>
                    <Link to='/about'>
                        <About>About</About>
                    </Link>
                    <Link to='/login'>
                        <Login>
                            <h1>Login</h1>
                            <BsPerson size={33}/>
                        </Login>
                    </Link>
                </MenuOpt>
                :
                <MenuOpt>
                    <Link to='/about'>
                        <About>New List</About>
                    </Link>
                    <Link to='/login'>
                        <Login>
                            <h1>Logoff</h1>
                            <BsPerson size={33}/>
                        </Login>
                    </Link>
                </MenuOpt>

                }
            </Head>
        );
    }
}
export default withRouter(Header);