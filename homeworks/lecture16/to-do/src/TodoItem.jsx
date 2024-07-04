import React from 'react';

function TodoItem({todo, toggleComplete}) {
    return (
        <div>
            <input type='checkbox' checked={todo.complete} onChange={() => toggleComplete(todo.id)}/>{todo.name}
        </div>
    );
}

export default TodoItem;