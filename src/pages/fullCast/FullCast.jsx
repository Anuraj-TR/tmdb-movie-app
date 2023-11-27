// componets
import { useSelector } from "react-redux";
import { CrewCard } from "../../features/crewCards/components/CrewCard";
import "./fullcast.scss";

import { imgUrl } from "../../utils/api";

export const FullCast = () => {
  const { data, cast, url } = useSelector((state) => state.movieDetail);

  return (
    <div className="fullcast">
      <div
        className="fullcast__banner"
        style={{
          backgroundImage: `url(${imgUrl + url})`,
        }}
      >
        <span>
          {data?.title ||
            data?.original_title ||
            data?.name ||
            data?.original_name}
        </span>
      </div>
      <div className="content-wrapper">
        <div className="fullcast__header">
          <div className="fullcast__title">Full Cast</div>
        </div>
        <div className="crew-card_wrap">
          {cast?.map((cast, index) => {
            return <CrewCard key={index} person={cast} />;
          })}
        </div>
      </div>
    </div>
  );
};
