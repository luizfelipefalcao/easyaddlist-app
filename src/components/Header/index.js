import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Head, Logo, About } from './styles';
// import { BsInfoCircle } from 'react-icons/bs';



class Header extends Component {

    render(){
        return(
            <Head>
                <div>
                    <Link to='/'>
                        <Logo>EasyAdd</Logo>
                    </Link>
                    {/* <Link to='/about'>
                        <About>
                            <h2>About</h2>
                            <BsInfoCircle size={30} color={'#006A88'}/>
                        </About>
                    </Link> */}
                </div>
            </Head>
        );
    }
}
export default withRouter(Header);