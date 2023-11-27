import { useState, useEffect, useCallback } from "react";

import { fetchDataFromApi } from "../../../services/fetchDataFromApi";

export const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    fetchDataFromApi(url)
      .then(async (res) => {
        const result = await res.json();
        setData(result.results);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError("something went wrong");
        setData(null);
        setLoading(false);
        console.log(err);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
};
