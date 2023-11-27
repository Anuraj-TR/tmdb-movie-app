import { Link } from "react-router-dom";
import { HeaderNav } from "./components/nav/HeaderNav";

// styles
import "./header.scss";
import { useEffect, useState } from "react";

export const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`header-wrap ${headerActive ? "header--active" : ""}`}>
      <div className="content-wrapper">
        <div className="header">
          <div className="logo">
            <Link to={"/"}>
              <img src="" alt="" />
            </Link>
          </div>
          <HeaderNav />
        </div>
      </div>
    </div>
  );
};
