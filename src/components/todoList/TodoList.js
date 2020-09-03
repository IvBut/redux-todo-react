import React from "react";
import {Todo} from "../todo/Todo";

const TodoList = ({todos}) => {
    console.log('ARRAY ',todos)
    return (
        <div>
            {todos.length > 0
                ? <ul>{todos.map(item => (<Todo todo={item} key={item.id}/>))}</ul>
                : <h2>You haven't added tasks yet </h2>
            }
        </div>
    )
};

export default TodoList;