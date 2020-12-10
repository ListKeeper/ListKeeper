import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSession, signin, signout } from "next-auth/client";
<<<<<<< HEAD
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "next/link";

const AddTodo = ({ add }) => {
  const [session] = useSession()
  const [userName, setUsername] = useState("")
  const [showStep1, setShowStep1] = useState(true)
  const [showStep2, setShowStep2] = useState(false)
  const [showStep3, setShowStep3] = useState(false)
  const [showStep4, setShowStep4] = useState(false)
=======
import styles from "../styles/Todo.module.css";

const AddTodo = ({ add }) => {
  const [session] = useSession();
  const [userName, setUsername] = useState("");
>>>>>>> main

  const getName = () => {
    setUsername(session.user.name);
  };

  useEffect(() => {
    if (session !== undefined) {
      getName();
    }
  }, [session]);

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
        "I presently at an escalating situation with one or more people. I need some help.",
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
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [hasSent, setHasSent] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [latitude, longitude]);

  const sendMessage = () => {
    setHasSent(true);
  };

  return (
<<<<<<< HEAD
    <>
    <div className={showStep2 ? styles.step2 : styles.hide}>You can type to enter a coded message or scroll down to find an appropriate message for your sitation <ArrowDownwardIcon className={styles.arrow} /></div>
=======
>>>>>>> main
    <div className={styles.container}>
    <div>
      <Autocomplete
<<<<<<< HEAD
          disablePortal
          id="combo-box-demo"
          options={data}
          onFocus={() => {setShowStep1(false)
              setShowStep2(true)}}
          getOptionSelected={(option, value) => option.label === value.label}
          onChange={(e, value) => {
            if(value){
              setShowStep1(false)
              setShowStep2(false)
              setShowStep3(true)
            setText(value.phrase)
            setMessage(value.message)
            setHasSent(false)
            }
          }}
          getOptionLabel={(option) => option.label}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Add Your Todo Here" />
            
          )}
        />
        <div className={showStep1 ? styles.step1 : styles.hide}>Start by clicking here
        <div className={styles.arrow}>
          <ArrowUpwardIcon />
        </div>
        </div>
        </div>
        <div className={styles.button}>
=======
        disablePortal
        id="combo-box-demo"
        options={data}
        getOptionSelected={(option, value) => option.label === value.label}
        onChange={(e, value) => {
          if (value) {
            setText(value.phrase);
            setMessage(value.message);
            setHasSent(false);
          }
        }}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Add Your Todo Here" />
        )}
      />
>>>>>>> main
      <button
        className={styles.AddTodoButton}
        onClick={() => {
          add(text);
<<<<<<< HEAD
          setShowStep3(false)
          setShowStep4(true)
          sendMessage()
=======
          sendMessage();
>>>>>>> main
          setText("");
        }}
        type="button"
      >
        Add
      </button>
<<<<<<< HEAD
      <div className={showStep3 ? styles.step3 : styles.displaynone}>
      <div className={styles.buttonflex}>
      <ArrowBackIcon className={styles.arrowlr} />
      </div>
      <div className={styles.step3text}>Click the Add button when you are ready to send</div>
      </div>
      </div>
    
    <br />
    <div className={showStep4 ? styles.step4 : styles.displaynone}>
    <div>When you press add your list will add an inconspicuous message.<br />
    <br />
    Below is an example of the real message that will be sent to your tusted contacts.</div>
    </div>
    <br />



    <img className={showStep4 ? styles.phone : styles.displaynone} src="https://handsontek.net/demoimages/mobileapp/iphone5s-ns.png"></img>
    <div className={showStep4 ? styles.white : styles.displaynone}></div>
      
      <p className={styles.messageresult} id="message">{hasSent ? "This is a message sent from the ListKeeper App on Behalf of " + userName + ". " + message + " I am at " + `https://www.google.com/maps/search/${latitude},${longitude}` +  " (Accurate to 1800m)" : null}</p>
=======
      <p>{latitude}</p>
      <p>{longitude}</p>
      <p id="message">
        {hasSent
          ? `This is a message sent from the ListKeeper App on Behalf of ${userName}. ${message} I am at ` +
            `https://www.google.com/maps/search/${latitude},${longitude}` +
            ` (Accurate to 1800m)`
          : null}
      </p>
>>>>>>> main
    </div>
    
    <div className={showStep4 ? styles.aboutinfo : styles.displaynone}>ListKeeper was created by <a href='https://github.com/AndrewRLloyd88'>Andrew Lloyd</a> and <a href="https://github.com/npwxx">Nicole Woodcock</a> for <a href="https://mintbean.io/meets/988938b2-f615-414d-8b5b-7be96b49bec6">Mintbean Javascript Hacks: Social Justice Hack Week</a> </div>

<div className={showStep4 ? styles.backButton : styles.backbuttonb44}>
    <Link href="/hiddenSettings">
            <button>Back To Settings Menu</button>
          </Link>
          </div>
    </>
  );
};

AddTodo.propTypes = {
  add: PropTypes.func.isRequired,
};

export default AddTodo;
