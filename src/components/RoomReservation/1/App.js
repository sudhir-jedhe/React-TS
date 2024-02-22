import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Preview from "./components/preview/preview";
import RoomList from "./components/roomList/roomList";
import "./style.css";
import { fetchRoomsDetails, fetchUserDetails } from "./utils";

export default function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState({});
  const [fetchingRoom, setFetchingRoom] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(false);

  useEffect(() => {
    setFetchingRoom(true);
    setFetchingUser(true);
    fetchRoomsDetails().then((rooms) => {
      setRooms(rooms);
      setFetchingRoom(false);
    });
    fetchUserDetails().then((user) => {
      setUser(user);
      setFetchingUser(false);
    });
  }, []);

  const handleRoomSelect = (room) => {
    const { id, cost, isReserved } = room;
    if (user.credits < cost && !isReserved) return;
    setRooms((prevRooms) => [
      ...prevRooms.map((roomData) => {
        if (roomData.id === id) {
          roomData.isReserved = !isReserved;
        }
        return roomData;
      }),
    ]);
    setUser((prevUser) => ({
      ...prevUser,
      credits: prevUser.credits + cost * (!isReserved ? -1 : 1),
    }));
  };

  const handleUnreserveAllRoom = () => {
    let updateCredits = 0;
    setRooms((prevRooms) => [
      ...prevRooms.map((room) => {
        if (room.isReserved) {
          room.isReserved = false;
          updateCredits += room.cost;
        }
        return room;
      }),
    ]);
    setUser((prevUser) => ({
      ...prevUser,
      credits: prevUser.credits + updateCredits,
    }));
  };

  return (
    <div className="App">
      <Header title="Reserve your room now!" />
      <div className="contentRoot">
        <RoomList
          rooms={rooms}
          user={user}
          onRoomSelect={handleRoomSelect}
          loading={fetchingRoom}
          loadingUser={fetchingUser}
        />
        <Preview
          user={user}
          rooms={rooms}
          handleUnreserveAllRoom={handleUnreserveAllRoom}
          loading={fetchingUser}
        />
      </div>
    </div>
  );
}
