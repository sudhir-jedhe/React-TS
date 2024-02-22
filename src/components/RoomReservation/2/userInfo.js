import React from "react";
import { useRoomsContext } from "./useRoomsContext";

const UserInfo = () => {
  const { userData } = useRoomsContext();
  return (
    <div className="userInfo">
      <p>
        Hello, {userData.firstname} {userData.lastname}
      </p>
      <p>Available Credits {userData.credits} </p>
    </div>
  );
};

export default UserInfo;
