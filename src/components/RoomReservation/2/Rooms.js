import React from "react";
import { useRoomsContext } from "./useRoomsContext";
import Room from "./Room";

const Rooms = () => {
  const { roomsData } = useRoomsContext();
  return (
    <div className="rooms">
      {roomsData.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </div>
  );
};

export default Rooms;
