import React from 'react';
import {useState} from 'react';
import {IoIosAddCircle} from 'react-icons/io'

const AddNote = ({handleAddNote}) => {
    const[noteText,setNotetext]=useState('');

    const characterLimit = 200;

    const handleChange = (event) =>{
        if(characterLimit - event.target.value.length >=0 ){
            setNotetext(event.target.value);
        } 
    };

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNotetext('');
        }
    };

    return (
        <div className="note new">
            
            <textarea 
            rows="8" 
            cols="10" 
            value={noteText}
            placeholder="Type to add note..."
            onChange={handleChange}
            ></textarea>

            <div className="note-footer">
                <small>{characterLimit - noteText.length}</small>
                <button className="save" onClick={handleSaveClick}><IoIosAddCircle size='1.3em'/></button>
            </div>

        </div>
    )
}

export default AddNote