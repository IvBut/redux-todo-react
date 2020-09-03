import {connect} from "react-redux";
import React from "react";
import {closeModal} from "../../store/actions/actions";
import './modal.css'


class Modal extends React.Component{

    render() {
        if (!this.props.open) return null;
        return (
            <div className='modal-overlay'>
                <div className='modal-container'>
                    <h1>{this.props.header ? this.props.header : 'TodoList application'}</h1>
                    {this.props.body}
                    <button onClick={() => this.props.onClose()}>Close</button>
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
