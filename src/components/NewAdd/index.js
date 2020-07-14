import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Main, AddName } from './styles';
import { AiFillPlusCircle } from 'react-icons/ai';

class NewAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            listname: '',

        }

        this.handleNewList = this.handleNewList.bind(this);
    }

    handleNewList(e){
        e.preventDefault();

        this.props.history.push("/newlist");
        console.log('Funcionou!!');
    }

    render(){
        return(
            <Main>
                <AddName>
                    <input
                        type='text'
                        value={this.state.listname}
                        onChange={(e) => this.setState({ listname: e.target.value })}
                        placeholder="Type your list name..."
                    />
                    <Link to='/newlist' onClick={this.handleNewList}>
                        <AiFillPlusCircle/>
                    </Link>
                </AddName>
            </Main>
        )
    }
}

export default withRouter(NewAdd);