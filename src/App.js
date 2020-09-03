import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Modal from "./components/modal/Modal";
import {openModal} from "./store/actions/actions";
import ActionForm from "./components/actionForm/ActionForm";
import TodoList from "./components/todoList/TodoList";


function App(props) {

  const testTemplate2 = (<ActionForm todoData={{}}/>);

  function onModalOpenForEdit(){
      props.handleOpenModal({content: testTemplate2, header: null})
  }

    function onModalOpenForCreate(){
        props.handleOpenModal({content: testTemplate2, header: 'Create new todo'})
    }

  return (
    <div className="App">
        <button onClick={onModalOpenForCreate}>Add New</button>
        <button onClick={onModalOpenForEdit}>EDIT</button>
        <TodoList todos={props.todos}/>
        <Modal/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todoList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleOpenModal: (modalConfig) => dispatch(openModal(modalConfig))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
