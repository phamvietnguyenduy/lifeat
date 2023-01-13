import React from "react";
import videoposter from "../assets/images/videoposter.mp4";
import Images from "../assets/images";
const AniArticles = ({
  Scrollcheck,
  Ymin,
  Ymax,
  Tittle,
  Content,
  Reverse,
  MousePos,
  Src,
  Src2,
  Src3,
}) => {
  // console.log(src);
  let Y = 0;
  let X = MousePos.x / 100;
  let Opacity = 0;
  if (Scrollcheck > Ymin && Scrollcheck < Ymax) {
    Y = 0;
    Opacity = 1;
  } else {
    Y = 48;
    Opacity = 0;
  }
  if (X > 7) {
    X = 5;
  }
  return (
    <div className="grid grid-cols-2 mx-auto gap-x-18 w-[90%] items-center justify-items-center">
      <div className={`content max-w-[30rem] h-fit ${Reverse?.col2}`}>
        <h2
          className="font-bold text-6xl pb-6 text-thBlack will-change-transform transition ease-in-out delay-150 duration-700"
          style={{
            transform: `translate3d(0px,${Y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: `${Opacity}`,
          }}
        >
          {Tittle}
        </h2>
        <p
          className="font-normal text-[21px] text-gray-500 py-4 will-change-transform transition ease-in-out delay-170 duration-1000"
          style={{
            transform: `translate3d(0px,${Y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: `${Opacity}`,
          }}
        >
          {Content}
        </p>
      </div>
      <div className={`relative rounded-xl ${Reverse?.col1} ${Reverse?.row1}`}>
        <div className="gif_tag">
          <img
            src={Src2}
            alt=""
            className={`absolute will-change-transform transition duration-500 ${Reverse?.hidden}`}
            style={{
              transform: `translate3d(${X * -1}rem,${
                (MousePos.y / 100) * -1
              }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
            }}
          />
          <img
            src={Src3}
            alt=""
            className={`absolute will-change-transform transition duration-500 ${Reverse?.hidden}`}
            style={{
              transform: `translate3d(${X - 3}rem,${
                (MousePos.y / 100) * -1 - 3
              }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
            }}
          />
          <img
            src={Src}
            alt=""
            className="w-[36rem] h-[39rem] will-change-transform transition duration-500"
            style={{
              transform: `translate3d(${X}rem,${
                MousePos.y / 100
              }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AniArticles;
