import React from "react";
import "./style.css";
import Notification from "./Component/Notification.js";
import { useNotification } from "./Component/NotificationManager";
export default function App() {
  const { showNotification } = useNotification();
  const [Testarr, setTestarr] = React.useState([]);
  const counter = React.useRef(0);
  const removeComponent = React.useCallback((data) => {
    setTestarr((e) => e.filter((item) => item.id !== data));
  }, []);
  const addElement = (nottype) => {
    showNotification({
      id: counter.current,
      message: `${nottype} Notification`,
      setTestarr,
      counter,
      nottype,
    });
  };

  return (
    <div>
      <div className="notification-buttons">
        <div
          onClick={() => {
            addElement("info");
          }}
          className="button info"
        >
          Info
        </div>
        <div
          onClick={() => {
            addElement("success");
          }}
          className="button success"
        >
          Success
        </div>
        <div
          onClick={() => {
            addElement("warning");
          }}
          className="button warning"
        >
          Warning
        </div>
        <div
          onClick={() => {
            addElement("error");
          }}
          className="button error"
        >
          Error
        </div>
      </div>
      <div className="notifications-container">
        {Testarr.map((e, i) => {
          return (
            <div key={e.id}>
              <Notification index={e.id} removeComponent={removeComponent}>
                {e.message}
              </Notification>
            </div>
          );
        })}
      </div>
    </div>
  );
}
