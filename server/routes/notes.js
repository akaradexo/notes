import express from 'express';
import { fetchNotes, createNote, fetchNote, updateNote, deleteNote } from '../controller/notes.js';


const router = express.Router();

// Fetching all the post
// http://localhost:5000/notes
router.get('/', fetchNotes);

// Creating a new post
// http://localhost:5000/notes/add
router.post('/add', createNote);

// Fetching an individual post
// http://localhost:5000/notes/:id
router.get('/:id', fetchNote);

// Deleting a post
// http://localhost:5000/notes/:id
router.delete('/:id', deleteNote);

// Updating an existing post
// http://localhost:5000/notes/update/:id
router.patch('/update/:id', updateNote);


export default router;