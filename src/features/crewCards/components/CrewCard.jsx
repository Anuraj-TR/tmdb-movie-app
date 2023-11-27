// style
import { imgUrl } from "../../../utils/api";
import "./crew-card.scss";

export const CrewCard = ({ person }) => {
  return (
    <div
      className="crew-card"
      style={
        person.profile_path
          ? { backgroundImage: `url(${imgUrl + person.profile_path})` }
          : {
              backgroundImage: `url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png)`,
            }
      }
    >
      <div className="crew-card__cnt">
        <div className="crew-card__name">
          {person.name || person.original_name}
        </div>
        {person.character && (
          <div className="crew-card__role">{"as " + person.character}</div>
        )}
      </div>
    </div>
  );
};
