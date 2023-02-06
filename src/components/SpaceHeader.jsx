import React, { lazy, useState, useEffect, useRef } from "react";
import ListSpace from "../pages/Home/ListSpace";
import { Link, useLocation } from "react-router-dom";
import Images from "../assets/images";
const SpaceHeader = () => {
  const [Search, setSearch] = useState("");
  const TypingTimeout = useRef(null);
  const [StateItem, setStateItem] = useState(false);
  const Spaces = [
    {
      SpaceName: "The Georgia Aquarium",
      author: "[LIVE]",
      imgtag: (
        <img
          src={Images.aquarium}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto  "
        />
      ),
      id: 1,
    },
    {
      SpaceName: "Code with me",
      author: "Yaroslav Shuraev",
      imgtag: (
        <img
          src={Images.cody}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto "
        />
      ),
      id: 2,
    },
    {
      SpaceName: "Shanghai, China",
      author: "",
      imgtag: (
        <img
          src={Images.shanghai}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto "
        />
      ),
      id: 3,
    },
    {
      SpaceName: "a train ride of peace and quiet",
      author: "Chill with Taiki",
      imgtag: (
        <img
          src={Images.train}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto "
        />
      ),
      id: 4,
    },
    {
      SpaceName: "City and Sea view, Wong Chuk Hang, Hong Kong",
      author: "alieslife_",
      imgtag: (
        <img
          src={Images.Hongkong}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto "
        />
      ),
      id: 5,
    },
    {
      SpaceName: "Side Streets",
      author: "The Jazz Hop Cafe",
      imgtag: (
        <img
          src={Images.japanstreet}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto "
        />
      ),
      id: 6,
    },
    {
      SpaceName: "space in my heart ⛅chill lofi mix",
      author: "billow",
      imgtag: (
        <img
          src={Images.lofi}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto "
        />
      ),
      id: 7,
    },
    {
      SpaceName: "Our Blue Sky",
      author: "SagiTori",
      imgtag: (
        <img
          src={Images.bluesky}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto "
        />
      ),
      id: 8,
    },
    {
      SpaceName: "Cozy room ambience ASMR🌙",
      author: "RainRider Ambience",
      imgtag: (
        <img
          src={Images.cozyroom}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto "
        />
      ),
      id: 9,
    },
    {
      SpaceName: "Fujisan. 🗻 japan lofi vibes",
      author: "The Jazz Hop Cafe",
      imgtag: (
        <img
          src={Images.fuji}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto "
        />
      ),
      id: 10,
    },
  ];
  //onchange search filter
  const handle_searchchange = (e) => {
    const value_search = e.target.value;
    //debounce technique
    if (TypingTimeout.current) {
      clearTimeout(TypingTimeout.current);
    }
    TypingTimeout.current = setTimeout(() => {
      setSearch(value_search);
      if (StateItem === true) {
        setStateItem(false);
      } else setStateItem(true);
    }, 500);
  };
  const Space_filter = Spaces.filter((Space) =>
    Space.SpaceName.toLowerCase().includes(Search.toLowerCase())
  );
  console.log(Space_filter);
  return (
    <div>
      <div
        className={`fixed w-full bg-[#f8f8f8] h-20 text-gray-700 z-30 mb-10 `}
      >
        <div className="flex items-center mx-auto px-6 h-full">
          <h1 className="text-gray-700 font-medium tracking-widest text-2xl">
            LifeAt
          </h1>
          <Link to="/space">
            <input
              type="text"
              placeholder="Try-Pet,Haiwai,..."
              onChange={handle_searchchange}
              className="pl-3 pr-24 py-3 ml-3 focus:outline-none text-sm text-white rounded-2xl bg-gray-300 "
            />
          </Link>
        </div>
      </div>

      <ListSpace Space_filter={Space_filter} />
    </div>
  );
};

export default SpaceHeader;
