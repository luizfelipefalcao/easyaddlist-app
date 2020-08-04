import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { Instructions, Tutorial, Header, Footer, Arrow } from './styles';
import {BsArrowLeft} from 'react-icons/bs';

function About() {
    return(
        <>
            <Arrow>
                <Link to='newlist'>
                    <BsArrowLeft/> 
                </Link>
            </Arrow>
            <Tutorial>
                <Header>Easy Tutorial</Header>
                <Instructions>
                    <p>Instruction #1</p>
                    <p>Instruction #2</p>
                    <p>Instruction #3</p>
                </Instructions>
                <Footer>Thanks for enjoying!!</Footer>
            </Tutorial>
        </>
    );
}

export default withRouter(About);
