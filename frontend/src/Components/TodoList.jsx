import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/todos');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;
