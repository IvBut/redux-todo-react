import React from "react";
import {connect} from "react-redux";
import ActionForm from "../actionForm/ActionForm";
import {deleteTodo, openModal, resolveTodo} from "../../store/actions/actions";
import './actionMenu.css'

function ActionMenu({data, onEdit, onResolve, onDelete}) {
    const handleEdit = () => {
        const modalTemplate = (<ActionForm todoData={data}/>)
        onEdit({content: modalTemplate, header: `Edit task ${data.name}`})

    };

    return (
        <div className="action-btn-wrappers">
            <button onClick={handleEdit} style={{background: 'aqua', color: 'white'}}>Edit</button>
            {data.resolved? null : <button onClick={() => {onResolve(data.id)}} style={{background: 'darkgreen', color: 'white'}}>Resolve</button>}
            <button style={{background: 'red', color: 'white'}} onClick={() => {onDelete(data.id)}}>Delete</button>
        </div>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        onEdit: (modalConfig) => dispatch(openModal(modalConfig)),
        onResolve: (id) => dispatch(resolveTodo(id)),
        onDelete: (id) => dispatch(deleteTodo(id))
    }
}

export default connect(null,mapDispatchToProps)(ActionMenu);
