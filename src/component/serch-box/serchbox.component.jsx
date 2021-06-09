import React from 'react';
import '../serch-box/serchbox.style.css'


export const SerchBox = ({placeholder,hendalchnage}) =>(
         <input 
     type='serch' 
     placeholde={placeholder} 
    onChange={hendalchnage }/>

    
    )
