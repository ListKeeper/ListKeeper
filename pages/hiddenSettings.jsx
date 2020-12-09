import React, { useContext } from "react";
import Link from "next/link";
import { StoreContext } from "../Reducers/reducer";
import EmergencyContact from "../Components/EmergencyContact";
import EmergencyContactForm from "../Components/EmergencyContactForm";

function hiddenSettings() {
  const { state, dispatch } = useContext(StoreContext);
  return (
    <div>
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
      <Link href="/tutorial">
        <button type="button">Tutorial</button>
      </Link>
      <button type="button">Emergency</button>
      <Link href="/">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}

export default hiddenSettings;
