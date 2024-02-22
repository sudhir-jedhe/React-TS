import { createContext, useReducer, useContext, useId } from "react";
import { createPortal } from "react-dom";
import Notif from "./Notification";
const Ctx = createContext();

const reducerFn = (state, action) => {
  // logic to update the state
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "REMOVE":
      return state.filter((notif) => notif.id !== action.payload.id);
    default:
      return state;
  }
};

export const ToastContext = ({ children }) => {
  // state
  const [state, dispatch] = useReducer(reducerFn, []);
  return <Ctx.Provider value={{ state, dispatch }}>{children}</Ctx.Provider>;
};

export const useToastCtx = () => {
  // connection layer between View and State
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useToastCtx must be used within ToastContext");
  return ctx;
};

export const Toast = () => {
  // View
  const { state } = useToastCtx();
  return createPortal(
    <div className="portal">
      {state.map((notif) => (
        <Notif key={notif.id} {...notif} />
      ))}
    </div>,
    document.body
  );
};

export const useToasts = () => {
  const { dispatch } = useToastCtx();

  const showNotification = ({ type, message }) => {
    let uuid = self.crypto.randomUUID();
    dispatch({
      type: "ADD",
      payload: {
        type,
        message,
        id: uuid,
      },
    });
  };
  return { showNotification };
};
