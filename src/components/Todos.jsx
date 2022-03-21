import s from "./index.module.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import useLocalStorage from "./../hoc/useLocalStorage";

const Todos = () => {
  const [todoItems, setTodos] = useLocalStorage("todoItems", []);

  return (
    <div className={s.todos}>
      <div>
        <h2>Todo</h2>
        <NewTodoForm todoItems={todoItems} setTodos={setTodos} />
        <TodoList todoItems={todoItems} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todos;
