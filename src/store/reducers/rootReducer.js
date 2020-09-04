import {
    ADD_TODO,
    CLOSE_MODAL,
    DELETE_TODO,
    FILTER_BY,
    OPEN_MODAL,
    RESOLVE_TODO,
    UPDATE_TODO
} from "../constants/constants";

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
        case UPDATE_TODO :
            console.log('UPDATE_TODO',action);
            // let updatedIdx = state.todoList.findIndex(item => item.id === action.payload.updatedTodo.id);
            let idx = -1;
            let copiedArr = [];
            state.todoList.forEach((item, index) => {
               if (item.id  === action.payload.updatedTodo.id) {
                   idx  = index
               }
               copiedArr.push(item);
            });
            copiedArr[idx] = {...action.payload.updatedTodo};
            return {
                ...state,
                todoList: copiedArr
            };
        case RESOLVE_TODO :
            let todos = state.todoList.map((item ,index) => {
               if (item.id === action.payload.id ) {
                   item.resolved = true
               }
               return item
            });
            return {
                ...state,
                todoList: todos
            };
        case DELETE_TODO :
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload.id)
            };
        default : return state
    }
};

