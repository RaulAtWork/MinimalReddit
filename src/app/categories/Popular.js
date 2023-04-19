import React from "react";
import useFetch from "../../services/hooks/useFetch";

const REDDIT_ENDPOINT = "https://www.reddit.com/r/popular.json";

function Popular() {
  const { data, isLoading, error } = useFetch(REDDIT_ENDPOINT);

  console.log(isLoading, data && data.data.children);
  if (data) {
    data.data.children.map((item) => {
      console.log(item.data.title);
    });
  }

  return (
    <div className="container">
      <h1>The popular ones</h1>

      <p>{isLoading && "Loading data..."}</p>
      <p>
        {data &&
          data.data.children.map((item) => (
            <p key={item.data.name}> {item.data.title}</p>
          ))}
      </p>

      <p>{error}</p>
    </div>
  );
}

export default Popular;
