import React, { useQuery } from "react-query";

const fetchUser = async (userId) => {
  const response = await fetch(`/api/users/${userId}`);
  const user = await response.json();
  return user;
};

const User = ({ userId }) => {
  const { data: user, isLoading } = useQuery(["user", userId], fetchUser);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <div>{user.name}</div>;
  }
};
