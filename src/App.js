import React, { Component } from 'react';
import Todos from './Todos';
import TodoForm from './ToDoForm';

class App extends Component {
  state = {
    todos: [
      {id: 1, task: 'buy milk'},
      {id: 2, task: 'play mario kart'},
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  render(){
   return(
    <div className="todo-app container">
    <h1 className="center green-text">TODO's:</h1>
    <Todos deleteToDo={this.deleteToDo} todos={this.state.todos} />
    <TodoForm addTodo={this.addTodo} />
  </div>
   )
  }
}

export default App;
