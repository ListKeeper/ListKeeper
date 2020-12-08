import React, { useContext } from "react";
import { StoreContext } from "../Reducers/reducer.js";
import Todo from "../Components/Todo.jsx";
import AddTodo from "../Components/AddTodo.jsx";
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
            remove={() => dispatch({ type: "remove", id: t.id })}
            edit={(text) => dispatch({ type: "edit", id: t.id, text: text })}
          />
        ))}
        <AddTodo add={(text) => dispatch({ type: "add", text: text })} />
      </div>
    </>
  );
};

export default TodoApp;
