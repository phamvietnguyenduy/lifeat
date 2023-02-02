import React from "react";
const AniArticles = ({
  scrollCheck,
  yMin,
  yMax,
  ymblMin,
  ymblMax,
  title,
  content,
  reverse,
  mousePos,
  imgSrc,
}) => {
  const [src, src2, src3] = imgSrc;
  // console.log(imgSrc);
  let Y = 0;
  let X = mousePos.x / 100;
  let Opacity = 0;
  if (
    (scrollCheck > yMin && scrollCheck < yMax) ||
    (scrollCheck > ymblMin && scrollCheck < ymblMax)
  ) {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-4 lg:gap-y-0 mx-auto w-[90%] items-center lgjustify-items-center md:gap-x-32">
      <div
        className={`content max-w-[30rem] h-fit mt-40 lg:mt-0 ${reverse?.col2}`}
      >
        <h2
          className="font-bold w-full lg:mx-auto text-3xl lg:text-6xl pb-6 text-thBlack will-change-transform transition ease-in-out delay-150 duration-700"
          style={{
            transform: `translate3d(0px,${Y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: `${Opacity}`,
          }}
        >
          {title}
        </h2>
        <p
          className="font-normal text-[21px] text-gray-500 py-4 will-change-transform transition ease-in-out delay-170 duration-1000"
          style={{
            transform: `translate3d(0px,${Y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: `${Opacity}`,
          }}
        >
          {content}
        </p>
      </div>
      <div className={`relative rounded-xl ${reverse?.col1} ${reverse?.row1}`}>
        <div className="gif_tag w-[320px] lg:w-full ">
          <img
            src={src2}
            alt=""
            className={`absolute will-change-transform transition duration-500 ${reverse?.hidden}`}
            style={{
              transform: `translate3d(${X * -1}rem,${
                (mousePos.y / 100) * -1
              }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
            }}
          />
          <img
            src={src3}
            alt=""
            className={`absolute will-change-transform transition duration-500 ${reverse?.hidden}`}
            style={{
              transform: `translate3d(${X - 3}rem,${
                (mousePos.y / 100) * -1 - 3
              }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
            }}
          />
          <img
            src={src}
            alt=""
            className="w-[36rem] lg:h-[39rem] will-change-transform transition duration-500"
            style={{
              transform: `translate3d(${X}rem,${
                mousePos.y / 100
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
