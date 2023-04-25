import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Images from "../../assets/images";
const ListSpace = ({ Space_filter }) => {
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
  console.log(Space_filter);
  return (
    <div className="pt-32">
      <div className="lg:px-20 px-5">
        {Space_filter.map(({ SpaceName, author, imgtag, id }) => (
          <Link key={id} to="/lifeatspace">
            <div className="flex mb-6 cursor-pointer">
              <div className="w-fit "> {imgtag}</div>
              <div className="ml-5 leading-5">
                <p className="text-lg lg:text-xl font-medium lg:font-semibold w-52 lg:w-56 lg:mt-3">
                  {SpaceName}
                </p>
                <span className="text-gray-500 lg:text-base lg:font-medium">
                  {author}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-white pt-10 pb-16 px-14 rounded-2xl shadow-lg w-[24.875rem] h-[19.75rem] fixed top-40 right-0 mr-14 hidden lg:block">
        <h1 className="text-2xl font-bold mt-5 mb-2 max-w-[14rem]">
          Can't find what you are looking for?
        </h1>
        <p className="text-sm text-thBlack font-medium max-w-[14rem]">
          Submit your own content for a chance to be featured on LifeAt.
        </p>
        <Link to="/howlifeatwork">
          <div className="flex bg-[#455bff] items-center justify-center py-3 rounded-2xl mt-4 ">
            <p className=" text-white text-center text-sm font-medium ">
              Showcase
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ListSpace;
