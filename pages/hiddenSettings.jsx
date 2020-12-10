import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signin, signout } from "next-auth/client";
import { StoreContext } from "../Reducers/reducer";
import EmergencyContact from "../Components/EmergencyContact";
import EmergencyContactForm from "../Components/EmergencyContactForm";
import styles from "../styles/Hidden.module.css";

function hiddenSettings() {
  const [session] = useSession()
  const [userName, setUsername] = useState("")

 const getName = () => {
  setUsername(session.user.name)
 }

  useEffect(() => {
    if(session !== undefined){
      getName()
    }
  }, [session])


  const { state, dispatch } = useContext(StoreContext);
  return (
    <div className={styles.container}>
      <p>
        ListKeeper is disguised as an unsuspecting todo list app so if you are
        in a dangerous situation and you need to be stealthy in calling for
        help, ListKeeper can keep you safe.{" "}
      </p>

      <p>
        When you input a todo on ListKeeper the search bar will autocomplete
        into a known phrase e.g. Help. When you press the ADD button listKeeper
        sends a coded message to your trusted contacts via SMS and Email. If you
        need immediate help you can always access this secret menu and get
        connected to 911 via the Emergency button{" "}
      </p>
     

      <h2>{userName + "'s Trusted Contacts"}</h2>
      <p>Please add contacts here that you trust in real life. When you press the ADD button on a list they will immediately recieve a message. You can go to the tutorial menu to see how this works.</p>
      <div className={styles.contacts}>
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
      </div>
      <EmergencyContactForm
        onSubmit={(emergencyContact) =>
          dispatch({ type: "add-contact", payload: emergencyContact })
        }
      />
      <div className={styles.buttons}>
      <Link href="/tutorial">
        <button type="button">Tutorial</button>
      </Link>
      <button type="button">Emergency</button>
      <Link href="/">
        <button type="button">Back</button>
      </Link>
      </div>
    </div>
  );
}

export default hiddenSettings;
