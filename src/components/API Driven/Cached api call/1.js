const cachedApiCall = (time) => {
  // to cache data
  const cache = {};

  const generateKey = (path, config) => {
    const key = Object.keys(config)
      .sort((a, b) => a.localeCompare(b))
      .map((k) => k + ":" + config[k].toString())
      .join("&");
    return path + key;
  };
  // return a new function
  return async function (path, config = {}) {
    // get the key
    const key = generateKey(path, config);

    // get the value of the key
    let entry = cache[key];

    // if there is no cached data
    // or the value is expired
    // make a new API call
    if (!entry || Date.now() > entry.expiryTime) {
      console.log("making new api call");

      // store the new value in the cache
      try {
        const value = await makeApiCall(path, config);
        cache[key] = { value, expiryTime: Date.now() + time };
      } catch (e) {
        console.log(error);
      }
    }

    //return the cache
    return cache[key].value;
  };
};

const call = cachedApiCall(1500);

// first call
// an API call will be made and its response will be cached
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log(a)
);
//"making new api call"
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

// cached response will be returned
// it will be quick
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 700);
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

// a fresh API call is made
// as time for cached entry is expired
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 2000);
//"making new api call"
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/
