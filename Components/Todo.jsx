import React, { useState } from "react";
import PropTypes from "prop-types";

const Todo = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);
  return (
    <div className="Todo">
      {mode === "list" ? (
        <>
          <span className="TodoText">{todo.text}</span>
          <button className="RemoveTodo" onClick={remove} type="button">
            Remove
          </button>
          <button
            className="EditTodo"
            onClick={() => setMode("edit")}
            type="button"
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="EditTodoInput"
          />
          <button
            className="EditTodoSave"
            onClick={() => {
              edit(text);
              setMode("list");
            }}
            type="button"
          >
            Save
          </button>
          <button
            className="EditTodoCancel"
            onClick={() => setMode("list")}
            type="button"
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default Todo;
