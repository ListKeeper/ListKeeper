import React, { useReducer, useEffect } from "react";
import { reducer, StoreContext } from "../Reducers/todo.reducer";

// Responsible for creating the reducer
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
