import React from "react";
import uniqid from "uniqid";

// Context
// will be used to pass down the dispatch method and our
// application state via the Context Provider and consumed
// in child components using the useContext Hook
export const StoreContext = React.createContext(null);

export const initialState = {
  todos: [],
  settings: { emergencyContacts: [] },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo": {
      const newTodo = {
        id: uniqid(),
        text: action.text,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case "edit-todo": {
      const idx = state.todos.findIndex((t) => t.id === action.id);
      const todo = { ...state.todos[idx] };
      todo.text = action.text;
      const todos = [...state.todos];
      todos.splice(idx, 1, todo);
      return {
        ...state,
        todos: todos,
      };
    }
    case "remove-todo": {
      const idx = state.todos.findIndex((t) => t.id === action.id);
      const todos = [...state.todos];
      todos.splice(idx, 1);
      return {
        ...state,
        todos: todos,
      };
    }
    case "add-contact": {
      return {
        ...state,
        settings: {
          ...state.settings,
          emergencyContacts: [
            ...state.settings.emergencyContacts,
            { phoneNumber: action.payload.phoneNumber, id: uniqid() },
          ],
        },
      };
    }
    case "edit-contact": {
      const idx = state.settings.emergencyContacts.findIndex(
        (c) => c.id === action.payload.id
      );
      const contact = {
        ...state.settings.emergencyContacts[idx],
        phoneNumber: action.payload.phoneNumber,
      };
      const emergencyContacts = [...state.settings.emergencyContacts];
      emergencyContacts.splice(idx, 1, contact);
      return {
        ...state,
        settings: {
          ...state.settings,
          emergencyContacts,
        },
      };
    }
    case "remove-contact": {
      const idx = state.settings.emergencyContacts.findIndex(
        (c) => c.id === action.payload.id
      );
      const emergencyContacts = [...state.settings.emergencyContacts];
      emergencyContacts.splice(idx, 1);
      return {
        ...state,
        settings: {
          ...state.settings,
          emergencyContacts,
        },
      };
    }
    default:
      return state;
  }
};
