import { createContext, useContext } from "react";

export const GlobalContext = createContext();

export const useGlobalState = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalState can only be used inside GlobalContext");
  }

  return context;
};
