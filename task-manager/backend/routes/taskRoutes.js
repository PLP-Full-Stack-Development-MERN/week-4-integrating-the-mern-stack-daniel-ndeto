const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

//Creating new tasks
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);

    const savedTask = await task.save();
    
    res.status(201).json(savedTask);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//   Retrieving all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Updating task by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json(updatedTask);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting a task by ID
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
