import { getFormattedDateFromSeconds } from "../../app/utils";

const REDDIT_ENDPOINT = {
  popular: "https://www.reddit.com/r/popular.json",
  hot: "https://www.reddit.com/hot.json",
  new: "https://www.reddit.com/new.json",
  rising: "https://www.reddit.com/rising.json",
  top: "https://www.reddit.com/top.json",
};

export const REDDIT_CATEGORY = {
  hot: "hot",
  new: "new",
  popular: "popular",
  rising: "rising",
  top: "top",
};

export function getRedditEndpointByCategory({ category }) {
  return REDDIT_ENDPOINT[category];
}

export function mapRedditPostList({ data }) {
  if (!data) return null;
  return data.data.children.map((post) => mapReddditPost(post));
}

function mapReddditPost(post) {
  return {
    id: post.data.id,
    title: post.data.title,
    createdBy: "u/" + post.data.author_fullname,
    category: "r/" + post.data.subreddit,
    time: getFormattedDateFromSeconds(post.data.created, "DD/MM/YYYY"),
    upvotes: post.data.ups,
    commentCount: post.data.num_comments,
  };
}
