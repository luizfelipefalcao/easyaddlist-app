import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Main, FormList, ListTitle, ListBody, TableBody, TdDescription, TdButton } from './styles';
import { AiFillPlusCircle, AiOutlineUndo } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';

class NewList extends Component {
    constructor(props){
        super(props);
  
        this.input=React.createRef()
        this.state = {
            description: '',
            listTitle: localStorage.listname,
            list:[],
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ description: e.target.value })
    }

    addTask = () => {
    
      const Items={
              value:this.input.current.value
          };
  
          if(localStorage.getItem('list')==null){
              const list=[]
              list.push(Items);
              localStorage.setItem("list",JSON.stringify(list))
          }
          else{
              const list=JSON.parse(localStorage.getItem('list'))
              list.push(Items)
              localStorage.setItem("list",JSON.stringify(list))
          }
          this.setState({
              list:JSON.parse(localStorage.getItem('list'))
          });
          this.setState({ description: '' });
      }
  
      componentDidMount() {
          const list = window.localStorage.getItem('list');
          const parsedList = JSON.parse(list);
          if(list == null){
              return false
          }
          else{
              this.setState({
                  list: parsedList,
              })
          }
      }

      deleteItem=(event)=> {
        
        let index = event.target.getAttribute('data-key')
        let listValue=JSON.parse(localStorage.getItem('list'));
        listValue.splice(index,1)
        this.setState({list:listValue});
        localStorage.setItem('list',JSON.stringify(listValue))
    }


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
                        ref={this.input}
                        // ref={(e) => (this._taskInput = e)}
                    />
                    <Link to='/newlist'>
                        <AiFillPlusCircle onClick={this.addTask}/>
                    </Link>
                </FormList>
                
                <TodoItems list={this.state.list}/>

            </Main>
        )
    }
}

class TodoItems extends Component {
    render() {
      return (
        <ListBody>
            <TableBody>
            {this.props.list.map((item, index) => {
              return (
                <tr key={item.id}>
                  <TdDescription>
                    {item.value}
                  </TdDescription>
                  <TdButton>
                      <BsCheckAll color={'green'}/>
                      <FaTrashAlt color={'red'} size={15} 
                        type="button"
                        value="delete" 
                        data-key={index} 
                        onClick={this.deleteItem}/>
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

