import React, { useState } from "react";
import PropTypes from "prop-types";
// import EmergencyContactForm from "./EmergencyContactForm";

const EmergencyContactList = ({ emergencyContact, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [contact, setContact] = useState(emergencyContact);
  return (
    <div>
      {mode === "list" ? (
        <>
          <span className="EmergencyContactText">
            {emergencyContact.phoneNumber}
          </span>
          <button
            className="RemoveEmergencyContact"
            onClick={remove}
            type="button"
          >
            Remove
          </button>
          <button
            className="EditEmergencyContact"
            onClick={() => setMode("edit")}
            type="button"
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="EditEmergencyContactInput"
          />
          <button
            className="EditEmergencyContactSave"
            onClick={() => {
              edit(contact);
              setMode("list");
            }}
            type="button"
          >
            Save
          </button>
          <button
            className="EditEmergencyContactCancel"
            onClick={() => setMode("list")}
            type="button"
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

EmergencyContactList.propTypes = {
  emergencyContact: PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default EmergencyContactList;
