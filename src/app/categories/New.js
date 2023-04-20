import React from "react";
import useRedditCategory from "../../services/RedditAPI/useRedditCategory";
import { REDDIT_CATEGORY } from "../../services/RedditAPI/redditAPI";
import CardList from "../../components/CardList";

function New() {
  const { postList, isLoading } = useRedditCategory({
    category: REDDIT_CATEGORY.new,
  });

  return (
    <div className="container">
      <h1>The NEW ones</h1>

      <p>{isLoading && "Loading data..."}</p>

      <CardList list={postList} />
    </div>
  );
}

export default New;
