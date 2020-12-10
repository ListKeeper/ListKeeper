import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import styles from "../styles/Tutorial.module.css";
import { useSession, signin, signout } from "next-auth/client";

const AddTodo = ({ add }) => {
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



  const data = [
    {
      label: "Help",
      message: "I am in a dangerous situation and I require help.", phrase: 'Buy Milk'
    },
    { label: "Stranger", message: "I think I am being followed.", phrase: 'Wash Laundry' },
    {
      label: "Violence",
      message:
        "Another person I am near to is growing increasingly angry or violent.", phrase: 'Buy Birthday Gift'
    },
    {
      label: "Escalating",
      message:
        "I presently at an escalating situation with one or more people. I need some help.", phrase: 'Clean Bathroom'
    },
    {
      label: "Threatened",
      message: "I have been verbally threatened or abused.", phrase: 'Write Work Email'
    },
    { label: "Medical", message: "I am having a medical emergency.", phrase: 'Family Check-In' },
    { label: "Allclear", message: "I am okay, situation has resolved itself", phrase: 'Book Vacation' },
  ];

  const [text, setText] = useState("");
  const [message, setMessage] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [hasSent, setHasSent] = useState(false)
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })

  }, [latitude, longitude])


  const sendMessage = () => {
    setHasSent(true)
  }

  return (

    <div className="AddTodo">
      <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          getOptionSelected={(option, value) => option.label === value.label}
          onChange={(e, value) => {
            setText(value.phrase)
            setMessage(value.message)
            setHasSent(false)
          }}
          getOptionLabel={(option) => option.label}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Input Command" />
          )}
        />
      <button
        className="AddTodoButton"
        onClick={() => {
          add(text);
          sendMessage()
          setText("");
        }}
        type="button"
      >
        Add
      </button>
      <p>{latitude}</p>
      <p>{longitude}</p>
      <p id="message">{hasSent ? "This is a message sent from the ListKeeper App on Behalf of " + userName + ". " + message + " I am at " + `https://www.google.com/maps/search/${latitude},${longitude}` +  " (Accurate to 1800m)" : null}</p>
    </div>
  );
};

AddTodo.propTypes = {
  add: PropTypes.func.isRequired,
};

export default AddTodo;
