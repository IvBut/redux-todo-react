import React from "react";
import  './actionForm.css'
import {connect} from "react-redux";
import {createTodo} from "../../store/actions/actions";


const ActionForm = (props) => {
    let {todoData} = props
    let inpName;
    let disableBtn = false;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!inpName.value.trim()){
            disableBtn = true;
            return null;
        }
        let todo = {name : inpName.value};
        props.onCreate(todo)

    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="controls-wrapper">
                <input type="text" defaultValue={todoData.name ? todoData.name : ''} className='formControl' placeholder="Print task text" ref={node => (inpName = node)}/>
                {/*<input type="text" value={todoData.date ? todoData.date : ''} className='formControl'/>*/}
                <div>
                    {todoData.id
                        ? <button className="update-btn" type="submit">UPDATE</button>
                        : <button className="create-btn" type="submit" disabled={disableBtn}>CREATE</button>}
                </div>
            </div>

        </form>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        onCreate: (todo) => dispatch(createTodo(todo))
    }
}

export default connect(null,mapDispatchToProps)(ActionForm)