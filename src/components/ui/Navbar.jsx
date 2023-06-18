import React from "react";
import { FaUser, FaChartSimple } from "react-icons/fa";
import { IoNotificationsSharp, IoStatsChartSharp } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { BsBell, BsBarChart, BsDot, BsHouseCheck } from "react-icons/bs";
import Image from "next/image";
import profileImage from "../../../public/images/image01.png";

const Navbar = () => {
  return (
      <div className="flex justify-between items-center bg-white gap-48 px-4 py-2 cursor-pointer border border-sm rounded-lg mt-4 text-gray-600 w-[90%]">
        <RiMenuUnfoldFill size={25} />
        <div className="flex items-center justify-around gap-6">
          <BsHouseCheck size={25} />
          <BsBarChart size={25} />
          <div className="relative">
            <span class="absolute rounded-full h-4 w-4 bg-blue-500 border border-4 border-white -top-2 -right-1"></span>
            <BsBell size={25} />
          </div>
          <div className="relative">
            <span class="absolute rounded-full h-4 w-4 bg-green-500 border border-4 border-white right-0 bottom-0"></span>
            <Image
              src={profileImage}
              height={50}
              width={50}
              alt="Image"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
  );
};

export default Navbar;
