import React, { createContext, useContext } from "react";
import { initialState } from "../App";
import Reducer from "../Reducer";

// creating context
const formStore = createContext();
export const useStore = () => useContext(formStore);

export default function StoreProvider ({ children }) {
  const [formState, dispatch] = React.useReducer(Reducer, initialState);

  return (
    <formStore.Provider value={[formState, dispatch]}>{children}</formStore.Provider>
  );
};
