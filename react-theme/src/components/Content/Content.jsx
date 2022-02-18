import React, { useContext } from 'react';
import './Content.css';
import { ThemeContext } from './../Context/ThemeContext';


function Content() {
    const { theme } =useContext(ThemeContext);
    return (
        <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            { theme }
        </div>
    )
}

export default Content;
