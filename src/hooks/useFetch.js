import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelToken;
    const fetchData = async () => {
      setLoading(true);
      try {
        cancelToken = axios.CancelToken.source();
        const response = await axios.get(url, { cancelToken: cancelToken.token });
        setData(response.data);
        setError(null);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      if (cancelToken) {
        cancelToken.cancel('Operation canceled by the user.');
      }
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
