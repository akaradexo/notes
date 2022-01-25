import mongoose from 'mongoose';

// Create Task Schema
const taskSchema = mongoose.Schema(
    {
        task:{
          type:String,
          required:true,
        }
    },
    {
        timestamps: true
    }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;