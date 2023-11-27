import { Link } from "react-router-dom";

// styles
import "./headerNav.scss";
import { SearchBar } from "./search/SearchBar";

export const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__links">
        <li>
          <Link to={"/all-movies/trending"}>trending</Link>
        </li>
        <li>
          <Link to={"/all-movies/trending"}>trending</Link>
        </li>
        <li>
          <Link to={"/all-movies/trending"}>trending</Link>
        </li>
        <li>
          <Link to={"/all-movies/trending"}>trending</Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
};
