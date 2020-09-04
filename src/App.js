import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Modal from "./components/modal/Modal";
import {openModal} from "./store/actions/actions";
import ActionForm from "./components/actionForm/ActionForm";
import TodoList from "./components/todoList/TodoList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faPlus);


function App(props) {

  const testTemplate2 = (<ActionForm todoData={{}}/>);
  const logoSrc = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5s_8dFQyv8KDCmT6JQd23V2Ahy1Ek3S-gmQ&usqp=CAU`;

    function onModalOpenForCreate(){
        props.handleOpenModal({content: testTemplate2, header: 'Create new todo'})
    }

  return (
    <div className="App">
        <header>
            <div className="logo-container">
                <img src={logoSrc} alt="Logo" className="logo"/>
            </div>
            <div className="controls-container">
                <FontAwesomeIcon icon={faPlus} className='add-btn' onClick={onModalOpenForCreate}/>
            </div>
        </header>
        <main>
            <TodoList todos={props.todos}/>
        </main>
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
