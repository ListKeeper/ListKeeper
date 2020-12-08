import React, { useContext } from "react";
import { StoreContext } from "../Reducers/reducer.js";
import Todo from "../Components/Todo.jsx";
import AddTodo from "../Components/AddTodo.jsx";
import styles from "../styles/Todo.module.css";

// Any component can grab and use state & dispatch
const Settings = () => {
  const { state, dispatch } = useContext(StoreContext);
  console.log(state);
  return (
    <>
      <div className={styles.container}>
        <h1>Settings</h1>
        {state.settings.emergencyContacts.map((c) => (
          <Todo
            key={c.id}
            todo={c}
            remove={() =>
              dispatch({ type: "remove-contact", payload: { id: c.id } })
            }
            edit={(phoneNumber) =>
              dispatch({
                type: "edit-contact",
                payload: { id: c.id, phoneNumber },
              })
            }
          />
        ))}
        <AddTodo
          add={(phoneNumber) =>
            dispatch({ type: "add-contact", payload: { phoneNumber } })
          }
        />
      </div>
    </>
  );
};

export default Settings;
