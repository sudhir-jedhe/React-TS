import React, { useMemo } from "react";

const fetchUser = async (userId) => {
  const response = await fetch(`/api/users/${userId}`);
  const user = await response.json();
  return user;
};

const User = ({ userId }) => {
  const user = useMemo(() => fetchUser(userId), [userId]);

  if (user) {
    return <div>{user.name}</div>;
  } else {
    return <div>Loading...</div>;
  }
};
