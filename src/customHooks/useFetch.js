
import { useEffect, useState } from "react";
import { environment } from "./../constants";

export const useFetch = (endpoint, initialState = []) => {
  const [data, setData] = useState(initialState);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setFetching(true);
      const result = await fetch(`${environment.BASE_URL}/${endpoint}`, {
        method: "GET",
        headers: {
          Authorization: "",
        },
      });
      const data = await result.json();
      setData(data);
      setFetching(false);
    } catch (e) {
      setData(initialState);
      setFetching(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return [data, fetching, error];
};
