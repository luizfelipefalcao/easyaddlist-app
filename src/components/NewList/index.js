import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Main, FormList, ListTitle, ListBody, TableBody, TdDescription, TdButton } from './styles';
import { AiFillPlusCircle, AiOutlineDelete, AiOutlineUndo } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';

class NewList extends Component {
    constructor(props){
        super(props);
        this.state = {
            listTitle: localStorage.listTitle,
            list
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ description: e.target.value })
        console.log(this.state.description); 
    }

    render(){
        return (
            <Main>
                <ListTitle>
                    <h2>{this.state.listTitle}</h2>
                </ListTitle>
                <FormList>
                    <input
                        type="text"
                        placeholder="Type to add a new item.."
                        name="tarefa"
                        value={this.state.description}
                        onChange={this.handleChange}
                        ref={(e) => (this._tarefaInput = e)}
                    />
                    <Link to='/newlist'>
                        <AiFillPlusCircle/>
                    </Link>
                </FormList>
                
                <TodoItems lista={this.state.items} />

                <ListBody>
                    <TableBody>
                        <tr>
                    <TdDescription>
                        {this.state.description}</TdDescription>
                            <TdButton>
                                <BsCheckAll/>
                                <AiOutlineUndo/>
                                <AiOutlineDelete/>
                            </TdButton>
                        </tr>
                    </TableBody>

                </ListBody>
            </Main>
        )
    }
}

class TodoItems extends Component {
    render() {
      return (
        <div>
          <ul>
            {this.props.list.map((item) => {
              return (
                <li>
                  key={item.key} {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

export default withRouter(NewList);

