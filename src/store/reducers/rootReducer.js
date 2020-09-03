import {ADD_TODO, CLOSE_MODAL, FILTER_BY, OPEN_MODAL} from "../constants/constants";

const initialState = {
  todoList: [],
  filterBy: FILTER_BY.ALL,
  Modal: {
      isOpen: false,
      header: 'Form Header',
      body: {}
  }
};

export const rootReducer = (state = initialState ,  action) => {
    switch (action.type) {
        case OPEN_MODAL :
            return {
                ...state,
                Modal: {
                    isOpen: true,
                    header: action.payload.header,
                    body: action.payload.modalBody
                }
            };
        case CLOSE_MODAL :
            return {
                ...state,
                Modal: {
                    isOpen: false,
                    header: 'Form Header',
                    body: {}
                }
            };
        case ADD_TODO :
            console.log('ADD_TODO',action);
            return {
              ...state,
              todoList: [...state.todoList, action.payload.newTodo]
            };
        default : return state
    }
};