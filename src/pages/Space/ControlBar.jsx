import React, { useRef, useState } from "react";
//import icon
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdAlarm, MdSettings } from "react-icons/md";
import { BsMusicPlayer, BsPencilSquare } from "react-icons/bs";
import { RiSoundModuleLine, RiListCheck2 } from "react-icons/ri";
import { GiCrystalBall } from "react-icons/gi";
//import component
import Timer from "./Timer/Timer";
import Note from "./Note";
import Media from "./Media/Media";
import Sound from "./Sound/Sound";
const ControlBar = ({ css }) => {
  const [isActive, setisActive] = useState(1);
  const [controlState, setcontrolState] = useState({
    timer: { stat: "false", num: 0 },
    text: 0,
    media: { stat: "false", num: 0 },
    note1: { stat: "false", num: 0 },
    sound: { stat: "false", num: 0 },
  });
  const handleclick = (e) => {
    setisActive(e.currentTarget.id);
    return isActive;
  };
  const handleOntime = (e) => {
    controlState.timer.stat == "false"
      ? setcontrolState({
          ...controlState,
          timer: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          timer: { stat: "false", num: 0 },
        });
  };
  const handlenote = (e) => {
    controlState.note1.stat === "false"
      ? setcontrolState({
          ...controlState,
          note1: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          note1: { stat: "false", num: 0 },
        });
  };
  const handleMedia = (e) => {
    controlState.media.stat === "false"
      ? setcontrolState({
          ...controlState,
          media: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          media: { stat: "false", num: 0 },
        });
  };
  const handleSound = (e) => {
    controlState.sound.stat === "false"
      ? setcontrolState({
          ...controlState,
          sound: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          sound: { stat: "false", num: 0 },
        });
  };
  const controlsItem = [
    {
      id: 1,
      icon: <HiOutlinePhotograph size={21} />,
      label: "Space",
      func: handleclick,
    },
    {
      id: 2,
      icon: <AiOutlineCalendar size={21} />,
      label: "Calendar",
      func: handleclick,
    },
    {
      id: 3,
      icon: (
        <MdAlarm
          size={21}
          className={`${controlState.timer.stat === "true" && "active"}`}
        />
      ),
      num: controlState.timer.num,
      label: "Timer",
      func: handleOntime,
    },
    {
      id: 4,
      icon: (
        <BsMusicPlayer
          size={21}
          className={`${controlState.media.stat === "true" && "active"}`}
        />
      ),
      label: "Media",
      num: controlState.media.num,
      func: handleMedia,
    },
    {
      id: 5,
      icon: (
        <RiSoundModuleLine
          size={21}
          className={`${controlState.sound.stat === "true" && "active"}`}
        />
      ),
      label: "Sound",
      num: controlState.sound.num,
      func: handleSound,
    },
    {
      id: 6,
      icon: <RiListCheck2 size={21} />,
      label: "Todo",
      func: handleclick,
    },
    {
      id: 7,
      icon: (
        <BsPencilSquare
          size={21}
          className={`${controlState.note1.stat === "true" && "active"}`}
        />
      ),
      num: controlState.note1.num,
      label: "Note",
      func: handlenote,
    },
    {
      id: 8,
      icon: <GiCrystalBall size={21} />,
      label: "Fortune",
      func: handleclick,
    },
    {
      id: 9,
      icon: <p className="text-2xl text-gray-300 ">+</p>,
      label: "",
      func: handleclick,
    },
  ];

  return (
    <>
      <div
        className="glass fixed left-[22.5rem] top-48 pt-3 rounded-lg transition ease-in-out delay-150 duration-300 will-change-transform"
        style={{
          transform: `translate3d(${css.cx}rem,0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="text-thDark  flex flex-col gap-y-2 border-b-[1px] px-2">
          {controlsItem.map(({ id, icon, num, label, func }) => (
            <div
              key={id}
              id={id}
              className={`flex justify-center items-center flex-col cursor-pointer   ${
                isActive == id && "active"
              }`}
              onClick={(e) => func(e)}
            >
              {icon}
              <p
                className={`text-[11px] font-circula ${num === id && "active"}`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
        <div className="text-gray-300 flex px-2 py-2 items-center justify-center">
          <MdSettings />
        </div>
      </div>
      <Timer setcontrolState={setcontrolState} controlState={controlState} />
      <Note setcontrolState={setcontrolState} controlState={controlState} />
      <Media setcontrolState={setcontrolState} controlState={controlState} />
      <Sound setcontrolState={setcontrolState} controlState={controlState} />
    </>
  );
};

export default ControlBar;
