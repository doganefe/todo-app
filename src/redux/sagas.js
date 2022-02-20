import { call, put, takeLatest, race, take } from "redux-saga/effects";
import actionTypes from "./actions/actionTypes";
import { setModal } from "./actions/modalActions";
import actions from "./actions";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from "./requests";

function* handleGetTodos() {
  try {
    const todos = yield call(fetchTodos);
    yield put(actions.setTodos(todos));
  } catch (err) {
    console.log(err);
  }
}

function* handleAddTodo(action) {
  const { data } = action;
  try {
    yield call(addTodo, data);
    yield handleGetTodos();
  } catch (err) {
    console.log(err);
  }
}

function* handleDeleteTodo(action) {
  const { data } = action;

  try {
    const isConfirm = yield call(confirmSaga, data);
    if (isConfirm) {
      yield call(deleteTodo, data.id);
      yield handleGetTodos();
    }
  } catch (err) {
    console.log(err);
  }
}

export function* confirmSaga(data) {
  try {
    const modalState = {
      isOpen: true,
      itemToDelete: data,
    };
    const emptyState = {
      isOpen: false,
      itemToDelete: null,
    };

    yield put(setModal(modalState));
    const { yes } = yield race({
      yes: take(actionTypes.MODAL_CONFIRM),
      no: take(actionTypes.MODAL_CANCEL),
    });
    yield put(setModal(emptyState));
    return Boolean(yes);
  } catch (e) {
    console.error(e);
  }
}
function* handleEditTodo(action) {
  const { data } = action;
  try {
    yield call(editTodo, data);
    yield handleGetTodos();
  } catch (err) {
    console.log(err);
  }
}

function* handleToggleTodo(action) {
  const { data } = action;
  try {
    yield call(toggleTodo, data);
    yield handleGetTodos();
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.GET_TODOS, handleGetTodos);
  yield takeLatest(actionTypes.ADD_TODO, handleAddTodo);
  yield takeLatest(actionTypes.DELETE_TODO, handleDeleteTodo);
  yield takeLatest(actionTypes.EDIT_TODO, handleEditTodo);
  yield takeLatest(actionTypes.TOGGLE_TODO, handleToggleTodo);
}
