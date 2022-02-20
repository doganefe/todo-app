import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import actions from "./redux/actions/todoActions";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import useHeight from "./useHeight";

function App() {
  const dispatch = useDispatch();
  const height = useHeight();

  useEffect(() => {
    dispatch(actions.getTodos());
  }, []);

  return (
    <div className="app" style={{ height: height }}>
      <Modal />
      <div className="container">
        <Header />
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
