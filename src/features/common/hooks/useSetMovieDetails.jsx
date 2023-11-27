export const useSetMovieDetails = ({ movieData }) => {
  const movieGenre =
    movieData && movieData.genres
      ? movieData.genres.map((genre) => genre.name + ", ")
      : false;

  const movieCast =
    movieData && movieData.credits ? movieData.credits.cast : false;

  const movieReview =
    movieData && movieData.vote_average
      ? Math.floor((movieData.vote_average / 2) * 10) / 10
      : false;

  return { movieGenre, movieCast, movieReview };
};
