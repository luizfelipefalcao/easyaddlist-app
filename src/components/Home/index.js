import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Main, NewList, PlusBtn } from './styles';
import { BsFillPlusCircleFill } from 'react-icons/bs';

function Home() {
    return(
        <Main>
            <NewList>
                <h1>Create new list</h1>
            </NewList>
            <Link to='newlist'>
                <PlusBtn>
                    <BsFillPlusCircleFill/>
                </PlusBtn>
            </Link>
        </Main>
    );
}

export default withRouter(Home);