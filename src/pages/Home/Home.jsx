import React, { useState, useEffect } from "react";
import Images from "../../assets/images";
import Articles from "./Articles";
import AniArticles from "./AniArticles";
import Slide from "../../components/Slide";
import Transforming from "./Transforming";

const listData = [
  {
    yMin: 2400,
    yMax: 2840,
    src: [Images.agif],
    title: "One-click to task and calendar",
    content:
      "Quick access to your simple task management without leaving your flow",
    reverse: { hidden: "hidden" },
  },
  {
    yMin: 3140,
    yMax: 3760,
    src: [Images.talk, Images.circlebg],
    title: "Feel connected with others",
    content:
      "Improve morale by experiencing digital spaces with your team or friends",
    reverse: { col1: "col-[1]", col2: "col-[2]", row1: "row-[1]" },
  },
  {
    yMin: 3900,
    yMax: 4450,
    src: [Images.time, Images.circlebg, Images.chart],
    title: "Feel connected with others",
    content:
      "Improve morale by experiencing digital spaces with your team or friends",
    reverse: { col1: "col-[1]", col2: "col-[2]", row1: "row-[1]" },
  },
];

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollCheck, setScrollCheck] = useState(false);
  const [localMousePos, setLocalMousePos] = useState({});
  const [bannerCheck, setBannerCheck] = useState(false);
  const handleMouseMove = (event) => {
    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;

    setLocalMousePos({ x: localX, y: localY });
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    scrollCheck ? setScrollCheck(false) : setScrollCheck(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section aria-labelledby="articles" className="relative top-40 py-5 z-0">
      <header
        aria-labelledby="header-articles"
        className="thumb mx-auto w-1/2 h-[23rem]"
      >
        <div className="circle absolute rounded-[650px] opacity-[.97] blur-3xl mx-auto bg-circle-pattern w-[600px] h-[600px] backdrop-blur-sm" />
        <div className="w-1/2 absolute">
          <h2 className="font-extrabold text-thBlack text-center font-Circularstd">
            Your space to focus and get things done
          </h2>
          <p className="text-[20px] text-center">
            Meet the new standard for modern task management
          </p>
          <div className="btn-area w-full absolute  left-[50%] translate-x-[-30%]  mt-5 flex">
            <div className="btn1 px-10 py-3 bg-black hover:bg-thBlack w-fit rounded-lg text-white text-lg font-medium">
              Download desktop app
            </div>
            <div className="btn1 ml-6 px-5 py-3 bg-white w-fit rounded-lg text-black border-2 border-thBlack hover:border-white text-lg font-medium">
              Try in Browser
            </div>
          </div>
          <div className="flex absolute left-[50%] top-[170%] translate-x-[-50%] ">
            <span className="cursor-pointer">
              <div
                className={`uppercase font-bold cursor-pointer ${
                  bannerCheck ? "" : "border-b-2 border-black"
                }`}
                onClick={() => {
                  setBannerCheck(false);
                }}
              >
                with lifeat
              </div>
            </span>
            <span className="ml-10 cursor-pointer">
              <div
                className={`uppercase font-bold cursor-pointer ${
                  bannerCheck ? "border-b-2 border-black" : ""
                }`}
                onClick={() => {
                  setBannerCheck(true);
                }}
              >
                without lifeat
              </div>
            </span>
          </div>
        </div>
      </header>
      <section aria-labelledby="banners-main-articles">
        {bannerCheck ? (
          <img
            src={Images.without}
            className="relative z-10 mx-auto"
            alt="banner"
          />
        ) : (
          <Transforming scrollPosition={scrollPosition} />
        )}
      </section>

      <section aria-labelledby="sponsors" className="brand_ads py-40">
        <p className="text-4xl font-bold text-thBlack text-center">
          Trusted by
        </p>
        <div className="logo_area flex justify-between w-full px-20 mt-5 ">
          <img src={Images.logo1} alt="" className="w-[141px] h-[80px]" />
          <img src={Images.logo2} alt="" className="w-[141px] h-[80px]" />
          <img src={Images.logo3} alt="" className="w-[141px] h-[80px]" />
          <img src={Images.logo4} alt="" className="w-[141px] h-[80px]" />
          <img src={Images.logo5} alt="" className="w-[141px] h-[80px]" />
        </div>
      </section>
      <main aria-labelledby="main-articles">
        <header className="py-40">
          <p className="text-4xl font-bold text-thBlack text-center">
            How it works
          </p>
          <p className="text-[20px] text-center text-gray-500 pt-7">
            Meet the new standard for modern task management
          </p>
        </header>
        <main>
          <div className="pb-40">
            <Articles scrollCheck={scrollPosition} />
          </div>
          {listData.map((data) => (
            <>
              <div className="pt-40">
                <AniArticles
                  scrollCheck={scrollPosition}
                  yMin={data.yMin}
                  yMax={data.yMax}
                  mousePos={localMousePos}
                  imgSrc={data.src}
                  title={data.title}
                  content={data.content}
                  reverse={data.reverse}
                />
              </div>
            </>
          ))}
        </main>
        <footer className="pt-40 pb-16">
          <p className="text-4xl font-bold text-thBlack text-center">
            How others use LifeAt
          </p>
        </footer>
        <div className="pb-40">
          <Slide />
        </div>
      </main>
    </section>
  );
};

export default Home;
