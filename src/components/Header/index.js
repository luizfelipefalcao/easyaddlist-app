import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Head, Logo, MenuOpt, About } from './styles';


class Header extends Component {

    render(){
        return(
            <Head>
                <Link to='/'>
                    <Logo>EasyAdd</Logo>
                </Link>
                <MenuOpt>
                    <Link to='/about'>
                        <About>
                            <h2>About</h2>
                        </About>
                    </Link>
                </MenuOpt>
            </Head>
        );
    }
}
export default withRouter(Header);