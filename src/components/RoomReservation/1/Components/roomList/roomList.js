import React from "react";
import Room from "../room/room";
import "./roomList.css";

const RoomList = ({ rooms, user, onRoomSelect, loading, loadingUser }) => {
  if (loading) {
    return <div className="roomListRoot">Fetching room details...</div>;
  }
  return (
    <div className="roomListRoot">
      {rooms.map((room) => (
        <Room
          {...room}
          userCredits={user.credits}
          key={room.id}
          onRoomSelect={onRoomSelect}
          loadingUser={loadingUser}
        />
      ))}
    </div>
  );
};

export default RoomList;
