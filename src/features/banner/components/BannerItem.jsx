// style
import "./banner-item.scss";
// components
import { Button, MovieOverView } from "../../common/index";
import { imgUrl } from "../../../utils/api";
import { BannerItemLoader } from "./BannerItemLoader";
// customhooks
import { useFetchMovieData } from "../../common/hooks/useFetchMovieData";

export const BannerItem = ({ banneritem }) => {
  const { movieData, movieGenre, movieCast, movieReview, loading } =
    useFetchMovieData(banneritem.id);

  if (loading) {
    return <BannerItemLoader />;
  }

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${imgUrl + banneritem.backdrop_path})` }}
    >
      <div className="content-wrapper">
        <div className="banner-wrap">
          <MovieOverView
            movieData={movieData}
            movieCast={movieCast}
            movieGenre={movieGenre}
            movieReview={movieReview}
          />
          <div className="banner__btn-wrap">
            <Button movie={movieData} url={banneritem.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
