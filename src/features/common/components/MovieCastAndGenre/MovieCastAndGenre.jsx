export const MovieCastAndGenre = ({ movieCast, movieData, movieGenre }) => {
  return (
    <>
      <div className="banner__desc">{movieData?.overview}</div>
      <div className="banner__details">
        {movieCast && movieCast.length >= 1 && (
          <div className="banner__text">
            <span className="banner__text--red">Staring</span>
            {movieCast?.slice(0, 5).map((person) => person.name + ", ")}
          </div>
        )}
        {movieGenre && (
          <div className="banner__text">
            <span className="banner__text--red">Tags</span>
            {movieGenre}
          </div>
        )}
      </div>
    </>
  );
};
