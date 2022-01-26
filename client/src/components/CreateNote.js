import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {FaCheck,FaArrowLeft} from 'react-icons/fa'

const CreateNote = () => {
  const date = new Date();

  const[note,setNote]=useState({
    title:'',
    content:'',
    date:date.toLocaleDateString()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

// console.log(note)

const onSubmit = (e) =>{
  e.preventDefault();
  const newNote = {
    title: note.title,
    content: note.content,
    date: date.toLocaleDateString()
  };
console.log(newNote)
  axios.post('http://localhost:5000/notes/add', newNote)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));

  window.location = '/';
 
};
  return (
  
    <div className='AddNote'>
      <form onSubmit={onSubmit}>
        <div className="group-btn2">
          <Link to="/" className="click-icon" >
            <FaArrowLeft size='1.3em'/>
          </Link>
          <button className="click-icon" role="submit" type='submit'>
            <FaCheck size='1.3em'/>
          </button>
        </div>
            <textarea 
            className='title-textarea'
            rows="1" 
            cols="10" 
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={handleChange}
            ></textarea>

            <textarea 
            className='content-textarea'
            rows="15" 
            cols="10" 
            name="content"
            value={note.content}
            placeholder="Content"
            onChange={handleChange}
            ></textarea>
            
      </form>
    </div>
    );
};

export default CreateNote;
