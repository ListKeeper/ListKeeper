import React, { useState } from "react";
import PropTypes from "prop-types";

const EmergencyContactForm = ({ add }) => {
  const [text, setText] = useState("");
  return (
    <div className="AddEmergencyContact">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="AddEmergencyContactInput"
      />
      <button
        className="AddEmergencyContactButton"
        onClick={() => {
          add(text);
          setText("");
        }}
        type="button"
      >
        Add
      </button>
    </div>
  );
};

EmergencyContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default EmergencyContactForm;
