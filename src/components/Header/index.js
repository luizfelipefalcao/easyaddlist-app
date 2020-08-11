import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Head, Logo } from './styles';
// import { BsFillInfoCircleFill } from 'react-icons/bs';



class Header extends Component {

    render(){
        return(
            <Head>
                <div>
                    <Logo>EasyAdd</Logo>
                    {/* <Link to='/about'>
                        <About>
                            <h2>About</h2>
                            <BsFillInfoCircleFill color={'#006A88'}/>
                        </About>
                    </Link> */}
                </div>
            </Head>
        );
    }
}
export default withRouter(Header);