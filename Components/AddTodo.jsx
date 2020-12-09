import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ add }) => {
  const [text, setText] = useState("");
  return (
    <div className="AddTodo">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="AddTodoInput"
      />
      <button
        className="AddTodoButton"
        onClick={() => {
          add(text);
          setText("");
        }}
        type="button"
      >
        Add
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  add: PropTypes.func.isRequired,
};

export default AddTodo;
