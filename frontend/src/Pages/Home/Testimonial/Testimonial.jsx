import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Testimonial.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Review from "./Reviews";

const reviews = [2,1,4,6,7,8]

const Testimonial = () => {
    return (
        <>
        <h1 className="section-title center">Testimonials</h1>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {
            reviews?.map(review => <SwiperSlide><Review/></SwiperSlide>)
          }
        </Swiper>
      </>
    );
};

export default Testimonial;
