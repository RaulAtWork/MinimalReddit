import React from "react";
import useRedditCategory from "../../services/RedditAPI/useRedditCategory";
import { REDDIT_CATEGORY } from "../../services/RedditAPI/redditAPI";
import CardList from "../../components/CardList";

function Popular() {
  const { postList, isLoading } = useRedditCategory({
    category: REDDIT_CATEGORY.popular,
  });

  return (
    <div className="container">
      <h1>The popular ones</h1>

      <p>{isLoading && "Loading data..."}</p>

      <CardList list={postList} />
    </div>
  );
}

export default Popular;
