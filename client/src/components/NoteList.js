import React ,{useState, useEffect} from 'react';
import axios from 'axios'
import { IoIosAddCircle } from 'react-icons/io';
import Note from './Note'
import FadeIn from 'react-fade-in';
import {Link } from 'react-router-dom';
const NoteList = () => {
const [notes , setNotes] = useState([]);

// console.log(notes)

const deleteNote= (id)=>{
  setNotes(notes.filter((note)=>note._id !== id));
  axios.delete(`http://localhost:5000/notes/${id}`)
                .then((res) => console.log(res.data))
                .catch((error) => console.log(error))
}

useEffect(()=>{
  axios.get('http://localhost:5000/notes')
              .then((res) => {
                setNotes(res.data);
              })
              .catch((error) => console.log(error))
},[])

  return (
      <div className="listWrapper">
     
          {notes.length > 0 ?
          <FadeIn>
          <div className="note-list">
      
          {notes.map((currentNote)=>{
            // console.log(currentNote)
              return(
                <Note
                  note= {currentNote}
                  deleteNote = {deleteNote}
                  key ={currentNote._id}
                />

              )
            })}
          
          </div></FadeIn>
           :<div className='noNote'>🗅</div> 
          }
        <Link role="button" className='btn-add' to='/create' >
          <IoIosAddCircle size="2.5em"/>
        </Link>
       
      </div>
  );
};

export default NoteList;
