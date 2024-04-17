const cache = {};

const fetchUser = async (userId) => {
  if (cache[userId]) {
    return cache[userId];
  }

  const response = await fetch(`/api/users/${userId}`);
  const user = await response.json();

  cache[userId] = user;
  return user;
};

const User = ({ userId }) => {
  const user = fetchUser(userId);

  if (user) {
    return <div>{user.name}</div>;
  } else {
    return <div>Loading...</div>;
  }
};
