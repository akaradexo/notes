import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import taskRoutes from './routes/tasks.js';

dotenv.config();
const app = express();
app.use(express.json()); // Responses: text/plain, text/html, application/json
app.use(cors());

const PORT = process.env.PORT;

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => {
            console.log(`Server is running in the port: ${PORT}`); }))
        .catch((error) => console.log(`${error} did not connect`));

app.use('/tasks', taskRoutes); //CRUD - GET, POST, PATCH, DELETE