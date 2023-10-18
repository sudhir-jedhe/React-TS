import React, { useEffect, useState } from "react";

function UseEffectFetch() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        const json = await response.json();
        console.log(json);
        setPost(json);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const list = post.map((post) => {
    const { id, title, body } = post;
    return (
      <div>
        <li key={id}>
          <span>
            <h4>
              {id} {title}
            </h4>
          </span>
          {body}
        </li>
      </div>
    );
  });

  return <div>{<ul>{list}</ul>}</div>;
}
export default UseEffectFetch;
