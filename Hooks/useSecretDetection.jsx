import React, { useState } from "react";
import Router from "next/router";

function useSecretDetection([]) {
  const [secretActivated, setSecretActivated] = useState([0, 0, 0, 0]);
  //check to see what is clicked

  const markSecret = (event) => {
    //create a mutable copy of our stateful array
    let statusArray = secretActivated;
    const id = parseInt(event.target.id);
    statusArray[id] = 1;
    setSecretActivated(statusArray);
    checkSecretArray();
  };

  //check if all array values === 1
  const checkSecretArray = () => {
    let result = 0;
    for (let i in secretActivated) {
      result += parseInt(secretActivated[i]);
    }

    if (result === 4) {
      //link to the secret page
      resetSecretArray();
      Router.push("/hiddenSettings");
    }
  };

  const resetSecretArray = () => {
    //reset secretActivitated to [0, 0, 0, 0]
    setSecretActivated([0, 0, 0, 0]);
  };

  return { secretActivated, markSecret };
}

export default useSecretDetection;
