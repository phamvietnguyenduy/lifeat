import React from "react";
import Genres from "./Genres";
import Images from "../../assets/images";
const Explore = () => {
  return (
    <>
      <nav className="fixed w-full bg-white h-14 text-gray-700 z-30 top-20">
        <div className="flex flex-row justify-between items-center mx-auto px-6 h-full">
          <Genres />
        </div>
      </nav>
      <section aria-label="content" className="relative top-48 mb-56 px-28">
        <section
          aria-label="banners"
          className="flex flex-row justify-start items-start w-full gap-2"
        >
          <div className="basis-1/3">
            <h1 className="font-semibold text-lg tracking-wide pb-3">Now</h1>
            <img
              className="w-full h-[22.5rem] rounded-lg"
              src={Images.ig0}
              alt="now_banner"
            />
          </div>
          <div className="basis-2/3">
            <h1 className="font-semibold text-lg tracking-wide pb-3">
              Trending
            </h1>
            <div className="grid grid-rows-2 grid-flow-col gap-2">
              <img
                className="w-full h-44 rounded-lg"
                src={Images.ig0}
                alt="now_banner"
              />
              <img
                className="w-full h-44 rounded-lg"
                src={Images.ig0}
                alt="now_banner"
              />
              <img
                className="w-full h-44 rounded-lg"
                src={Images.ig0}
                alt="now_banner"
              />
              <img
                className="w-full h-44 rounded-lg"
                src={Images.ig0}
                alt="now_banner"
              />
            </div>
          </div>
        </section>
        <section>Test content</section>
      </section>
    </>
  );
};

export default Explore;
