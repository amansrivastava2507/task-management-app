// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Retrieve all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create a new task
router.post('/', async (req, res) => {
  const { title, description, dueDate } = req.body;
  const newTask = new Task({ title, description, dueDate });
  try {
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Retrieve a single task by its ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send('Task not found');
    }
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an existing task
router.put('/:id', async (req, res) => {
  const { title, description, dueDate } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).send('Task not found');
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).send('Task not found');
    }
    res.json(deletedTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
