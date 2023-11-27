import { DynamicStar } from "react-dynamic-star";

export const MovieRating = ({ movieData, movieReview }) => {
  const SetTime = (runtime) => {
    let hour = parseInt(Math.floor(runtime / 60));
    let minuts = parseInt(runtime % 60);

    return hour + "hr:" + minuts + "mins";
  };
  return (
    <div className="banner__rating-wrap">
      <div className="banner__rating">
        <div className="banner__rating-stars">
          {movieReview && (
            <DynamicStar
              width={24}
              height={24}
              totalStars={5}
              fullStarColor={"#e50914"}
              outlined={true}
              rating={movieReview && movieReview}
            />
          )}
        </div>
        <div className="banner__rating-text">
          {movieReview && movieReview + " (imbd)"}
        </div>
      </div>
      {movieData?.production_countries && (
        <div className="banner__tag">
          {movieData?.production_countries[0]?.iso_3166_1}
        </div>
      )}
      <div className="banner__duration">
        {movieData?.runtime ? SetTime(movieData.runtime) : ""}
      </div>
    </div>
  );
};
