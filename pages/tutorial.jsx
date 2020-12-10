import React, { useReducer, useState, useEffect } from "react";
import { useSession, signin, signout } from "next-auth/client";
import Link from "next/link";
import { initialState, reducer } from "../Reducers/TutorialReducer";
import TutorialAddTodo from "../Components/TutorialAddTodo";
import styles from "../styles/Tutorial.module.css";
import TutorialTodo from "../Components/TutorialTodo";

const tutorial = () => {
  const [session] = useSession();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userName, setUsername] = useState("");

  const getName = () => {
    setUsername(session.user.name);
  };

  useEffect(() => {
    if (session !== undefined) {
      getName();
    }
  }, [session]);

  return (
    <>
      <div>
        <div className={styles.container}>
          <h1>{userName}'s Todos (Tutorial)</h1>
          {state.todos.map((t) => (
            <TutorialTodo
              key={t.id}
              todo={t}
              remove={() => dispatch({ type: "remove", id: t.id })}
              edit={(text) => dispatch({ type: "edit", id: t.id, text })}
            />
          ))}
          <TutorialAddTodo add={(text) => dispatch({ type: "add", text })} />
        </div>
      </div>
    </>
  );
};
export default tutorial;
