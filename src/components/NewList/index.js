import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Main, ListName } from './styles';
import { AiFillPlusCircle } from 'react-icons/ai';

class NewList extends Component {
    constructor(props){
        super(props);
        this.state = {
            listname: 'Type a new list name..',
        }
    }

    render(){
        return (
            <Main>
                <ListName>
                    <input
                        type='text'
                        placeholder='Type a new list name..'
                        value={this.state.listname}
                        onChange={this.state.listname}
                    />
                    <Link to='/newlist'>
                        <AiFillPlusCircle/>
                    </Link>
                </ListName>
            </Main>
        )
    }
}

export default withRouter(NewList);