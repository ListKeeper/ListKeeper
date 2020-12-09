import React, { useState } from "react";
import PropTypes from "prop-types";

// Create new or edit emergency contact info
const EmergencyContactForm = ({ onSubmit, emergencyContact }) => {
  const [formData, setFormData] = useState(emergencyContact || {});
  return (
    <div className="AddEmergencyContact">
      <input
        value={formData.name || ""}
        placeholder="name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        value={formData.phoneNumber || ""}
        placeholder="phone number"
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
      />
      <input
        value={formData.email || ""}
        placeholder="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button
        onClick={() => {
          onSubmit(formData);
          setFormData(emergencyContact || {});
        }}
        type="button"
      >
        Add
      </button>
    </div>
  );
};

EmergencyContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  emergencyContact: PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default EmergencyContactForm;
