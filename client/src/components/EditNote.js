import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaCheck,FaArrowLeft} from 'react-icons/fa'

const EditNote = () => {
  const date = new Date();

  const { id } = useParams();
 
  const[note,setNote]=useState({
    title:'',
    content:'',
    date:date.toLocaleDateString()
  });


  useEffect(() => {
    axios.get(`http://localhost:5000/notes/${id}`)
            .then((res) => {
              setNote((prevNotes) => {
                    return {
                        ...prevNotes,
                        title: res.data.title,
                        content: res.data.content,
                        date: new Date(res.data.date)
                    }
                })
            })
            .catch((error) => console.log(error))
  },[])
  const handleChange = (e) => {
    //console.log(e);
    const { name, value } = e.target;
    //console.log(name, value);
    setNote((prevNotes) => {
        return {
            ...prevNotes,
            [name]: value,
        }
    })
}

const onSubmit = (e) => {
  e.preventDefault();

  const newNote = {
    title: note.title,
    content: note.content,
    date: date.toLocaleDateString()
  };
  // console.log(newNote)

  axios.patch(`http://localhost:5000/notes/update/${id}`, newNote)
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
  
  window.location = '/';
}

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

export default EditNote;
