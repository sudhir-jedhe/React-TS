import { useReducer, createContext, useContext, useCallback } from "react";

import Notification from "./Notification";

import { addNotification } from "./state/actions";
import reducer from "./state/reducer";

const NotificationContext = createContext();

export const _useNotifications = () => {
  const dispatch = useContext(NotificationContext);

  if (!dispatch) {
    throw new Error(
      "useNotifications can only be used inside NotificationContext"
    );
  }

  const showNotification = useCallback(({ type, message }) => {
    dispatch(
      addNotification({
        type,
        message,
      })
    );
  }, []);

  return { showNotification };
};

export default NotificationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    notifications: [],
  });

  return (
    <NotificationContext.Provider value={dispatch}>
      <div className="notifications-wrapper">
        {state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              dispatch={dispatch}
              {...notification}
            />
          );
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};
