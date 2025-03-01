import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks, setEditingTask }) => {

  // task deleting
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);

      fetchTasks();} 
      
      catch (error) {
      console.error('Error deleting task', error);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-4 flex justify-between items-center">
      <div>

        <h3 className="font-bold">{task.title}</h3>

        <p>{task.description}</p>

        <p className="text-sm text-gray-600">Status: {task.status}</p>

        <p className="text-sm text-gray-600">

          Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}
        </p>
      </div>
      <div>

        <button 
          onClick={() => setEditingTask(task)} 
          className="bg-yellow-500 text-white p-2 rounded mr-2"
        >
          Edit
        </button>

        <button 
          onClick={handleDelete} 
          className="bg-red-500 text-white p-2 rounded"
        >
          Delete
        </button>
        
      </div>
    </div>
  );
};

export default TaskItem;
