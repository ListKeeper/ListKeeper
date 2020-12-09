import React, { useState } from "react";
import PropTypes from "prop-types";
import EmergencyContactForm from "./EmergencyContactForm";

const EmergencyContact = ({ emergencyContact, remove, edit }) => {
  const [mode, setMode] = useState("list");
  return (
    <div>
      {mode === "list" ? (
        <>
          <span className="EmergencyContactText">{emergencyContact.name}</span>
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
        <EmergencyContactForm
          emergencyContact={emergencyContact}
          onSubmit={(contact) => {
            setMode("list");
            edit(contact);
          }}
        />
      )}
    </div>
  );
};

EmergencyContact.propTypes = {
  emergencyContact: PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default EmergencyContact;
