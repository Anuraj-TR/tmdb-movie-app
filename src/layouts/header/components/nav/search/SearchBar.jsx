// react icons
import { BsSearch } from "react-icons/bs";

// styles
import "./searchBox.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (query.length > 0) {
      setQuery("");
      setSearchbarActive(false);
      navigate(`/search-results/${query}`);
    } else {
      setSearchbarActive(!searchbarActive);
    }
  };
  return (
    <div
      className={`search-box ${searchbarActive ? "search-box--active" : ""}`}
    >
      <form>
        <input
          type="text"
          autoFocus={true}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={(e) => handleClick(e)}>
          <BsSearch color="#fff" width={30} height={30} />
        </button>
      </form>
    </div>
  );
};
