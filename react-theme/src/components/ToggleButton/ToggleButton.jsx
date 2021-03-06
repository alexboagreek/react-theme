import React, { useContext } from 'react';
import './ToggleButton.css';
import { ThemeContext } from './../Context/ThemeContext';

function ToggleButton() {

    const { toggleTheme, theme } = useContext(ThemeContext);

  
    return ( 
        <div onClick={ toggleTheme }
            className= { theme ? 'btn-toggle goLight' : 'btn-toggle goDark' }
            >
                { theme ? "Dark" : "Light" }
            
        </div>
    )
}

export default ToggleButton;
