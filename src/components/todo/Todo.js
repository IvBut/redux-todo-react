import React from "react";
import todo from './todo.css'


export const Todo = ({todo}) => {
    return (
        <li style={{color: 'red',padding: '15px', textAlign: 'center', background: 'green'}}>
            <p style={{color: 'white', fontWeight: '900'}}>{todo.name}</p>
        </li>
    )
};