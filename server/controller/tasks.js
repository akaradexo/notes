import Task from '../models/task.js'


// Fetching all the post
// http://localhost:5000/tasks
export const fetchTasks = (req, res) => {
    // Access the 'Post' model and fetch the posts detail from the 'posts' collection by using find()
    // Send the 'posts' details as 'res' to the front-end
    Task.find()
        .then((tasks) => res.json(tasks))
        .catch((error) => res.status(400).json(`Error: ${error}`))
}

// Creating a new post
// http://localhost:5000/tasks/add
export const createTasks = (req, res) => {

    const task = req.body.task;

    // Creating object 
    const newTask= new Task({
        task: task,
    });
    //Sending the created object and save in to the database using save()
    newTask.save()
            .then(() => res.json('Post added successfully'))
            .catch((error) => res.status(400).json(`Error: ${error}`))
}

// Fetching an individual post - 'id
// http://localhost:5000/tasks/:id
export const fetchTask = (req, res) => {
    // Receive an 'id' from front-end using req.params.id
    // const id = req.params.id;
    // Access 'Post' model and fetch the post by using findById()
    Task.findById(req.params.id)
            .then((task) => res.json(task))
            .catch((error) => res.status(400).json(`Error: ${error}`))
}

// Deleting a post - 'id'
// http://localhost:5000/tasks/:id
export const deleteTask = (req, res) => {
    //const id = req.params.id;
    Task.findByIdAndDelete(req.params.id)
            .then(() => res.json('Task deleted successfully'))
            .catch((error) => res.status(400).json(`Error: ${error}`))
}

// Updating an existing post - 'id'
// http://localhost:5000/tasks/update/:id
export const updateTask = (req, res) => {
    // const id = req.params.id
    // console.log(id)
    Task.findById(req.params.id)
            .then((task) => {
                
                    task.task= req.body.task;
                
                    task.save()
                    .then(() => res.json('Task updated successfully'))
                    .catch((error) => res.status(400).json(`Error: ${error}`));
            })
            .catch((error) => res.status(400).json(`Error: ${error}`));
}