import React, { useReducer, useEffect } from "react";
import { initialState, reducer } from "../Reducers/todo.reducer.js";
import Todo from "../Components/Todo.jsx";
import AddTodo from "../Components/AddTodo.jsx";
import styles from "../styles/Todo.module.css";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(async () => {
    await fetch("/api/todoData", {
      method: "PUT",
      body: JSON.stringify(state),
    });
  }, [state]);
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
