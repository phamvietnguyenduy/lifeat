import React from "react";

const Tittle = ({ Css, Titt, Content }) => {
  return (
    <div>
      <div className={`flex justify-center items-center flex-wrap ${Css}`}>
        <h2 className="text-xl lg:text-2xl font-bold w-full text-center mb-10">
          {Titt}
        </h2>
        <p className="text-base lg:text-lg font-medium text-thGray text-center">
          {Content}
        </p>
      </div>
    </div>
  );
};

export default Tittle;
