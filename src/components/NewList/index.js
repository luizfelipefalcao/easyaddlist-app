import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Main, FormList, ListTitle, ListBody, TableBody, TdDescription, TdButton } from './styles';
import { AiFillPlusCircle, AiOutlineUndo } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';

class NewList extends Component {
    constructor(props){
        super(props);
        this.state = {
            new_items: [],
            items: [],
            description: '',
            listTitle: localStorage.listname,
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.addStorage = this.addStorage.bind(this);
    }

    handleChange(e) {
        this.setState({ description: e.target.value })
    }

    addStorage(e) {
      e.preventDefault();

      const items = this._taskInput.value;

      const new_item = JSON.parse(localStorage.getItem('new-item') || '[]');
        new_item.push({
          new_item: items
      });      

      localStorage.setItem('new-item', JSON.stringify(new_item)); 
      this.setState({ new_items: items}); 

      this.addItem();
    }

    addItem() {
      let state = this.state;
      if (this._taskInput.value !== '') {
        let newItem = {
          text: this._taskInput.value
        };
        this.setState({ items: [...state.items, newItem] });
      } console.log(this.state.items);
      this.setState({ description: '' });
    };

    render(){
        return (
            <Main>
                <ListTitle>
                    <h2>{this.state.listTitle}</h2>
                </ListTitle>
                <FormList onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="Type to add a new item.."
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        ref={(e) => (this._taskInput = e)}
                    />
                    <Link to='/newlist'>
                        <AiFillPlusCircle onClick={this.addStorage}/>
                    </Link>
                </FormList>
                
                <TodoItems list={this.state.items}/>

            </Main>
        )
    }
}

class TodoItems extends Component {
    render() {
      return (
        <ListBody>
            <TableBody>
            {this.props.list.map((item) => {
              return (
                <tr key={item.key}>
                  <TdDescription>
                    {item.text}
                  </TdDescription>
                  <TdButton>
                      <BsCheckAll color={'green'}/>
                      <FaTrashAlt color={'red'} size={15}/>
                      <AiOutlineUndo color={'yellow'}/>
                  </TdButton>
                </tr>
              );
            })}
            </TableBody>
        </ListBody>
      );
    }
  }

export default withRouter(NewList);

