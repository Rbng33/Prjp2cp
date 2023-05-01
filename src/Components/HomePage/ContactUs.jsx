import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

import { Clock } from "react-feather";
import { FiMapPin } from "react-icons/fi";
import { DollarSign } from "react-feather";

const ContactUs = () => {
  return (
    <div className="  w-full flex flex-col justify-center text-center text-white ">
      <div className=" flex flex-col">
        <form
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border-[#191A43]  p-1
          rounded-xl text-white bg-[#191A43] hover:scale-105 duration-100 pr-2"
        >
          <div>
            <input
              className="bg-transparent w-full font-[Inter] text-sm focus:outline-none pl-5 "
              type="email"
              placeholder=" Entrez votre email"
            />
          </div>

          <div>
            <button className="  py-3 px-3 text-sm text-[#191A43] bg-[#FDD2CD] rounded-md hover:bg-white ">
              {/* <AiOutlineSearch
                size={20}
                className="color:#5B112B text-2xl cursor-pointer"
              /> */}
              M'inscrire
            </button>
          </div>
        </form>
      </div>
      {/* <div className=" mx-auto grid grid-cols-4 gap-5 pt-3">
        <div className="bg-transparent w-full  flex flex-col my-3 rounded-lg ">
          <button
            className=" p-3 bg-[#FB9B90] border-2 border-[#ED6361]  rounded-md hover:scale-105 duration-300"
            title="% Distance"
          >
            <FiMapPin size={15} className="color:#5B112B  cursor-pointer" />
          </button>
        </div>

        <div className="bg-transparent w-full  flex flex-col my-3 rounded-lg ">
          <button
            className=" p-3  bg-[#FB9B90] border-2 border-[#ED6361]  rounded-md hover:scale-105 duration-300"
            title="Mieux notés"
          >
            <AiOutlineStar
              size={15}
              className="color:#5B112B  cursor-pointer"
            />
          </button>
        </div>

        <div className="bg-transparent w-full   my-3 rounded-lg  ">
          <button
            className=" p-3  bg-[#FB9B90] border-2 border-[#ED6361]  rounded-md hover:scale-105 duration-300"
            title="horaire douverture"
          >
            <Clock size={15} className="color:#5B112B  cursor-pointer " />
          </button>
        </div>

        <div className="bg-transparent w-full   my-3 rounded-lg  ">
          <button
            className=" p-3  bg-[#FB9B90] border-2 border-[#ED6361]  rounded-md hover:scale-105 duration-300"
            title="Tarifs"
          >
            <DollarSign size={15} className="color:#5B112B  cursor-pointer " />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
