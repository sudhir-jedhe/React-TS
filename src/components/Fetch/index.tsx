import React, { useState, useEffect } from "react";

function Fetch() {
  const [users, setUser] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    //1. setLaoding false
    //2. get data from api and put it in user state
    //3. if response ok then return json
    //4. if response reject then reject promise
    //5. if data success then setUser state setLoading false
    //6.
    setLoading(true);
    setError(undefined);
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject();
        }
      })
      .then((data) => setUser(data))
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
      <p>Users</p>
      {isLoading ? <div>Loding....</div> : <div>{JSON.stringify(users)}</div>}
    </div>
  );
}

export default Fetch;
