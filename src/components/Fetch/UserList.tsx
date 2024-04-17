import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users/", {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject();
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        console.log(e.error);
        if (e?.name === "AbortError") return;
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1 className="text-center">User List</h1>
      <br />
      <ul>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          users?.map((user) => {
            return (
              <React.Fragment key={user?.id}>
                <p>Hello</p>
                <li>user.name</li>
              </React.Fragment>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default UserList;
