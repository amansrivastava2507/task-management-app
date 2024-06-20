// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/task-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
