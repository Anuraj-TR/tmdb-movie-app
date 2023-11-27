// lib
import { useParams } from "react-router-dom";

// style
import "./movie-detail.scss";

// componets
import { useNavigate } from "react-router-dom";
import { Featured } from "../../features/featuredBlock/components/Featured";
import { useFetchMovieData } from "../../features/common/hooks/useFetchMovieData";
import { CardList, CrewCards } from "../../features";

// redux
import { getCurrrentMovie } from "../../store/slices/moviDetails/movieDetailSlice";
import { useDispatch } from "react-redux";

export const MovieDetail = () => {
  const dispatch = useDispatch();
  const APIKEY = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const navigate = useNavigate();

  const { movieData, movieGenre, movieCast, movieReview } =
    useFetchMovieData(id);

  const handleClick = () => {
    dispatch(
      getCurrrentMovie({
        data: movieData,
        url: movieData.backdrop_path,
        cast: movieCast,
      })
    );
    navigate("fullcast");
  };

  return (
    <div className="movie-detail">
      <Featured
        movieData={movieData}
        movieGenre={movieGenre}
        movieCast={movieCast}
        movieReview={movieReview}
        movieId={id}
        button={false}
      />

      <div className="content-wrapper">
        <div className="card__link-wrap">
          <div className="card-list__title">Cast</div>
          <button className="card__link" onClick={handleClick}>
            View All
          </button>
        </div>

        <CrewCards movieCast={movieCast} />
      </div>
      <CardList
        title="You might also like"
        url={`/movie/${id}/recommendations?api_key=${APIKEY}`}
      />
    </div>
  );
};
