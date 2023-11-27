// import { MovieCastAndGenre, MovieRating } from "./";
import { MovieCastAndGenre } from "../MovieCastAndGenre/MovieCastAndGenre";
import { MovieRating } from "../MovieReview/MovieRating";

export const MovieOverView = ({
  movieData,
  movieReview,
  movieCast,
  movieGenre,
}) => {
  return (
    <>
      <div className="banner__title">
        {movieData?.title ||
          movieData?.original_title ||
          movieData?.name ||
          movieData?.original_name}
      </div>
      <MovieRating movieData={movieData} movieReview={movieReview} />
      <MovieCastAndGenre
        movieCast={movieCast}
        movieGenre={movieGenre}
        movieData={movieData}
      />
    </>
  );
};
