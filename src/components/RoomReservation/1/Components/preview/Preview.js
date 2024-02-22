import React, { Fragment } from "react";
import "./preview.css";

const Preview = ({ user, rooms, handleUnreserveAllRoom, loading }) => {
  if (loading) {
    return <div className="previewRoot">Fetching user details...</div>;
  }
  return (
    <div className="previewRoot">
      <div>Hello, {`${user.firstname} ${user.lastname}`}</div>
      <div>Available credits: {user.credits}</div>
      <hr />
      {rooms.some((room) => room.isReserved) ? (
        <Fragment>
          <h4>Reserved rooms</h4>
          <table style={{ border: "1px solid gray" }}>
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Room Cost</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => {
                if (room.isReserved) {
                  return (
                    <tr key={room.id}>
                      <td>{room.roomNumber}</td>
                      <td>{room.cost}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          <hr />
          <button onClick={handleUnreserveAllRoom}>Free all rooms</button>
        </Fragment>
      ) : (
        <h4>Reserved rooms will show here</h4>
      )}
    </div>
  );
};

export default Preview;
