import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Lazy } from "swiper";

//import swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";

const CollectionLayout = ({ title, description, imgData }) => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-gray-700 text-3xl tracking-wide">
        {title}
      </h1>
      <h2 className="text-black font-normal text-base">{description}</h2>
      <section>
        <Swiper
          // install Swiper modules
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          lazy={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            enabled: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Lazy]}
          className="mySwiper"
        >
          {imgData.map(({ id, name, title, desc }) => (
            <SwiperSlide key={id} className="text-center">
              <img
                data-src={name}
                alt={id}
                className="h-[15rem] w-[15rem] rounded-lg swiper-lazy pb-2"
              />
              <div className="text-left space-y-2">
                <h2 className="text-lg font-bold text-black">{title}</h2>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>

              <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default CollectionLayout;
