import React, { Component } from 'react';

class TodoForm extends Component {
state = {
    task: ''
}
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();
    

    if(this.state.task !== ''){
        this.props.addTodo(this.state);
        this.setState({
            task: ''
        })
    }else{
        alert('please fill in the field before submitting!')
    }
}
 render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.task} id="task" placeholder="enter task"></input>
                <button>submit</button>
            </form>
        </div>
    )
 }
}

export default TodoForm;
