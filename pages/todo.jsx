import React, { useContext } from "react";
import Link from "next/link";
import { StoreContext } from "../Reducers/reducer";
import Todo from "../Components/Todo";
import AddTodo from "../Components/AddTodo";
import styles from "../styles/Todo.module.css";

// Any component can grab and use state & dispatch
const TodoApp = () => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <>
      <div className={styles.container}>
        <h1>Todos</h1>
        {state.todos.map((t) => (
          <Todo
            key={t.id}
            todo={t}
            remove={() => dispatch({ type: "remove-todo", id: t.id })}
            edit={(text) => dispatch({ type: "edit-todo", id: t.id, text })}
          />
        ))}
        <AddTodo add={(text) => dispatch({ type: "add-todo", text })} />
        <div>
          <Link href="/">
            <button type="button">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
