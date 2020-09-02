import {connect} from "react-redux";
import React from "react";
import {openModal} from "../store/actions/actionsCreators";

class Modal extends React.Component{

    render() {
        console.log(this.props)
        if (!this.props.showModal) return null;
        return (
            <div>
                <h1>zalupa</h1>
                <button onClick={() => this.props.onClose()}>Close</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showModal: state.displayModal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClose: () => {dispatch(openModal(false))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
