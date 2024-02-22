import React from "react";
import "./room.css";

const Circle = () => {
  return <div className="circle content" />;
};
const Room = ({
  id,
  roomNumber,
  cost,
  isReserved,
  userCredits,
  onRoomSelect,
  loadingUser,
}) => {
  const outOfCredits = cost > userCredits;
  return (
    <div
      className={`roomRoot ${loadingUser || outOfCredits ? " disabled" : ""}`}
      key={id}
      onClick={() => !loadingUser && onRoomSelect({ id, cost, isReserved })}
    >
      <Circle />
      <div className="roomGroupRoot">
        <Circle />
        <div className="roomContentRoot content">
          <span>R{roomNumber}</span>
          <span>Cost:{cost}</span>
          <span
            className={
              isReserved
                ? "reserved"
                : outOfCredits
                ? "outOfCredits"
                : "available"
            }
          >
            {isReserved
              ? "Reserved"
              : outOfCredits
              ? "Not enough credits"
              : "Available"}
          </span>
        </div>
        <Circle />
      </div>
      <Circle />
    </div>
  );
};

export default Room;
