// lib
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
// components
import { BannerItem } from "./components/BannerItem";
import { BannerLoader } from "./BannerLoader";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useFetch } from "../common/hooks/useFetch";
// import { FetchRequest } from "../../utils/api";

export const Banner = (url) => {
  const { data, error, loading } = useFetch(url);
  if (loading) {
    return <BannerLoader />;
  }

  return (
    <>
      {!error ? (
        <div>
          <swiper-container
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={false}
            modules={[Navigation, Pagination, Mousewheel]}
            className="mySwiper"
          >
            {data?.map((item, index) => {
              return (
                <swiper-slide key={index}>
                  <BannerItem banneritem={item} />
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
      ) : (
        <div className="">{error}</div>
      )}
    </>
  );
};
