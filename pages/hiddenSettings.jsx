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
    <h2 className={styles.h2}>ListKeeper Will Keep You Safe!</h2>
    <div className={styles.appinfo}>
      <p>
        ListKeeper is disguised as an unsuspecting todo list app for when you find yourself in a dangerous situation.  </p>

        <p>Think of ListKeeper as the virtual "Angel Shot" giving you the ability to stealthily send a coded message to those you most trust.</p>

        <p><b>To use ListKeeper:</b></p>

        <p>Add some trusted contacts below, a name, email and cell number are required.</p>

        <p>On the main menu choose the TODO LIST option.</p>

        <p>Look for an appropriate word that matches your situation. Press the ADD button. </p>

        <p>Your trusted contacts will receive your message and location via text and email.</p>

        <p>Don't forget to send an Allclear when the danger has passed.</p>

        <p>It's as simple as that!</p>
        </div>
     

      <h2 className={styles.h2}>{userName + "'s Trusted Contacts"}</h2>
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
      <Link href="/">
        <button type="button">Back</button>
      </Link>
      </div>
    </div>
  );
}

export default hiddenSettings;
