import React from 'react';
import {withRouter} from 'react-router-dom';
import { Instructions, Tutorial, Header, Footer } from './styles';

function About() {
    return(
        <Tutorial>
            <Header>Easy Tutorial</Header>
            <Instructions>
                <p>Instruction #1</p>
                <p>Instruction #2</p>
                <p>Instruction #3</p>
            </Instructions>
            <Footer>Thanks for enjoying!!</Footer>
        </Tutorial>
    );
}

export default withRouter(About);
