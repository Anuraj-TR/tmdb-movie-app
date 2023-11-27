import { useFetch } from "../common/hooks/useFetch";
import { useFetchMovieData } from "../common/hooks/useFetchMovieData";
import { Featured } from "./components/Featured";

export const FeaturedBlock = ({ url }) => {
  const featuredMovies = useFetch({ url }).data;
  const featuredMovie =
    featuredMovies && featuredMovies[Math.floor(Math.random() * 10)];

  const { movieData, movieGenre, movieCast, movieReview, loading } =
    useFetchMovieData(featuredMovie?.id);

  if (loading) {
    return (
      <div className="banner">
        <div className="banner__loader">
          <span className="loader"></span>
        </div>
      </div>
    );
  }
  return (
    <>
      {featuredMovie && (
        <Featured
          movieData={movieData}
          movieGenre={movieGenre}
          movieCast={movieCast}
          movieReview={movieReview}
          movieId={featuredMovie?.id}
        />
      )}
    </>
  );
};
