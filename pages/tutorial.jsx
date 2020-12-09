import React, { useContext, useReducer, useState, useEffect } from "react";
import { initialState, reducer } from "../Reducers/TutorialReducer.js";
import Link from "next/link";
import TutorialAddTodo from "../Components/TutorialAddTodo"
import styles from "../styles/Tutorial.module.css";
import TutorialTodo from '../Components/TutorialTodo';

const tutorial = () => {


  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <div>Tutorial</div>
      </div>

      <div className={styles.container}>
        <h1>Todos (Tutorial)</h1>
        {state.todos.map((t) => (
          <TutorialTodo
            key={t.id}
            todo={t}
            remove={() => dispatch({type: "remove", id: t.id})}
            edit={text => dispatch({type: "edit", id: t.id, text: text})}
          />
        ))}
        <TutorialAddTodo add={text => dispatch({type: "add", text: text})} />

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
