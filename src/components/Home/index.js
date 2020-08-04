import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Main } from './styles';
import { BsFillPlusCircleFill } from 'react-icons/bs';

function Home() {
    return(
        <Main>
                <h1>Create new list</h1>
            <Link to='newadd'>
                <BsFillPlusCircleFill/>
            </Link>
        </Main>
    );
}

export default withRouter(Home);