import actionTypes from "../actions/actionTypes";

const initialState = {
  todos: [],
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}

export default todosReducer;
