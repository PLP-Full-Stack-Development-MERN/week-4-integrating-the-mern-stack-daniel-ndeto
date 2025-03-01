import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks, editingTask, setEditingTask }) => {

  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: ''
  });

  // Updating form when editing task
  useEffect(() => {
    if(editingTask) {
      setTask(editingTask);
    } 
    else {
      setTask({
        title: '',
        description: '',
        status: 'pending',
        dueDate: ''
      });

    }
  }, [editingTask]);

  // Handling changes
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Handling form during creating or updating
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(editingTask) {
        // Updating task after editing

        await axios.put(`http://localhost:5000/api/tasks/${editingTask._id}`, task);
        setEditingTask(null);
      } else {

        // Creating new task
        await axios.post('http://localhost:5000/api/tasks', task);
      }
      setTask({ title: '', description: '', status: 'pending', dueDate: '' });
      fetchTasks();
      alert('Task saved successfully');

    } catch (error) {
      console.error('Error saving task', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6">

      <h2 className="text-xl font-bold mb-4">{editingTask ? 'Edit Task' : 'Add Task'}</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Title:</label>

        <input 
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description:</label>

        <textarea 
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">

        <label className="block text-gray-700">Status:</label>

        <select 
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >

          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>  
          <option value="postponed">Completed</option>
          
        </select>
      
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Due Date:</label>

        <input 
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded text-align-center">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
      
    </form>
  );
};

export default TaskForm;
