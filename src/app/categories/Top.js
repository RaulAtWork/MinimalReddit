import React from "react";
import { REDDIT_CATEGORY } from "../../services/RedditAPI/redditAPI";
import CardList from "../../components/CardList";
import useRedditCategory from "../../services/RedditAPI/useRedditCategory";

function Top() {
  const { postList, isLoading } = useRedditCategory({
    category: REDDIT_CATEGORY.top,
  });

  return (
    <div className="container">
      <h1>Top 10</h1>

      <p>{isLoading && "Loading data..."}</p>

      <CardList list={postList} />
    </div>
  );
}

export default Top;
