import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import store from "./store/store";
import {connect} from "react-redux";
import Modal from "./components/Modal";
import {openModal} from "./store/actions/actionsCreators";

function App(props) {


  return (
    <div className="App">
        <TodoList todos={props.todos}/>
        <button onClick={() => props.handleOpenModal(true)}>Add New</button>
        <Modal />
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
    handleOpenModal: () => dispatch(openModal(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
