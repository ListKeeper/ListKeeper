import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { reducer, StoreContext } from "./reducer";

// Responsible for creating the reducer
// Made this file to create the reducer once the initial state is loaded
const ReducerProvider = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    await fetch("/api/appData", {
      method: "PUT",
      body: JSON.stringify(state),
    });
  }, [state]);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};

ReducerProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialState: PropTypes.object.isRequired,
};

export default ReducerProvider;
