import React from "react";
//Components

import CollectionLayout from "./CollectionLayout";
import Images from "../../assets/images";
import Slide from "../../components/Slide";
import Genres from "../../components/Genres";
const slideItems = [
  {
    id: 1,
    name: Images.ig0,
    title: "Quá đẹp trai",
    desc: "Đẹp trai nhất",
  },
  {
    id: 2,
    name: Images.ig1,
    title: "Quá đẹp trai",
    desc: "Đẹp trai nhất",
  },
  {
    id: 3,
    name: Images.ig2,
    title: "Quá đẹp trai",
    desc: "Đẹp trai nhất",
  },
  {
    id: 4,
    name: Images.ig3,
    title: "Quá đẹp trai",
    desc: "Đẹp trai nhất",
  },
  {
    id: 5,
    name: Images.ig4,
    title: "Quá đẹp trai",
    desc: "Đẹp trai nhất",
  },
  {
    id: 6,
    name: Images.ig5,
    title: "Quá đẹp trai",
    desc: "Đẹp trai nhất",
  },
];
const dataSet = [
  {
    title: "New Spaces",
    description: "Try out some of the new spaces we just added",
    img: slideItems,
  },
  {
    title: "Community Favs",
    description: "Hand picked by the LifeAt community weekly.",
    img: slideItems,
  },
];
const Explore = () => {
  return (
    <>
      <nav className="fixed w-full bg-white h-14 text-gray-700 z-30 top-20">
        <div className="flex flex-row justify-between items-center mx-auto px-6 h-full">
          <Genres />
        </div>
      </nav>
      <section
        aria-label="content"
        className="relative top-48 mb-56  space-y-28"
      >
        <main className="lg:px-28 px-5 lg:space-y-28 space-y-8">
          <section
            aria-label="banners"
            className="lg:flex lg:flex-row lg:justify-start lg:items-start w-full gap-2 lg:space-y-0 space-y-8"
          >
            <div className="basis-1/3">
              <h1 className="font-semibold text-lg lg:tracking-wide tracking-tight pb-3 lg:text-left text-center">
                Now
              </h1>
              <img
                className="w-full h-[22.5rem] rounded-lg"
                src={Images.ig0}
                alt="now_banner"
              />
            </div>
            <div className="basis-2/3">
              <h1 className="font-semibold lg:text-left text-center lg:tracking-wide tracking-tight pb-3">
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
          <section className="space-y-28">
            {dataSet.map((data, index) => (
              <CollectionLayout
                key={index}
                title={data.title}
                description={data.description}
                imgData={data.img}
              />
            ))}
          </section>
        </main>
        <section className="pb-40">
          <Slide />
        </section>
      </section>
    </>
  );
};

export default Explore;
