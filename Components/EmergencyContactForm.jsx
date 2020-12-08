import React, { useState } from "react";

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
      >
        Add
      </button>
    </div>
  );
};

export default EmergencyContactForm;
