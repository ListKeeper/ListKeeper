
import React, { useReducer } from "react";
import { initialState, reducer } from "../Reducers/todo.reducer.js";
import Todo from "../Components/Todo.jsx";
import AddTodo from "../Components/AddTodo.jsx";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
  <div className={styles.container}>
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
    />
    {state.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        remove={() => dispatch({type: "remove", id: t.id})}
        edit={text => dispatch({type: "edit", id: t.id, text: text})}
      />
    ))}
    </div>
  </>);
}
export default TodoApp;