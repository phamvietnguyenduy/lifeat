import React, { useState } from "react";
import SideBar from "./SideBar";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import lfgbg from "../../assets/video4k/lfgbg.gif";
import ControlBar from "./ControlBar";
import Invite from "./Invite";
import Boxchat from "./Boxchat/Boxchat";
const Space = () => {
  const [checkInout, setcheckInout] = useState(true);
  const [css, setcss] = useState({});
  const inout_transform = () => {
    if (checkInout) {
      setcheckInout(false);
      setcss({
        x: "-22",
        sx: "0",
        tx: "-12",
        cx: "-22",
      });
      console.log(checkInout);
    } else {
      setcheckInout(true);
      setcss({
        x: "0",
        sx: "1",
        tx: "0",
        cx: "0",
      });
      console.log(checkInout);
    }
  };
  return (
    <div className="w-screen h-screen overflow-y-hidden">
      <div className="w-screen h-screen">
        {/* <video autoPlay loop muted className="object-cover w-full h-full">
          <source src={peak} type="video/mp4" />
        </video> */}
        <img src={lfgbg} alt="" className="w-screen h-screen" />
      </div>
      <div className="box">
        <div
          className={`in_out absolute top-20 left-72 cursor-pointer text-thDark round glass py-3 pl-16 pr-2 rounded-tr-md rounded-br-md will-change-transform transition ease-in-out delay-150 duration-300`}
          style={{
            transform: `translate3d(${css.x}rem,0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
          }}
          onClick={inout_transform}
        >
          {checkInout ? (
            <GoTriangleLeft size={20} />
          ) : (
            <GoTriangleRight size={20} />
          )}
        </div>
        <ControlBar css={css} />
        <SideBar css={css} />
        <Invite css={css} />
        <Boxchat />
      </div>
    </div>
  );
};

export default Space;
