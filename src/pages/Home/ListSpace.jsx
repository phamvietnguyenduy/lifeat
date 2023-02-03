import React from "react";
import Images from "../../assets/images";
const ListSpace = () => {
  const Spaces = [
    {
      SpaceName: "The Georgia Aquarium",
      author: "[LIVE]",
      imgtag: <img src={Images.aquarium} alt="" className="w-20 rounded-md" />,
      id: 1,
    },
    {
      SpaceName: "Code with me",
      author: "Yaroslav Shuraev",
      imgtag: <img src={Images.cody} alt="" className="w-20" />,
      id: 2,
    },
    {
      SpaceName: "Shanghai, China",
      author: "",
      imgtag: <img src={Images.shanghai} alt="" className="w-20" />,
      id: 3,
    },
    {
      SpaceName: "a train ride of peace and quiet",
      author: "Chill with Taiki",
      imgtag: <img src={Images.train} alt="" className="w-20" />,
      id: 4,
    },
    {
      SpaceName: "City and Sea view, Wong Chuk Hang, Hong Kong",
      author: "alieslife_",
      imgtag: <img src={Images.Hongkong} alt="" className="w-20" />,
      id: 5,
    },
    {
      SpaceName: "Side Streets",
      author: "The Jazz Hop Cafe",
      imgtag: <img src={Images.japanstreet} alt="" className="w-20" />,
      id: 6,
    },
    {
      SpaceName: "space in my heart ⛅chill lofi mix",
      author: "billow",
      imgtag: <img src={Images.lofi} alt="" className="w-20" />,
      id: 7,
    },
  ];
  return (
    <div className="pt-40 ">
      <div className="pl-6">
        {Spaces.map(({ SpaceName, author, imgtag, id }) => (
          <div key={id} className="flex mb-6">
            <div className=""> {imgtag}</div>
            <div className="ml-5 leading-5">
              <p className="text-lg font-medium">{SpaceName}</p>
              <span className="text-gray-500">{author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSpace;
