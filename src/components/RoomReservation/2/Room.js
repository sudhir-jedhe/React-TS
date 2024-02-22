import React from "react";
import { useRoomsContext } from "./useRoomsContext";

const Room = ({ id, cost, isReserved, roomNumber }) => {
  const { handleRoomClick, userData } = useRoomsContext();
  const hasCredits = userData.credits >= cost;
  const classNames = !hasCredits ? "red" : "" + isReserved ? "blue" : "green";

  return (
    <div
      className={`room ${!hasCredits ? "room-blocked" : ""}`}
      onClick={handleRoomClick}
      data-room-id={id}
    >
      <p>R{roomNumber}</p>
      <p>Cost {cost}</p>
      <p className={classNames}>
        {isReserved
          ? "Reserved"
          : !hasCredits
          ? "Not enough credits"
          : "Available"}
      </p>
    </div>
  );
};

export default Room;
