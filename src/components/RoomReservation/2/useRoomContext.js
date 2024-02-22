import React from "react";

export const RoomsContext = React.createContext(null);

export const useRoomsContext = () => {
  const context = React.useContext(RoomsContext);
  return context;
};
