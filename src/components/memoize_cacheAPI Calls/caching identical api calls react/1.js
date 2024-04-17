const memoizePromiseFn = (fn) => {
    const cache = new Map(); 

    return (...args) => {
        const key = JSON.stringify(args);
    
        if (cache.has(key)) {
            return cache.get(key);
        }

        cache.set(key, fn(...args).catch((error) => {
            // Delete cache entry if API call fails
            cache.delete(key);
            return Promise.reject(error);
        }));

        return cache.get(key);
    };
};

The input for this function will be our service function that makes the API call to server and returns the result. For example,


function fetchTodo(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((json) => json);
}

We can cache calls to the above function with id parameter as key using our promiseMemoize function. So if the fetchTodo function is called with the same id second time, response will be served from the cache without a roundtrip to the server. In case of an API call failure, the cached value will be cleared for the particular key.



async function getTodos() {
  
  // Here the higer order function is called
  let cachedFetchTodos = memoizePromiseFn(fetchTodo);

  let response1 = await cachedFetchTodos(1); // Call to server with id 1
  let response2 = await cachedFetchTodos(2); // Call to server with id 2
  let response3 = await cachedFetchTodos(1); // id is 1, will be served from cache
  let response4 = await cachedFetchTodos(3); // Call to server with id 3
  let response5 = await cachedFetchTodos(2); // id is 2, will be served from cache
  
  // Total number of calls - 3  
}

getTodos();




















import "./styles.css";

// import memoizePromiseFn from "memoize-promise-fn";
import memoizePromiseFn from "./lib";

const productIdEl = document.getElementById("productId");
const dataEl = document.getElementById("data");

const incrementBtn = document.getElementById("increment");

const decrementBtn = document.getElementById("decrement");

function fetchTodo(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}

let cachedFetchTodos = memoizePromiseFn(fetchTodo);

let currentId = 1;

function getTodoById(id) {
  currentId = id;
  dataEl.innerText = "Loading...";
  productIdEl.innerText = id;
  cachedFetchTodos(id)
    .then((response) => {
      dataEl.innerText = JSON.stringify(response, 2, null);
    })
    .catch((error) => {
      dataEl.innerText = "ERROR" + JSON.stringify(error);
    });
}

incrementBtn.addEventListener("click", () => {
  getTodoById(currentId + 1);
});

decrementBtn.addEventListener("click", () => {
  getTodoById(currentId - 1);
});

getTodoById(1);

// async function getTodos() {
//   let cachedFetchTodos = memoizePromiseFn(fetchTodo);

//   let response1 = await cachedFetchTodos(1); // Call to server with id 1
//   let response2 = await cachedFetchTodos(2); // Call to server with id 2
//   let response3 = await cachedFetchTodos(1); // Id is 1, will be served from cache
//   let response4 = await cachedFetchTodos(3); // Call to server with id 3
//   let response5 = await cachedFetchTodos(2); // Id is 2, will be served from cache}
// }
// getTodos();

