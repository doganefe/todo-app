import actionTypes from "./actionTypes";

const setTodos = (todos) => {
  return {
    type: actionTypes.SET_TODOS,
    payload: todos,
  };
};

const getTodos = () => ({
  type: actionTypes.GET_TODOS,
});

const addTodo = (data) => {
  return {
    type: actionTypes.ADD_TODO,
    data,
  };
};
const deleteTodo = (data) => {
  return {
    type: actionTypes.DELETE_TODO,
    data,
  };
};

const editTodo = (data) => {
  return {
    type: actionTypes.EDIT_TODO,
    data,
  };
};

const toggleTodo = (data) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    data,
  };
};

const todoActions = {
  getTodos,
  setTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
};

export default todoActions;
