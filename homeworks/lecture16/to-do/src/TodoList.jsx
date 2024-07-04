import React from 'react';
import TodoItem from './TodoItem';
function TodoList({todos, toggleComplete}) {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} toggleComplete={toggleComplete}/>
            ))}
        </div>
    );
}

export default TodoList;