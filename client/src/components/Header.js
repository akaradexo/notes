import React from 'react';
import {BsToggles} from 'react-icons/bs';

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
           
                <h1>Notes</h1>
                <button 
                    className="save" 
                    onClick={()=>
                    handleToggleDarkMode(
                        (previousDarkMode)=>!previousDarkMode)
                    }
                    >
                        <BsToggles/>
                </button>
  
            
        </div>
    )
}

export default Header