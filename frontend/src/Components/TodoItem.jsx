import React from 'react';

function TodoItem({ todo }) {
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <small>Priority: {todo.priority}</small>
        </div>
    );
}

export default TodoItem;
