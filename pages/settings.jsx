import React, { useContext } from "react";
import Link from "next/link";
import { StoreContext } from "../Reducers/reducer";
import EmergencyContact from "../Components/EmergencyContact";
import EmergencyContactForm from "../Components/EmergencyContactForm";
import styles from "../styles/Todo.module.css";

// Any component can grab and use state & dispatch
const Settings = () => {
  const { state, dispatch } = useContext(StoreContext);
  return (
    <>
      <div className={styles.container}>
        <h1>Settings</h1>
        {state.settings.emergencyContacts.map((c) => (
          <EmergencyContact
            key={c.id}
            emergencyContact={c}
            remove={() =>
              dispatch({ type: "remove-contact", payload: { id: c.id } })
            }
            edit={(emergencyContact) =>
              dispatch({
                type: "edit-contact",
                payload: emergencyContact,
              })
            }
          />
        ))}
        <EmergencyContactForm
          onSubmit={(emergencyContact) =>
            dispatch({ type: "add-contact", payload: emergencyContact })
          }
        />
      </div>
      <div>
        <Link href="/">
          <button type="button">Back</button>
        </Link>
      </div>
    </>
  );
};

export default Settings;
