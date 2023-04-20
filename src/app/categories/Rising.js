import React from "react";
import { REDDIT_CATEGORY } from "../../services/RedditAPI/redditAPI";
import useRedditCategory from "../../services/RedditAPI/useRedditCategory";
import CardList from "../../components/CardList";

function Rising() {
  const { postList, isLoading } = useRedditCategory({
    category: REDDIT_CATEGORY.rising,
  });

  return (
    <div className="container">
      <h1>Der Rising</h1>

      <p>{isLoading && "Loading data..."}</p>

      <CardList list={postList} />
    </div>
  );
}

export default Rising;
