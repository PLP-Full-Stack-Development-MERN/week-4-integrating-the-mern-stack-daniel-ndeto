# MERN Task Manager

A full-stack Task Manager application built using the MERN stack. This application allows users to create, read, update, and delete tasks. Each task contains fields like title, description, status, and due date.

## home

![image](https://github.com/user-attachments/assets/3ca62dd0-f6a1-4c34-a257-06641b77914c)

## task list

![image](https://github.com/user-attachments/assets/f36b0b99-42a0-4630-979f-7642cd021071)

### updating task

![image](https://github.com/user-attachments/assets/235e01eb-d9cc-4ed6-a2a0-2b53e3bda89f)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## Overview

The MERN Task Manager is a web application that demonstrates a full-stack integration using:
- **MongoDB** for the database.
- **Express** for the backend server.
- **React** for the frontend UI.
- **Node.js** as the runtime environment.

Users can add new tasks, view a list of tasks, update existing tasks, and delete tasks. The application uses RESTful API endpoints for all CRUD operations.

## Features

- **Create Task:** Add a new task with a title, description, status, and due date.
- **Read Tasks:** Display all tasks in a list.
- **Update Task:** Edit an existing task.
- **Delete Task:** Remove a task.
- **Responsive UI:** Built with Tailwind CSS for a modern look.
- **RESTful API:** Structured endpoints for backend communication.

## Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose, dotenv, cors
- **Frontend:** React, Axios, Tailwind CSS
- **Tooling:** npm, Create React App

## Installation

### Backend Setup

1. **Navigate to the backend folder:**
   ```bash
   cd mern-task-manager/backend


1. **Navigate to the backend folder:**
   ```bash
   cd mern-task-manager/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the backend folder with the following content:
   ```ini
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the Backend Server:**
   ```bash
   node server.js
   ```
   The backend server should now be running on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. **Navigate to the frontend folder:**
   ```bash
   cd mern-task-manager/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup Tailwind CSS:**

   - **Install Tailwind CSS and its dependencies (if not already installed):**
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```
     
   - **Configure Tailwind CSS:**  
     Make sure your `tailwind.config.js` includes the following:
     ```js
     module.exports = {
       content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```
     
   - **Add Tailwind Directives:**  
     In `src/index.css`, add at the very top:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Start the Frontend Application:**
   ```bash
   npm start
   ```
   The React app will open in your browser at [http://localhost:3000](http://localhost:3000).

## Running the Project

1. **Run Backend:**
   - Navigate to the backend directory and run:
     ```bash
     node server.js
     ```
   - Test the API endpoints (using Postman or your browser) at [http://localhost:5000/api/tasks](http://localhost:5000/api/tasks).

2. **Run Frontend:**
   - Navigate to the frontend directory and run:
     ```bash
     npm start
     ```
   - Open your browser at [http://localhost:3000](http://localhost:3000) to interact with the application.

## API Endpoints

- **GET /api/tasks**  
  Retrieve all tasks.

- **POST /api/tasks**  
  Create a new task.  
  *Body Parameters:*
  - `title` (String, required)
  - `description` (String)
  - `status` (String, default: 'pending', options: 'pending', 'in progress', 'completed')
  - `dueDate` (Date)

- **PUT /api/tasks/:id**  
  Update a task by its ID.

- **DELETE /api/tasks/:id**  
  Delete a task by its ID.

## Deployment

**Note: my project is not yet deployed** 

These are platforms for deployment:

- **Backend Deployment:**  
  Deploy the backend to a cloud platform like Render or Heroku. Make sure to update your environment variables accordingly.

- **Frontend Deployment:**  
  Deploy the React app to Vercel, Netlify, or another hosting service. Update the Axios base URL if necessary to point to your deployed backend.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please contact [Daniel Ndeto](danielndeto222@gmail.com).
```

To run the project, follow the steps provided in the installation and running sections of this README. Enjoy coding!
