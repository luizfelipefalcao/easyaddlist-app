import React from 'react';
import {withRouter} from 'react-router-dom';
import { Main } from './styles';

const NotFound = () => {
    return(
        <Main>
            <h1>Page Not Found!!</h1>
        </Main>
    )
}

export default withRouter(NotFound);