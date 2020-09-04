import React, {useState} from "react";
import  './actionForm.css'
import {connect} from "react-redux";
import {createTodo, editTodo} from "../../store/actions/actions";


const ActionForm = (props) => {
    let {todoData} = props;
    let inpName;
    let checkedResolver;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!inpName.value.trim()){
            return null;
        }
        let todo = {...props.todoData, name : inpName.value};
        todoData.id ? props.onEdit({...todo,resolved: checkedResolver.checked}) : props.onCreate(todo);

    };

    const validateInput = (e) => {
      let value = e.target.value;
      if (!value.trim() || value.length < 5) {
          e.target.style.border = `2px solid red`;
      } else {
          e.target.style.border = ''
      }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="controls-wrapper">
                <input type="text" defaultValue={todoData.id ? todoData.name : ''} onBlur={validateInput} className='formControl' placeholder="Print task text" ref={node => (inpName = node)}/>
                {
                    todoData.id
                    ? <label for="checkedResolver">COMPLETED <input id="checkedResolver" type="checkbox" defaultChecked={todoData.resolved} className='' ref={node => (checkedResolver = node)}/></label>
                    :   null
                }
                <div>
                    {todoData.id
                        ? <button className="update-btn" type="submit">UPDATE</button>
                        : <button className="create-btn" type="submit">CREATE</button>}
                </div>
            </div>

        </form>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        onCreate: (todo) => dispatch(createTodo(todo)),
        onEdit: (todo) => dispatch(editTodo(todo))
    }
}

export default connect(null,mapDispatchToProps)(ActionForm)
