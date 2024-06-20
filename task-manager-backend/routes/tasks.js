// routes/tasks.js

const express = require('express');
const router = express.Router();

// Define routes and handlers
router.get('/', (req, res) => {
  res.send('Get all tasks');
});

router.post('/', (req, res) => {
  res.send('Create a task');
});

router.get('/:id', (req, res) => {
  const taskId = req.params.id;
  res.send(`Get task with ID ${taskId}`);
});

router.put('/:id', (req, res) => {
  const taskId = req.params.id;
  res.send(`Update task with ID ${taskId}`);
});

router.delete('/:id', (req, res) => {
  const taskId = req.params.id;
  res.send(`Delete task with ID ${taskId}`);
});

module.exports = router;
