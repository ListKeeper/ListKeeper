import React, { useState } from "react";
import PropTypes from "prop-types";

const data = [
  {
    label: "Help",
    message: "I am in a dangerous situation and I require help.",
  },
  { label: "Stranger", message: "I think I am being followed." },
  {
    label: "Violence",
    message:
      "Another person I am near to is growing increasingly angry or violent.",
  },
  {
    label: "Escalating",
    message:
      "There is a situation with more or one people and it is escalating.",
  },
  {
    label: "Threatened",
    message: "I have been verbally threatened or abused.",
  },
  { label: "Medical", message: "I am having a medical emergency." },
  { label: "Allclear", message: "I am okay, situation has resolved itself" },
];

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
