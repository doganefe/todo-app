import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";

import "./Form.css";

const Form = () => {
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (inp) {
      const data = {
        completed: false,
        title: inp,
      };
      dispatch(actions.addTodo(data));
      setInp("");
    }
  }

  function handleInput(e) {
    const { value } = e.target;
    setInp(value);
  }

  return (
    <form onSubmit={addItem} className="form">
      <input
        value={inp}
        onChange={handleInput}
        className="form__input"
        type="text"
        placeholder="Add your new todo"
        name=""
        id=""
      />
    </form>
  );
};

export default Form;
