import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Main, Arrow } from './styles';
import {BsArrowLeft} from 'react-icons/bs';


const NotFound = () => {
    return(
        <>
            <Arrow>
                <Link to='/'>
                    <BsArrowLeft/> 
                </Link>
            </Arrow>
            <Main>
                <h1>Page Not Found!!</h1>
            </Main>
        </>
    )
}

export default withRouter(NotFound);