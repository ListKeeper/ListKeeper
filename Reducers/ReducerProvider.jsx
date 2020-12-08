import React, { useReducer, useEffect } from "react";
import { reducer, StoreContext } from "./reducer";

// Responsible for creating the reducer
// Made this file to create the reducer once the initial state is loaded
export default (props) => {
  const [state, dispatch] = useReducer(reducer, props.initialState);

  useEffect(async () => {
    await fetch("/api/appData", {
      method: "PUT",
      body: JSON.stringify(state),
    });
  }, [state]);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {props.children}
    </StoreContext.Provider>
  );
};
