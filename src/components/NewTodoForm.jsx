import { useState } from "react";
import s from "./index.module.css";

const NewTodoForm = (props) => {
  const { todoItems = [], setTodos = Function } = props;

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();

    const newTodoItem = {
      id: new Date(),
      value: newTodo,
      done: false,
    };

    setTodos([...todoItems, newTodoItem]);
    setNewTodo("");
  };

  return (
    <form autoComplete="off">
      <input
        placeholder="Задание"
        className={s.todo_newTodoInput}
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button
        className={s.todo_newTodoButton}
        onClick={(event) => handleAddTodo(event)}
      >
        Добавить
      </button>
    </form>
  );
};

export default NewTodoForm;
