import React from "react";
import Images from "../assets/images";
const Transformimg = ({ ScrollPosition }) => {
  return (
    <div className="item flex justify-center relative z-10">
      <img src={Images.lap} alt="" className="relative " />
      <img
        src={Images.face}
        alt=""
        className="absolute will-change-transform"
        style={{
          transform: `translate3d(${
            -ScrollPosition / 100
          }%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        }}
      />
      <img
        src={Images.list}
        alt=""
        className="absolute will-change-transform"
        style={{
          transform: `translate3d(${
            ScrollPosition / 100
          }%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
};

export default Transformimg;
