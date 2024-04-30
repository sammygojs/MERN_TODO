import React, { useState } from 'react';
import axios from 'axios';

function AddTodoForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(1);
    const [status, setStatus] = useState('pending');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const todo = { 
                title, 
                description, 
                priority: parseInt(priority), // Make sure priority is an integer
                status, 
                dueDate 
            };
            await axios.post('http://localhost:5000/todos', todo);
            setTitle('');
            setDescription('');
            setPriority(1);
            setStatus('pending');
            setDueDate('');

            // Optionally refresh the list of todos or navigate user
        } catch (error) {
            console.error('Error adding todo: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Priority:</label>
                <input type="number" value={priority} onChange={e => setPriority(e.target.value)} min="1" />
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div>
                <label>Due Date:</label>
                <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodoForm;
