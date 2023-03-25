import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images";
import { FiChevronLeft, FiChevronRight, FiLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Lazy } from "swiper";
import "swiper/css";
SwiperCore.use([Navigation]);
const Shuffle = () => {
  const spaceIcon = [
    {
      id: 1,
      img: <img src={Images.beach_icon} alt="" className="w-[30px] h-[30px]" />,
      url: "",
    },
    {
      id: 2,
      img: (
        <img src={Images.mountain_icon} alt="" className="w-[30px] h-[30px]" />
      ),
      url: "",
    },
    {
      id: 3,
      img: <img src={Images.cf_icon} alt="" className="w-[30px] h-[30px]" />,
      url: "",
    },
    {
      id: 4,
      img: <img src={Images.city_icon} alt="" className="w-[30px] h-[30px]" />,
      url: "",
    },
    {
      id: 5,
      img: (
        <img
          src={Images.crystalball_icon}
          alt=""
          className="w-[30px] h-[30px]"
        />
      ),
      url: "",
    },
    {
      id: 6,
      img: <img src={Images.art} alt="" className="w-[30px] h-[30px]" />,
      url: "",
    },
    {
      id: 7,
      img: <img src={Images.galaxy} alt="" className="w-[30px] h-[30px]" />,
      url: "",
    },
    {
      id: 8,
      img: <img src={Images.pet} alt="" className="w-[30px] h-[30px]" />,
      url: "",
    },
    {
      id: 9,
      img: <img src={Images.snow} alt="" className="w-[30px] h-[30px]" />,
      url: "",
    },
    {
      id: 10,
      img: <img src={Images.mac} alt="" className="w-[30px] h-[30px]" />,
      url: "",
    },
  ];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <div>
        <Swiper
          className="mySwiper"
          breakpoints={{
            300: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 4.5,
              slidesPerGroup: 4,
              slidesPerColumn: 2,
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          spaceBetween={10}
        >
          {spaceIcon.map(({ id, img, url }) => (
            <SwiperSlide key={id} className="text-center">
              <Link to={url}>
                <div className="border-[1px] glass_item flex justify-center items-center rounded-md p-3">
                  {img}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-xs font-medium text-gray-400 py-2">
        Click an emoji multiple times for more content
      </p>
      <div className="Control mt-3 flex justify-between">
        <div>
          <h1 className="text-xl text-thDark font-medium">Shuffle Spaces</h1>
        </div>
        <div className="btn_area flex">
          <div className="cursor-pointer" ref={navigationPrevRef}>
            <FiChevronLeft className="text-thDark" size={25} />
          </div>
          <div className="cursor-pointer text-thDark" ref={navigationNextRef}>
            <FiChevronRight size={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shuffle;
