import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null);

  // Fetching tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');

      setTasks(res.data);} catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      
      <TaskForm fetchTasks={fetchTasks} editingTask={editingTask} setEditingTask={setEditingTask} />

      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} setEditingTask={setEditingTask} />
      ))}
    </div>
  );
};

export default TaskList;
