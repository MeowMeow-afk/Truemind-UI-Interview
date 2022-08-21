import React, { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";
import { initialState } from "./initialState";

// Creating data layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Creating a Consumer
export const useStateValue = () => useContext(StateContext);
