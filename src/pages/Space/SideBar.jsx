import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation } from "swiper";
import { FiLink } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { RiMenuAddLine, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import Images from "../../assets/images";
import savingSound from "../../assets/sounds/savingSound.mp3";
import unsavingSound from "../../assets/sounds/unsavingSound.mp3";
import rainlight from "../../assets/sounds/rainlight.mp3";
//import swiper css
import "swiper/css";
//import components
import FaqBtn from "./FaqBtn";
import Shuffle from "./Shuffle";
import Notification from "./Notification";
SwiperCore.use([Navigation]);
const SideBar = ({ css }) => {
  const save = new Audio(savingSound);
  const unSave = new Audio(unsavingSound);
  const speakerState = useRef();
  const notifiRef = useRef();
  const [volume, setvolume] = useState(0);
  const [passVolume, setpassVolume] = useState(0);
  const [checkHeart, setcheckHeart] = useState(false);
  const [checkNotifi, setcheckNotifi] = useState(false);
  const [time, settime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const handleVolume = (e) => {
    setvolume(e.target.value);
  };
  const handleSave = () => {
    if (checkHeart === false) {
      save.play();
      setcheckHeart(true);
    } else {
      unSave.play();
      setcheckHeart(false);
    }
  };
  const handleVolumeoff = () => {
    if (volume > 0) {
      setpassVolume(volume);
      setvolume(0);
    } else {
      setvolume(passVolume);
    }
  };
  //Slide Volume
  useEffect(() => {
    speakerState.current.volume = volume / 100;
  }, [volume]);
  //Get time and update by ms
  useEffect(() => {
    const updatetime = setInterval(() => {
      settime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => {
      clearInterval(updatetime);
    };
  }, []);
  useEffect(() => {
    const listener = (e) => {
      if (!notifiRef.current || notifiRef.current.contains(e.target)) {
        return;
      }
      setcheckNotifi(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [notifiRef]);
  const onOffnotifi = () => {
    checkNotifi ? setcheckNotifi(false) : setcheckNotifi(true);
  };
  return (
    <div
      className={`w-[21rem] ml-3 fixed top-3 glass rounded-md py-3 transition ease-in-out delay-150 duration-300`}
      style={{
        transform: `translate3d(${css.tx}rem,0px, 0px) scale3d(${css.sx}, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="Advertise bg-[#e9006b] px-2 py-2 rounded-md mx-3">
        <div className="text-xs text-white font-medium flex justify-center py-3">
          <span className="text-xl">💗</span>
          Co-work with us this Valentine’s day! Join the room →
        </div>
      </div>
      <div className="flex mt-3 justify-between mx-3">
        <Link to="/explore">
          <div className="bg-gray-100 rounded-md px-2 py-1 text-base text-thDark font-medium">
            Explore 🔎{" "}
          </div>
        </Link>
        <div className="text-base text-thDark font-circula">{time}</div>
      </div>
      <div className="Shuffle flex flex-col-reverse mx-3 mb-8">
        <Shuffle />
      </div>
      <div className="glass mt-3 pb-4 mb-8">
        <div className="flex py-4 pr-2 pl-8 justify-between">
          <div>
            <h3 className="text-base font-circula text-gray-600">
              LifeAt Rainy HQ
            </h3>
            <p className="font-medium text-sm text-gray-400">Share Space →</p>
          </div>
          <div className="flex h-fit justify-center">
            <div className="glass px-2 py-2 rounded-md mr-1">
              {checkHeart ? (
                <BsHeartFill
                  className="text-red-400"
                  size={22}
                  onClick={handleSave}
                />
              ) : (
                <BsHeart
                  className="text-red-400"
                  size={22}
                  onClick={handleSave}
                />
              )}
            </div>
            <div className="glass px-2 py-2 rounded-md mr-1">
              <RiMenuAddLine size={22} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pr-7 pl-8 py-2">
          <div>
            {volume > 0 ? (
              <MdVolumeUp
                className="text-thDark"
                size={25}
                onClick={handleVolumeoff}
              />
            ) : (
              <MdVolumeOff
                className="text-thDark"
                size={25}
                onClick={handleVolumeoff}
              />
            )}
          </div>
          <div className="w-0">
            <video
              src={rainlight}
              autoPlay
              controls
              loop
              ref={speakerState}
            ></video>
          </div>
          <input
            type="range"
            className="h-[2px] flex-1 ml-3"
            onChange={(e) => {
              handleVolume(e);
            }}
            value={volume}
          />
        </div>
      </div>
      <div className="ml-3 flex">
        <div>
          <img src={Images.book} alt="" className="w-11 h-11 rounded-full" />
        </div>
        <div className="ml-3">
          <div className="flex">
            <span className="bg-trans-text trans-text font-medium text-base">
              @LifeAt
            </span>
            <p className="rounded-full ml-1 bg-blue-600 text-white text-[7px] font-extrabold flex items-center justify-center w-3 h-3">
              ✓
            </p>
          </div>
          <div className="flex ml-3 mt-1 text-thDark items-center mb-40">
            <RiInstagramFill size={19} />
            <RiYoutubeFill size={20} className="ml-2" />
            <FaTiktok size={15} className="ml-2" />
            <FiLink className="ml-2" />
          </div>
        </div>
      </div>
      <div className="flex mt-14">
        <FaqBtn conTent={"Desktop app"} />
        <FaqBtn conTent={"Showcase"} />
        <FaqBtn conTent={"FAQ"} />
        <div
          className="border-[1px] w-fit px-3 py-2 rounded-md ml-2 flex justify-center items-center cursor-pointer"
          onClick={onOffnotifi}
        >
          <p className="bg-gray-300 font-circula py-[5px] px-[5px] rounded-full"></p>
        </div>
      </div>
      <div>{checkNotifi && <Notification ref={notifiRef} />}</div>
    </div>
  );
};

export default SideBar;
