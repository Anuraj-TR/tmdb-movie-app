import { useNavigate } from "react-router-dom";
// lib
import { GrOverview } from "react-icons/gr";
// style
import "./button.scss";
export const Button = ({ url }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie-detail/${url}`);
  };
  return (
    <button className="btn" onClick={handleClick}>
      <div className="btn__logo">
        <GrOverview />
      </div>
      <div className="btn__text">View Detail</div>
    </button>
  );
};
