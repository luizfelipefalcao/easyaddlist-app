import React, { Component } from 'react';
import uuid from 'uuid';
import { Link, withRouter } from 'react-router-dom';
import { Main, FormList, ListTitle, ListBody, ListItem } from './styles';
import { AiFillPlusCircle } from 'react-icons/ai';
// import { FaCheck } from 'react-icons/fa';
// import { MdDelete } from 'react-icons/md';

class NewList extends Component {
    constructor(props){
        super(props);
  
        this.input = React.createRef()
        this.state = {
            description: '',
            listTitle: localStorage.listname,
            list:[],
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleChange(e) {
        this.setState({ description: e.target.value })
    }

    addTask = () => {
    
        if(this.state.description !== ''){    
            const Items = {
                id:uuid.v4(),
                value:this.input.current.value,
                isDone: false
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
                list: JSON.parse(localStorage.getItem('list'))
            });

            this.setState({ description: '' });

        } else {
            return alert('Type a new item!!');
        }
    }

    deleteItem(e) {
        let index = e.target.getAttribute('data-key')
        let listValue = JSON.parse(localStorage.getItem('list'));
        listValue.splice(index, 1)
        this.setState({list: listValue});
        localStorage.setItem('list', JSON.stringify(listValue)); 
    }

    checkItem = (e) => {
        let index = e.target.getAttribute('data-key')
        let listValue = JSON.parse(localStorage.getItem('list'));
        listValue.splice(index, 1)
        this.setState({list: listValue});
        localStorage.setItem('list', JSON.stringify(listValue)); 
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
                    />
                    <Link to='/newlist'>
                        <AiFillPlusCircle onClick={this.addTask}/>
                    </Link>
                </FormList>
                
                <ListBody>
                    <ListItem>
                    {
                        this.state.list.map((item,index)=>
                        {
                            return(
                                <li key={item.id}> {item.value}
                                    { item.isDone === false
                                    ? (
                                        <button
                                        type="button" 
                                        value="check" 
                                        data-key={index} 
                                        onClick={this.checkItem}>
                                        Check
                                        </button>
                                    ) : (
                                        <button
                                        type="button" 
                                        value="delete" 
                                        data-key={index} 
                                        onClick={this.deleteItem}>
                                        Delete
                                        </button>    
                                    )
                                    }
                                </li>
                            )
                        })
                    } 
                    </ListItem>
                </ListBody>
            </Main>
            );
    }
}

export default withRouter(NewList);

