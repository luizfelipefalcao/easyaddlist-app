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

        this.handleChange = this.handleChange.bind(this);
        this.handleNewAdd = this.handleNewAdd.bind(this);
    }

    handleChange(e){
        this.setState({ listname: e.target.value })
    }

    handleNewAdd(e){
        e.preventDefault();

        localStorage.setItem('listname', this.state.listname);
        this.props.history.push("/newlist");
    }

    render(){
        return(
            <Main>
                <AddName>
                    <input
                        type='text'
                        value={this.state.listname}
                        onChange={this.handleChange}
                        placeholder="Type your list name..."
                    />
                    <Link to='/newlist' onClick={this.handleNewAdd}>
                        <AiFillPlusCircle/>
                    </Link>
                </AddName>
            </Main>
        )
    }
}

export default withRouter(NewAdd);