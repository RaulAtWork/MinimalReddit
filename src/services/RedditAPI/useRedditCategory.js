import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getRedditEndpointByCategory, mapRedditPostList } from "./redditAPI";

function useRedditCategory({ category }) {
  const [postList, setPostList] = useState(null);
  const { data, isLoading, error } = useFetch(
    getRedditEndpointByCategory({ category })
  );

  useEffect(() => {
    setPostList(mapRedditPostList({ data }));
  }, [data]);

  return { postList, isLoading, error };
}

export default useRedditCategory;
