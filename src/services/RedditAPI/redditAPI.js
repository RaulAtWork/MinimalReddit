import { getFormattedDateFromSeconds } from "../../app/utils";

const REDDIT_BASE = "https://www.reddit.com";
const REDDIT_ENDPOINT = {
  popular: REDDIT_BASE + "/r/popular.json",
  hot: REDDIT_BASE + "/hot.json",
  new: REDDIT_BASE + "/new.json",
  rising: REDDIT_BASE + "/rising.json",
  top: REDDIT_BASE + "/top.json",
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
  function mapRedditPostMedia(post) {
    /*image -> url
      link -> url
      hosted:video -> media -> media_video -> fallback_url
    */
    const media = {
      image: null,
      link: null,
      video: null,
    };

    switch (post.data.post_hint) {
      case "image":
        media.image = post.data.url;
        break;
      case "link":
        media.link = post.data.url;
        break;
      case "hosted:video":
        if (post.data.media.reddit_video) {
          media.video = post.data.media.reddit_video.fallback_url;
        } else if (post.data.media.media_video)
          media.video = post.data.media.media_video.fallback_url;
        break;
    }
    return media;
  }

  function mapRedditPostAddress(post) {
    //https://www.reddit.com/<permalink>
    return REDDIT_BASE + post.data.permalink;
  }

  return {
    id: post.data.id,
    title: post.data.title,
    createdBy: "u/" + post.data.author_fullname,
    category: "r/" + post.data.subreddit,
    time: getFormattedDateFromSeconds(post.data.created, "DD/MM/YYYY"),
    upvotes: post.data.ups,
    commentCount: post.data.num_comments,
    media: mapRedditPostMedia(post),
    address: mapRedditPostAddress(post),
  };
}
