import React from "react";
import {connect} from "react-redux";
import ActionForm from "../actionForm/ActionForm";
import {openModal} from "../../store/actions/actions";

function ActionMenu({data, onEdit}) {

    const handleEdit = () => {
        const modalTemplate = (<ActionForm todoData={data}/>)
        onEdit({content: modalTemplate, header: `Edit task ${data.name}`})

    };

    return (
        <div className="action-btn-wrappers">
            <button onClick={handleEdit} style={{background: 'yellow', color: 'white'}}>Edit</button>
            <button onClick={} style={{background: 'darkgreen', color: 'white'}}>Resolve</button>
            <button style={{background: 'red', color: 'white'}}>Delete</button>
        </div>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        onEdit: (modalConfig) => dispatch(openModal(modalConfig)),
        onResolve: (id) => dispatch()
    }
}

export default connect(null,mapDispatchToProps)(ActionMenu);