import React, { createContext, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ value, children }) => (
  <StateContext.Provider value={value}>{children}</StateContext.Provider>
);

export const useProviderContext = () => useContext(StateContext);
