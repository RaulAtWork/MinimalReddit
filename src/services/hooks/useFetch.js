import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelToken = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const result = await axios(endpoint, {
          cancelToken: cancelToken.token,
        });
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          //setError(`Request canceled: ${error.message}`);
        } else {
          setError(error);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelToken.cancel("Component unmounted");
    };
  }, [endpoint]);

  return { data, isLoading, error };
}

export default useFetch;
