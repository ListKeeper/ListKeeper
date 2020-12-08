import React, { useState } from "react";
import EmergencyContactForm from "./EmergencyContactForm";

const EmergencyContact = ({ emergencyContact, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [contact, setContact] = useState(emergencyContact);
  return (
    <div>
      {mode === "list" ? (
        <>
          <span className="EmergencyContactText">
            {emergencyContact.phoneNumber}
          </span>
          <button className="RemoveEmergencyContact" onClick={remove}>
            Remove
          </button>
          <button
            className="EditEmergencyContact"
            onClick={() => setMode("edit")}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="EditEmergencyContactInput"
          />
          <button
            className="EditEmergencyContactSave"
            onClick={() => {
              edit(text);
              setMode("list");
            }}
          >
            Save
          </button>
          <button
            className="EditEmergencyContactCancel"
            onClick={() => setMode("list")}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default EmergencyContact;
