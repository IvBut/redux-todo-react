import {ADD_TODO, CLOSE_MODAL, DELETE_TODO, OPEN_MODAL, RESOLVE_TODO, UPDATE_TODO} from "../constants/constants";
import nextId from "react-id-generator";

export const openModal = ({content, header}) => {
    return {
        type: OPEN_MODAL,
        payload: {
            modalBody: content,
            header: header
        }
    }
};

export const closeModal = () => {return {type: CLOSE_MODAL}};

export const createTodo = (todo) => {
  return {
      type: ADD_TODO,
      payload: {
          newTodo: {...todo, id: nextId(), resolved: false, creationDate: new Date().getTime()}
      }
  }
};

export const editTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        payload: {
            updatedTodo: todo
        }
    }
};

export const resolveTodo = (id) => {
    return {
        type: RESOLVE_TODO,
        payload: {
            id
        }
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
};
