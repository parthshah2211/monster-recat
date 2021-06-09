import React from 'react';
import './card-profile.style.css';
export const  Card = props =>(
   
   <div className='card-container'>
   <img alt="monster" src={'https://robohash.org/${props.monster.id}set=2&size=160×160'}/>
    <h2 > {props.monster.name}</h2>
    </div>
);