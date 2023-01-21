import React from "react";
import Images from "../assets/images";
//import swiper lib
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper css
import "swiper/css";
import "swiper/css/autoplay";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
const slideItems = [
  {
    id: 1,
    name: Images.ig0,
  },
  {
    id: 2,
    name: Images.ig1,
  },
  {
    id: 3,
    name: Images.ig2,
  },
  {
    id: 4,
    name: Images.ig3,
  },
  {
    id: 5,
    name: Images.ig4,
  },
  {
    id: 6,
    name: Images.ig5,
  },
];
const Slide = () => {
  return (
    <div>
      <Swiper
        className="mySwiper flex"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={3}
        slidesPerView={4}
        speed={10000}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
      >
        {slideItems.map(({ id, name }) => (
          <SwiperSlide key={id} className="text-center pl-7 ">
            <img
              src={name}
              alt={id}
              className="h-[25rem] w-[25rem] rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
