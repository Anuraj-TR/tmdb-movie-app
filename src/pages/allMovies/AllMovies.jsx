import { useSelector } from "react-redux";
import { MoviesCardWrap } from "../../features/moviList/CardWrap";

export const AllMovies = () => {
  const movieType = useSelector((state) => state.cardList.title);
  return (
    <>
      <div
        className="pg-banner"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-vector/film-strip-background-with-clapper-board_1017-33456.jpg?w=1380&t=st=1682677321~exp=1682677921~hmac=0a6380f06373bf1dee18bbaf6107ecb16965620dd6a00d0bbd65f41ff211b505)`,
        }}
      >
        <div className="pg-banner__cnt">
          <div className="pg-banner__text">{movieType}</div>
        </div>
      </div>
      <div className="content-wrapper">
        <MoviesCardWrap />
      </div>
    </>
  );
};
