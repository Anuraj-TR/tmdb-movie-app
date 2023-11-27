// components
import { imgUrl } from "../../../utils/api";
import { Button, MovieOverView } from "../../common";
// style
import "./featured.scss";

export const Featured = ({
  movieData,
  movieGenre,
  movieCast,
  movieReview,
  movieId,
  button = true,
}) => {
  return (
    <div
      className="banner featured"
      style={{
        backgroundImage: `url(${imgUrl + movieData?.backdrop_path})`,
      }}
    >
      <div className="content-wrapper">
        <div className="banner-wrap">
          <div className="featured__left">
            <MovieOverView
              movieData={movieData}
              movieCast={movieCast}
              movieGenre={movieGenre}
              movieReview={movieReview}
            />
            {button && (
              <div className="banner__btn-wrap">
                <Button url={movieId} />
              </div>
            )}
          </div>
          <div className="featured__right">
            <div className="featured__img-wrap">
              <img src={`${imgUrl + movieData?.backdrop_path}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
