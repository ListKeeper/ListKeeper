import React, { useContext, useReducer, useState, useEffect } from "react";
import Styles from "../styles/Tutorial.module.css";
import { Button } from "@material-ui/core";
import { initialState, reducer } from "../Reducers/TutorialReducer.js";
import Link from "next/link";
import Todo from "../Components/Todo.jsx";
import AddTodo from "../Components/AddTodo.jsx";
import styles from "../styles/Tutorial.module.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const tutorial = () => {
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


  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <div>Tutorial</div>
      </div>

      <div className={styles.container}>
        <h1>Todos (Tutorial)</h1>
        {state.todos.map((t) => (
          <Todo
            key={t.id}
            todo={t}
            remove={() => dispatch({ type: "remove-todo", id: t.id })}
            edit={(text) =>
              dispatch({ type: "edit-todo", id: t.id, text: text })
            }
          />
        ))}
        <AddTodo add={(text) => dispatch({ type: "add-todo", text: text })} />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          getOptionLabel={(option) => option.label}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Input Command" />
          )}
        />

        <div>
          <Link href="/hiddenSettings">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default tutorial;
