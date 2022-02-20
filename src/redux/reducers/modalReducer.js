import actionTypes from "../actions/actionTypes";

const initialState = {
  isOpen: false,
  itemToDelete: null,
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MODAL:
      return action.payload;
    default:
      return state;
  }
}

export default modalReducer;
