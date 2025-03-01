const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Loading environment variables from .env file
dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

//task routes for API 
app.use('/api/tasks', require('./routes/taskRoutes'));

// Starting my server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
