import {ADD_TODO, CLOSE_MODAL, OPEN_MODAL} from "../constants/constants";
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