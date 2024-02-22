import React from "react";
import Rooms from "./Rooms";
import UserInfo from "./UserInfo";
import { RoomsContext } from "./useRoomsContext";
import { fetchUserDetails, fetchRoomsDetails } from "./utils.js";

export default function App() {
  const [userData, setUserData] = React.useState({});
  const [roomsData, setRoomsData] = React.useState([]);

  const getUserData = async () => {
    const userData = await fetchUserDetails();
    setUserData(userData);
  };
  const getRoomsData = async () => {
    const roomsData = await fetchRoomsDetails();
    setRoomsData(roomsData);
  };

  const handleRoomClick = (e) => {
    const id = e.currentTarget.getAttribute("data-room-id");
    const selectedRoom = roomsData.find((room) => room.id === id);
    if (selectedRoom.isReserved) {
      //unreserve the room;
      setRoomsData((prev) => {
        return prev.map((prevRoom) => {
          if (prevRoom.id === id) {
            return {
              ...prevRoom,
              isReserved: false,
            };
          } else {
            return prevRoom;
          }
        });
      });
      //update credit;
      setUserData((userData) => {
        return {
          ...userData,
          credits: userData.credits + selectedRoom.cost,
        };
      });
    } else {
      // reserve room
      const newRoomsData = roomsData.map((prevRoom) => {
        if (prevRoom.id === id) {
          return {
            ...prevRoom,
            isReserved: true,
          };
        } else {
          return prevRoom;
        }
      });
      setRoomsData(newRoomsData);
      // update credit
      setUserData((userData) => {
        return {
          ...userData,
          credits: userData.credits - selectedRoom.cost,
        };
      });
    }
  };

  React.useEffect(() => {
    getUserData();
    getRoomsData();
  }, []);
  const value = {
    userData,
    roomsData,
    handleRoomClick,
  };
  return (
    <RoomsContext.Provider value={value}>
      <h2>Book a Room!</h2>
      <div className="wrapper">
        <Rooms />
        <UserInfo />
      </div>
    </RoomsContext.Provider>
  );
}
