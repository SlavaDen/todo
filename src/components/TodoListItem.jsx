import s from "./index.module.css";

const TodoListItem = (props) => {
  const {
    id = "",
    value = "",
    done = false,
    handleRemoveTodo = Function,
    handleChangeDoneTodo = Function,
  } = props;

  return (
    <li className={s.todo_todoItem}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => handleChangeDoneTodo(id)}
        className={s.todo_listItemDoneCheckbox}
      />
      <h3>{value}</h3>
      <button
        className={s.todo_listItemRemoveButton}
        onClick={() => handleRemoveTodo(id)}
      >
        Удалить
      </button>
    </li>
  );
};

export default TodoListItem;
