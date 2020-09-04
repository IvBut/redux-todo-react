import React from "react";
import {Todo} from "../todo/Todo";
import './todoList.css';

const TodoList = ({todos}) => {
    console.log('ARRAY ',todos)
    return (
        <div className="todo-list-wrapper">
            {todos.length > 0
                ? <ul>{todos.map(item => (<Todo todo={item} key={item.id}/>))}</ul>
                : <h2 style={{textAlign: 'center'}}>You haven't added tasks yet!</h2>
            }
        </div>
    )
};

export default TodoList;