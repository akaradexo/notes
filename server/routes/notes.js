import express from 'express';
import { fetchTasks, fetchTask, createTasks, updateTask, deleteTask } from '../controller/tasks.js';


const router = express.Router();

// Fetching all the post
// http://localhost:5000/tasks
router.get('/', fetchTasks);

// Creating a new post
// http://localhost:5000/tasks/add
router.post('/add', createTasks);

// Fetching an individual post
// http://localhost:5000/tasks/:id
router.get('/:id', fetchTask);

// Deleting a post
// http://localhost:5000/tasks/:id
router.delete('/:id', deleteTask);

// Updating an existing post
// http://localhost:5000/tasks/update/:id
router.patch('/update/:id', updateTask);


export default router;