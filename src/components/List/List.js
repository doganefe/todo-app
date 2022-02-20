import React, { useState, useEffect, useRef } from "react";
import Todo from "../Todo/Todo";
import "./List.css";
import { useSelector } from "react-redux";

function scrollbarVisible(element) {
  return element.scrollHeight > element.clientHeight;
}

const List = () => {
  const [isVisible, setIsVisible] = useState(false);
  const todos = useSelector((state) => state.todos.todos);

  const listRef = useRef();

  useEffect(() => {
    if (listRef.current) {
      setIsVisible(scrollbarVisible(listRef.current));
    }
  }, [todos]);

  return (
    <main>
      <div className="list" ref={listRef}>
        {todos &&
          todos.map((todo) => (
            <Todo key={todo.id} todo={todo} isScrollBarVisible={isVisible} />
          ))}
      </div>
    </main>
  );
};

export default List;
