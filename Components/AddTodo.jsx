import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { StoreContext } from "../Reducers/reducer";

const AddTodo = ({ add }) => {
  const data = [
    {
      label: "Help",
      message: "I am in a dangerous situation and I require help.",
      phrase: "Buy Milk",
    },
    {
      label: "Stranger",
      message: "I think I am being followed.",
      phrase: "Wash Laundry",
    },
    {
      label: "Violence",
      message:
        "Another person I am near to is growing increasingly angry or violent.",
      phrase: "Buy Birthday Gift",
    },
    {
      label: "Escalating",
      message:
        "There is a situation with more or one people and it is escalating.",
      phrase: "Clean Bathroom",
    },
    {
      label: "Threatened",
      message: "I have been verbally threatened or abused.",
      phrase: "Write Work Email",
    },
    {
      label: "Medical",
      message: "I am having a medical emergency.",
      phrase: "Family Check-In",
    },
    {
      label: "Allclear",
      message: "I am okay, situation has resolved itself",
      phrase: "Book Vacation",
    },
  ];

  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const { state, dispatch } = useContext(StoreContext);

  const handleAdd = () => {
    console.log("anything");
    for (const emergency of data) {
      console.log(text, emergency);
      if (text.toLowerCase().includes(emergency.phrase.toLowerCase())) {
        add(emergency.phrase);
        console.log(emergency);
        console.log(state.settings.emergencyContacts);
        for (const emergencyContact of state.settings.emergencyContacts) {
          fetch("/api/twilioClient", {
            method: "POST",
            body: JSON.stringify({
              message: emergency.message,
              phoneNumber: emergencyContact.phoneNumber,
            }),
          });
        }
        return;
      }
    }
    add(text);
  };

  return (
    <div className="AddTodo">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data}
        getOptionSelected={(option, value) => option.label === value.label}
        onChange={(e, value) => {
          if (value) {
            setText(value.phrase);
          }
        }}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Add your Todo Here" />
        )}
      />
      <button
        className="AddTodoButton"
        onClick={() => {
          handleAdd();
          setText("");
        }}
        type="button"
      >
        Add
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  add: PropTypes.func.isRequired,
};

export default AddTodo;
