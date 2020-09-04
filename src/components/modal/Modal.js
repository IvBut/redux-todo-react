import {connect} from "react-redux";
import React from "react";
import {closeModal} from "../../store/actions/actions";
import './modal.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faWindowClose} from "@fortawesome/free-solid-svg-icons";


class Modal extends React.Component{

    render() {
        if (!this.props.open) return null;
        return (
            <div className='modal-overlay'>
                <div className='modal-container'>
                    <FontAwesomeIcon icon={faPlus} className="close-popup" onClick={() => this.props.onClose()}/>
                    <h1>{this.props.header ? this.props.header : 'TodoList application'}</h1>
                    {this.props.body}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        open: state.Modal.isOpen,
        body: state.Modal.body,
        header: state.Modal.header
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClose: () => {dispatch(closeModal())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
