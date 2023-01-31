import React from "react";
import { FaDiscord, FaTwitter, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <div className=" px-8 lg:px-20">
        <div className="flex justify-between items-start border-b-[1px] border-gray-400 py-9">
          <h1 className="text-black font-medium tracking-widest text-lg lg:text-4xl">
            LifeAt
          </h1>
          <div className="logo flex justify-around w-[45%] lg:w-[15%] items-start">
            <FaDiscord
              size={33}
              className="bg-black text-white p-1 rounded-md hover:bg-gray-600 mr-2 lg:mr-0"
            />
            <FaTiktok
              size={33}
              className="bg-black text-white p-1 rounded-md hover:bg-gray-600 mr-2 lg:mr-0"
            />
            <FaTwitter
              size={33}
              className="bg-black text-white p-1 rounded-md hover:bg-gray-600 mr-2 lg:mr-0"
            />
            <RiInstagramFill
              size={33}
              className="bg-black text-white p-1 rounded-md hover:bg-gray-600 mr-2 lg:mr-0"
            />
          </div>
        </div>
        <div className="pt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-18">
          <div className="pb-6">
            <p className="font-extrabold pb-2 text-base">Product</p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              How LifeAt Works
            </p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              Use cases
            </p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              Pricing
            </p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              Help Center
            </p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              We are hiring!
            </p>
          </div>
          <div className="pb-6">
            <p className="font-extrabold pb-2">Company</p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              About us
            </p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              Terms of use
            </p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              Privacy
            </p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              Give feedback
            </p>
          </div>
          <div className="pb-6">
            <p className="font-extrabold pb-2">Contact Us</p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              Join our community
            </p>
            <p className="text-base font-semibold text-gray-600 pt-3 hover:text-thBrick">
              Email us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
