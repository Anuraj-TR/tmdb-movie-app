import { useParams } from "react-router-dom";
import { MoviesCardWrap } from "../../features/moviList/CardWrap";
import { fetchDataFromApi } from "../../services/fetchDataFromApi";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentMovies } from "../../store/slices/homeCardListSlice/cardListSlice";

export const SearchResults = () => {
  const APIKEY = import.meta.env.VITE_API_KEY;
  const { query } = useParams();
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const setMovieData = useCallback(() => {
    fetchDataFromApi(
      `/search/multi?query=${query}&api_key=${APIKEY}&language=en-US&page=1?`
    ).then(async (res) => {
      const result = await res.json();
      setData(result?.results);
      data && dispatch(setCurrentMovies({ data: data }));
    });
  }, [query]);

  useEffect(() => {
    setMovieData();
  }, [setMovieData]);
  return (
    <>
      <div className="content-wrapper">{data && <MoviesCardWrap />}</div>
    </>
  );
};
