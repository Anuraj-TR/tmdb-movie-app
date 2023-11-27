// lib
import { useNavigate } from "react-router-dom";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { Navigation, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// style
import "./card-list.scss";

// custom hook
import { useFetch } from "../common/hooks/useFetch";

// componetnts
import { MovieCard } from "./components/MovieCard";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

// redux
import { setCurrentMovies } from "../../store/slices/homeCardListSlice/cardListSlice";

export const CardList = ({ url, title }) => {
  const dispatch = useDispatch();
  const { data } = useFetch({ url });
  const swiperRef = useRef(null);
  const linkText = title.replace(/\s/g, "").toLowerCase();
  //   const { dispatch } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 3,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  const handleClick = () => {
    dispatch(setCurrentMovies({ data: data, title: title }));
    navigate(`/all-movies/${linkText}`);
  };
  return (
    <div className="card-list-wrap">
      <div className="content-wrapper">
        <div className="card-list">
          <div className="card__link-wrap">
            <div className="card-list__title">{title}</div>
            <button className="card__link" onClick={handleClick}>
              All movies
            </button>
          </div>
          <div className="card-wrapper">
            <swiper-container
              ref={swiperRef}
              cssMode={true}
              navigation={true}
              mousewheel={true}
              modules={[Navigation, Mousewheel]}
              className="mySwiper"
            >
              {data?.map((item, i) => {
                return (
                  <swiper-slide key={i}>
                    <MovieCard movie={item} />
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </div>
        </div>
      </div>
    </div>
  );
};
