import TodoListItem from "./TodoListItem";
import s from "./index.module.css";

const TodoList = (props) => {
  const { todoItems = [], setTodos = Function } = props;

  const handleRemoveTodo = (id = new Date()) => {
    setTodos(todoItems.filter((todoItem) => todoItem.id !== id));
  };

  const handleChangeDoneTodo = (id = new Date()) => {
    setTodos(
      todoItems.map((todoItem) => {
        if (todoItem.id === id) {
          todoItem.done = !todoItem.done;

          return todoItem;
        }
        return todoItem;
      })
    );
  };

  return (
    <ul className={s.todo_todosList}>
      {todoItems.map((todoItem) => (
        <TodoListItem
          key={todoItem.id}
          {...todoItem}
          handleRemoveTodo={handleRemoveTodo}
          handleChangeDoneTodo={handleChangeDoneTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
