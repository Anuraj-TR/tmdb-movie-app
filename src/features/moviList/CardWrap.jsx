import { useSelector } from "react-redux";
import { MovieCard } from "../movieCards/components/MovieCard";
// style
import "./all-movies.scss";

export const MoviesCardWrap = () => {
  const movies = useSelector((state) => state.cardList.data);
  return (
    <div className="movies-card-wrap">
      {movies?.map((item, index) => (
        <MovieCard key={index} movie={item} />
      ))}
    </div>
  );
};
