import React from "react";
import Images from "../assets/images";
import { useState, useEffect } from "react";
import Articles from "../components/Articles";
import AniArticles from "../components/AniArticles";
import Slide from "../components/Slide";
import Transformimg from "../components/Transformimg";
const Home = () => {
  const [ScrollPosition, setScrollPosition] = useState(0);
  const [Scrollcheck, setScrollcheck] = useState(false);
  const [LocalMousePos, setLocalMousePos] = useState({});
  const [BannerCheck, setBannerCheck] = useState(false);
  const HandleMouseMove = (event) => {
    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;

    setLocalMousePos({ x: localX, y: localY });
  };
  const HandleScroll = () => {
    const Position = window.pageYOffset;
    setScrollPosition(Position);
    Scrollcheck ? setScrollcheck(false) : setScrollcheck(true);
  };
  console.log(BannerCheck);
  useEffect(() => {
    window.addEventListener("scroll", HandleScroll, { passive: true });
    window.addEventListener("mousemove", HandleMouseMove);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
      window.removeEventListener("mousemove", HandleMouseMove);
    };
  }, []);
  return (
    <div className="relative top-40 py-5 z-0">
      <div className="thumb mx-auto w-1/2 h-[23rem]">
        <div className="circle absolute rounded-[650px] opacity-[.97] blur-3xl mx-auto bg-circle-pattern w-[600px] h-[600px] backdrop-blur-sm"></div>
        <div className="Tittile w-1/2 absolute">
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
            <a className="cursor-pointer">
              <div
                className={`uppercase font-bold cursor-pointer ${
                  BannerCheck ? "" : "border-b-2 border-black"
                }`}
                onClick={() => {
                  setBannerCheck(false);
                }}
              >
                with lifeat
              </div>
            </a>
            <a className="ml-10 cursor-pointer">
              <div
                className={`uppercase font-bold cursor-pointer ${
                  BannerCheck ? "border-b-2 border-black" : ""
                }`}
                onClick={() => {
                  setBannerCheck(true);
                }}
              >
                without lifeat
              </div>
            </a>
          </div>
        </div>
      </div>
      {BannerCheck ? (
        <img src={Images.without} className="relative z-10 mx-auto" />
      ) : (
        <Transformimg ScrollPosition={ScrollPosition} />
      )}
      <div className="brand_ads py-40">
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
      </div>
      <div className="py-40">
        <p className="text-4xl font-bold text-thBlack text-center">
          How it works
        </p>
        <p className="text-[20px] text-center text-gray-500 pt-7">
          Meet the new standard for modern task management
        </p>
      </div>
      <div className="pb-40">
        <Articles Scrollcheck={ScrollPosition} />
      </div>
      <div className="pt-40">
        <AniArticles
          Scrollcheck={ScrollPosition}
          Ymin={2400}
          Ymax={2840}
          MousePos={LocalMousePos}
          Src={Images.agif}
          Tittle={"One-click to task and calendar"}
          Content={
            "Quick access to your simple task management without leaving your flow"
          }
          reverse={{ hidden: "hidden" }}
        />
      </div>
      <div className="pt-40">
        <AniArticles
          Scrollcheck={ScrollPosition}
          Ymin={3140}
          Ymax={3760}
          MousePos={LocalMousePos}
          Src={Images.talk}
          Src2={Images.circlebg}
          Tittle={"Feel connected with others"}
          Content={
            "Improve morale by experiencing digital spaces with your team or friends"
          }
          Reverse={{ col1: "col-[1]", col2: "col-[2]", row1: "row-[1]" }}
        />
      </div>
      <div className="pt-40 pb-40">
        <AniArticles
          Scrollcheck={ScrollPosition}
          Ymin={3900}
          Ymax={4450}
          MousePos={LocalMousePos}
          Src={Images.time}
          Src2={Images.circlebg}
          Src3={Images.chart}
          Tittle={"Track your productivity"}
          Content={
            "10x your deep work flow by tracking your daily productivity time."
          }
        />
      </div>
      <div className="pt-40 pb-16">
        <p className="text-4xl font-bold text-thBlack text-center">
          How others use LifeAt
        </p>
      </div>
      <div className="pb-40">
        <Slide />
      </div>
    </div>
  );
};

export default Home;
