import React, { useState } from "react";
import PropTypes from "prop-types";

const EmergencyContactForm = ({ onSubmit, emergencyContact }) => {
  const [formData, setFormData] = useState(emergencyContact || {});
  return (
    <div className="AddEmergencyContact">
      <input
        value={formData.name || ""}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        value={formData.phoneNumber || ""}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
      />
      <input
        value={formData.email || ""}
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
