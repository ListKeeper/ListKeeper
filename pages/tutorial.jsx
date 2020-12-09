import React, { useContext, useReducer } from 'react'
import Styles from "../styles/Tutorial.module.css"
import { Button } from "@material-ui/core";
import {initialState, reducer} from "../Reducers/TutorialReducer.js"
import Link from "next/link"
import Todo from "../Components/Todo.jsx";
import AddTodo from "../Components/AddTodo.jsx";
import styles from "../styles/Tutorial.module.css"

function tutorial() {
  // Any component can grab and use state & dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <div>
    <div>
      Tutorial
    </div>
    <div>

    </div>
    <Button><Link href="/hiddenSettings">Back</Link></Button>
    </div>

    <div className={styles.container}>
        <h1>Todos</h1>
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
        <div>
          <Link href="/"><button>Back</button></Link>
        </div>
      </div>
    </>
  )
}

export default tutorial