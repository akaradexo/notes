import mongoose from 'mongoose';

// Create Task Schema
const noteSchema = mongoose.Schema(
    {
        title:{
          type:String,
          required:true,
        },
        content:{
          type:String,
          required:true,
        },
        date: {
          type: Date,
          required: true
      }
    },
    {
        timestamps: true
    }
);

const Note = mongoose.model('Note', noteSchema);

export default Note;