import React from 'react';

const Todos = ({todos, deleteToDo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteToDo(todo.id)}}>{todo.task}</span>
                </div>
            )
        })
    ) : (
            <p className="center">you dont have anything in the todo list</p>
    )
    
    return (
        <div className="collection">
            {todoList}
        </div>
    )
}

export default Todos;
