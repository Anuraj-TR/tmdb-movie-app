// react icons
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
// style
import "./card.scss";
// components
import { Button } from "../../common";

import { imgUrl } from "../../../utils/api";

// import { useFetchMovie } from "../../../hooks/FetchMovieData";

import { DynamicStar } from "react-dynamic-star";
import { useSetMovieDetails } from "../../common/hooks/useSetMovieDetails";

export const MovieCard = ({ movie }) => {
  const movieData = movie;
  const { movieReview } = useSetMovieDetails({ movieData });

  // const SetTime = (runtime) => {
  //   let hour = parseInt(Math.floor(runtime / 60));
  //   let minuts = parseInt(runtime % 60);

  //   return hour + "hr:" + minuts + "mins";
  // };

  if (!movie) {
    return (
      <div className="card--loading">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${imgUrl + movie.backdrop_path})` }}
    >
      <div className="card__cnt">
        <div className="card__left">
          <div className="card__title">
            {movie.title ||
              movie.original_title ||
              movie.name ||
              movie.original_name}
          </div>
          <div>
            {/* <div className="card__duration">
              {movie?.runtime ? SetTime(movie.runtime) : "not available"}
            </div> */}
            <div className="card__review">
              {movieReview ? (
                <DynamicStar
                  width={16}
                  height={16}
                  totalStars={5}
                  fullStarColor={"#e50914"}
                  outlined={true}
                  rating={movieReview && movieReview}
                />
              ) : (
                "Not reviewed"
              )}
            </div>
          </div>
          <Button url={movie.id} />
        </div>
        <div className="card__right">
          <ul className="card__cta-wrap">
            <li className="card__cta">
              <div className="card__cta_logo">
                <FaShareAlt />
              </div>
              <div className="card__share-wrap">
                <div className="card__share-icon">
                  <FaFacebookF />
                </div>
                <div className="card__share-icon">
                  <AiOutlineTwitter />
                </div>
                <div className="card__share-icon">
                  <RiWhatsappFill />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
