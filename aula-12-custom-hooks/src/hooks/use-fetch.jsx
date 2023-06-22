import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
}

export default useFetch;
