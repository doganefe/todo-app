import React, { useState } from "react";
import "./Todo.css";
import actions from "../../redux/actions/todoActions";
import { useDispatch } from "react-redux";

const Todo = ({ todo, isScrollBarVisible }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [inpVal, setInpVal] = useState(todo.title);
  const dispatch = useDispatch();

  function toggle(e) {
    const newTodo = {
      ...todo,
      completed: !todo.completed,
    };
    dispatch(actions.toggleTodo(newTodo));
  }

  function deleteTodo() {
    dispatch(actions.deleteTodo(todo));
  }

  function editTodo(e) {
    e.preventDefault();
    if (inpVal && inpVal !== todo.title) {
      const newTodo = {
        ...todo,
        title: inpVal,
      };
      dispatch(actions.editTodo(newTodo));
      handleEditToggler();
    }
  }

  function handleEditToggler() {
    setIsEditOpen((prev) => !prev);
  }

  function handleInpVal(e) {
    const { value } = e.target;
    setInpVal(value);
  }

  return (
    <div
      className="todo"
      // className={`todo ${todo.completed ? "toggled" : ""}`}
      style={{ marginRight: isScrollBarVisible ? ".5rem" : 0 }}
    >
      {isEditOpen ? (
        <form className="todo__edit" onSubmit={editTodo}>
          <input
            type="text"
            className="todo__input"
            value={inpVal}
            onChange={handleInpVal}
          />
          <button title="Kaydet" type="submit">
            Kaydet
            <img
              src={`${process.env.PUBLIC_URL}/imgs/done.svg`}
              className="icon icon__done"
              alt=""
            />
          </button>
        </form>
      ) : (
        <div className="todo__left" onClick={toggle}>
          <div
            className={`todo__checkbox ${todo.completed ? "green" : "gray"}`}
          ></div>
          <p>{todo.title}</p>
        </div>
      )}
      <div className="todo__buttons">
        <button onClick={handleEditToggler} title="Düzenle">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/edit.svg`}
            className="icon"
            alt=""
          />
        </button>
        <button onClick={deleteTodo} title="Sil">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/delete.svg`}
            className="icon"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Todo;
