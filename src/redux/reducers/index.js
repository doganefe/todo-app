import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import todosReducer from "./todosReducer";

export default combineReducers({
  todos: todosReducer,
  modal: modalReducer,
});
