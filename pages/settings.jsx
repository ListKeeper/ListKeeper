import React, { useContext } from "react";
import { StoreContext } from "../Reducers/reducer";
import EmergencyContact from "../Components/EmergencyContactList";
import AddEmergencyContact from "../Components/EmergencyContactForm";
import styles from "../styles/Todo.module.css";
import Link from "next/link"

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
            edit={(phoneNumber) =>
              dispatch({
                type: "edit-contact",
                payload: { id: c.id, phoneNumber },
              })
            }
          />
        ))}
        <AddEmergencyContact
          add={(phoneNumber) =>
            dispatch({ type: "add-contact", payload: { phoneNumber } })
          }
        />
      </div>
      <div>
      <Link href="/"><button>Back</button></Link>
      </div>
    </>
  );
};

export default Settings;
