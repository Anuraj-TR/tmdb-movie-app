import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../../../utils/api";
import { useSetMovieDetails } from "./useSetMovieDetails";

export const useFetchMovieData = (id) => {
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState();

  const fetchMovie = useCallback(async () => {
    const response = await fetch(
      `${baseUrl}/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=credits`
    );
    const data = await response.json();
    if (data) {
      setMovieData(data);
      setLoading(false);
    } else {
      setMovieData(null);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  const { movieGenre, movieCast, movieReview } = useSetMovieDetails({
    movieData,
  });

  return { movieData, movieGenre, movieCast, movieReview, loading };
};
