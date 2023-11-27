// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { Navigation, Mousewheel } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useRef } from "react";

import { CrewCard } from "./components/CrewCard";

export const CrewCards = ({ movieCast }) => {
  const swiperRefCast = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRefCast.current, params);

    // initialize swiper
    swiperRefCast.current.initialize();
  }, []);
  return (
    <div className="crew-card_wrap">
      <swiper-container
        ref={swiperRefCast}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        modules={[Navigation, Mousewheel]}
        className="mySwiper"
      >
        {movieCast &&
          movieCast.length > 1 &&
          movieCast?.map((person, index) => {
            return (
              <swiper-slide key={index}>
                <CrewCard person={person} />
              </swiper-slide>
            );
          })}
      </swiper-container>
    </div>
  );
};
