import Note from '../models/note.js'

// Fetching all the post Note notes note
// http://localhost:5000/notes
export const fetchNotes = (req, res) => {
    // Access the 'Post' model and fetch the posts detail from the 'posts' collection by using find()
    // Send the 'posts' details as 'res' to the front-end
    Note.find()
        .then((notes) => res.json(notes))
        .catch((error) => res.status(400).json(`Error: ${error}`))
}

// Creating a new post
// http://localhost:5000/notes/add
export const createNote = (req, res) => {
    // Receive 'title', 'content', 'duration', 'date' from front-end using req.body
    const title = req.body.title;
    const content = req.body.content;
    const date = Date.parse(req.body.date);

    // Creating object 
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
    });
    //Sending the created object and save in to the database using save()
    newNote.save()
            .then(() => res.json('Note added successfully'))
            .catch((error) => res.status(400).json(`Error: ${error}`))
}

// Fetching an individual post - 'id
// http://localhost:5000/notes/:id
export const fetchNote = (req, res) => {
    // Receive an 'id' from front-end using req.params.id
    // const id = req.params.id;
    // Access 'Post' model and fetch the post by using findById()
    Note.findById(req.params.id)
            .then((note) => res.json(note))
            .catch((error) => res.status(400).json(`Error: ${error}`))
}

// Deleting a post - 'id'
// http://localhost:5000/notes/:id
export const deleteNote = (req, res) => {
    //const id = req.params.id;
    Note.findByIdAndDelete(req.params.id)
            .then(() => res.json('Note deleted successfully'))
            .catch((error) => res.status(400).json(`Error: ${error}`))
}

// Updating an existing post - 'id'
// http://localhost:5000/notes/update/:id
export const updateNote = (req, res) => {
    // Receive the 'id' from front-end using req.params.id
    // Receive updated 'title', 'content', 'duration', 'date' from front-end using req.body
    // Access the existing 'title', 'content', 'duration', 'date' stored in database and update with the new 
    // 'title', 'content', 'duration', 'date' received from front-end using req.body
    // const id = req.params.id;
    // const title = req.body.title;
    // const content = req.body.content;
    // const duration = Number(req.body.duration);
    // const date = Date.parse(req.body.date);
    Note.findById(req.params.id)
            .then((note) => {
                note.title = req.body.title;
                note.content = req.body.content;
                note.date = Date.parse(req.body.date);

                note.save()
                    .then(() => res.json('Note updated successfully'))
                    .catch((error) => res.status(400).json(`Error: ${error}`));
            })
            .catch((error) => res.status(400).json(`Error: ${error}`));
}