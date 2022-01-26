import React from 'react';
import { Link } from 'react-router-dom';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {FaEdit} from 'react-icons/fa';

const Note = (props) => {
  // console.log(props.note)
  return (
  <div className="note">
    <h1>{props.note.title}</h1>
    <p>{props.note.content}</p>
    <div className="note-footer">
      <span>{props.note.date.substring(0, 10)}</span>
      <div className="group-btn">
        <Link to = {`/edit/${props.note._id}`}>
          <FaEdit className="click-icon" size='1.2em'/>
        </Link> 
        <RiDeleteBin6Line 
          href='#'
          onClick={() => {props.deleteNote(props.note._id)}} className="click-icon" size='1.2em'/>
      </div>
    </div> 
    </div>
    
  );
};

export default Note;
